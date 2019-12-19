require './_medium-import-create-njk.rb'

unless ARGV.length == 1 && ARGV[0].include?('medium.com')
  puts "Please provide a valid medium url"
  puts "Usage: ruby import-medium-article-to-site.rb https://medium.com/eightshapes-llc/documenting-components-9fe59b80c015\n"
  exit
end

medium_url = ARGV[0]

create_njk_from_medium(medium_url)
