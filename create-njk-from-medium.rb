require 'open-uri'
require 'nokogiri'
require 'reverse_markdown'

unless ARGV.length == 1 && ARGV[0].include?('medium.com')
  puts "Please provide a valid medium url"
  puts "Usage: ruby create-njk-from-medium.rb https://medium.com/eightshapes-llc/documenting-components-9fe59b80c015\n"
  exit
end

medium_url = ARGV[0]
puts "Retrieving markup from : #{medium_url}"

# Destination filename
filename = medium_url.gsub(/https:\/\/medium.com\/eightshapes-llc\//, '')
last_hypen_index = filename.rindex(/-/)
filename.slice!(last_hypen_index, filename.length)

# doc = Nokogiri::XML(open(medium_url),&:noblanks)
doc = Nokogiri::HTML(open(medium_url),&:noblanks)

# Start formatting medium HTML
published_date = doc.css('.postMetaInline time')
published_date = published_date.empty? ? '' : published_date.text

read_duration = doc.css('.postMetaInline .readingTime')
read_duration = read_duration.empty? ? '' : read_duration.attr('title').text.gsub('min read', '')

article_html = doc.css('.postArticle-content')
title = article_html.css('.graf--title')
title = title.empty? ? '' : title.text

deck = article_html.css('.graf--subtitle')
deck = deck.empty? ? '' : deck.text

article_html.search('.graf--title').remove
article_html.search('.graf--subtitle').remove

medium_attributes_to_remove = ['data-post-id', 'data-source', 'data-collection-id', 'data-tracking-context', 'name', 'data-height' 'data-image-id', 'data-height', 'data-width', 'data-action', 'data-action-value', 'class', 'id', 'data-href', 'style']

medium_attributes_to_remove.each do |a|
  article_html.xpath("//@#{a}").remove
end

# Swap <div><hr></div> for just <hr>
article_html.css('div > hr:first-child:last-child').each { |node| node.parent.replace('<hr/>') }
article_html.css('section').each { |node| node.replace(node.children) }
article_html.css('div > div').each { |node| node.replace(node.children) }
article_html.css('div > img').each { |node| node.parent.replace(node.parent.children) }
article_html.css('div > br:first-child').remove
article_html.css('div > hr:first-child').remove

# h3's > h2's
article_html.css('h3').each { |node| node.replace("<h2>#{node.children}</h2>") }

# h4's > h3's
article_html.css('h4').each { |node| node.replace("<h3>#{node.children}</h3>") }

# SCRAPE IMAGES
puts "Creating image directory: /images/articles/#{filename}"
article_image_directory = "images/articles/#{filename}"
Dir.mkdir(article_image_directory) unless File.exists?(article_image_directory)

puts "Downloading images:"
featured_image = article_html.css("img[data-is-featured='true']")
images = article_html.css("img:not([data-is-featured='true'])")

figures = article_html.css("figure")
masthead = false

unless figures.empty?
  numbered_image_index = 1
  figures.each do |fig|
    img = fig.css("img")

    if img.attr('data-is-featured')
      masthead = true
      puts "Downloading Masthead image: #{img.attr('src')}"
      File.open("#{article_image_directory}/Masthead.png", 'wb') do |fo|
        fo.write open(img.attr('src')).read 
      end

      # Remove the featured image figure from the article content
      fig.remove
    else
      # Not the featured image
      puts "Downloading Article image: #{img.attr('src')}"
      File.open("#{article_image_directory}/#{numbered_image_index}.png", 'wb') do |fo|
        fo.write open(img.attr('src')).read 
      end

      caption = ""
      figcaption = fig.css('figcaption')
      if !figcaption.empty?
        caption = figcaption.first.children.to_xhtml
      end

      fig.replace("<insulate>{% endfilter %}

{{ escom.article_figure(
    image_path = title_image_path,
    image_number = '#{numbered_image_index}',
    image_alt = '',
    caption = '#{caption}'
) }}

{% filter markdown %}</insulate>")

      numbered_image_index = numbered_image_index + 1
    end
  end
end

# unless featured_image.empty?
#   masthead = true
#   puts "Downloading Masthead image: #{featured_image.attr('src')}"
#   File.open("#{article_image_directory}/Masthead.png", 'wb') do |fo|
#     fo.write open(featured_image.attr('src')).read 
#   end
#   # Remove the featured image from the article content, the nunjucks template will automatically include Masthead.png
#   featured_image.each { |node| node.remove }
# end

# unless images.empty?
#   images.each_with_index do |i, index|
#     puts "Downloading Article image: #{i.attr('src')}"
#     File.open("#{article_image_directory}/#{index + 1}.png", 'wb') do |fo|
#       fo.write open(i.attr('src')).read 
#     end

#     # figure = i.parent

#     i.replace("{{ escom.article_figure(
#                   image_path = title_image_path,
#                   image_number = '#{index + 1}',
#                   image_alt = '',
#                   caption = ''
#               ) }}")
#   end
# end

# CONVERT HTML TO MARKDOWN
article_html = ReverseMarkdown.convert article_html.to_xhtml
# After conversion strip <insulate> tags that protect nunjucks macros from gettin munged by the ReverseMarkdown gem
article_html = article_html.gsub(/<insulate>/, '').gsub(/<\/insulate>/, '')

# article_html = article_html.to_xhtml
# End formatting medium HTML

article_template_pre = "{% set title = '#{title}' %}
{% set title_image_path = title | lower | replace(' ','-') %}
{% set deck = '#{deck}' %}
{% set author = 'Nathan Curtis' %}
{% set author_role = 'Founder of UX firm @eightshapes. Speaker. Writer. Fan of Arsenal, Hokies. Cyclist & runner. Father & husband. VT & @uchicago grad.' %}
{% set published_date = '#{published_date}' %}
{% set read_duration = '#{read_duration}' %}
{% set masthead = #{masthead} %}

{% set title_tag = 'EightShapes > Articles >'  + title %}
{% extends 'templates/article.njk' %}

{% block main_article %}
  {% filter markdown %}\n"

article_template_post = "\n\n  {% endfilter %}\n{% endblock %}"

# article_content = "#{article_template_pre}#{article_html.to_xhtml( indent:2, indent_text:" " )}#{article_template_post}"
article_content = "#{article_template_pre}#{article_html}#{article_template_post}"

puts "Writing to file: /pages/articles/#{filename}"
File.open("pages/articles/#{filename}.njk", 'w') { |file| file.write(article_content) }




# File.open('pie.png', 'wb') do |fo|
#   fo.write open("http://chart.googleapis.com/chart?#{failures_url}").read 
# end

puts "COMPLETE"
