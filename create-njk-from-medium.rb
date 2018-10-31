require 'open-uri'
require 'nokogiri'

unless ARGV.length == 1 && ARGV[0].include?('medium.com')
  puts "Please provide a valid medium url"
  puts "Usage: ruby create-njk-from-medium.rb https://medium.com/eightshapes-llc/documenting-components-9fe59b80c015\n"
  exit
end

medium_url = ARGV[0]
puts "Retrieving markup from : #{medium_url}"

# doc = Nokogiri::XML(open(medium_url),&:noblanks)
doc = Nokogiri::HTML(open(medium_url),&:noblanks)

# Start formatting medium HTML
article_html = doc.css('.postArticle-content')

medium_attributes_to_remove = ['data-post-id', 'data-source', 'data-collection-id', 'data-tracking-context', 'name', 'data-height' 'data-image-id', 'data-height', 'data-width', 'data-action', 'data-action-value', 'class', 'id', 'data-href', 'style']

medium_attributes_to_remove.each do |a|
  article_html.xpath("//@#{a}").remove
end
# End formatting medium HTML


article_template_pre = "{% set title = '' %}
{% set title_image_path = title | lower | replace(' ','-') %}
{% set deck = '' %}
{% set author = 'Nathan Curtis' %}
{% set author_role = 'Founder of UX firm @eightshapes. Speaker. Writer. Fan of Arsenal, Hokies. Cyclist & runner. Father & husband. VT & @uchicago grad.' %}
{% set published_date = '' %}
{% set read_duration = '' %}
{% set masthead = true %}

{% set title_tag = 'EightShapes > Articles >'  + title %}
{% extends 'templates/article.njk' %}

{% block main_article %}\n"

article_template_post = "\n\n{% endblock %}"

article_content = "#{article_template_pre}#{article_html.to_xhtml( indent:2, indent_text:" " )}#{article_template_post}"
# article_content = "#{article_template_pre}#{article_html}#{article_template_post}"

File.open('pages/articles/imported-from-medium.njk', 'w') { |file| file.write(article_content) }


puts article_html
