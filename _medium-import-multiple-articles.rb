require './_medium-import-create-njk.rb'

eightshapes_medium_articles = [
  "https://medium.com/p/3835b2eb8e52?source=user_profile---------42------------------",
  "https://medium.com/p/1378ae110517?source=user_profile---------43------------------",
  "https://medium.com/p/4b81d41be0d4?source=user_profile---------44------------------",
  "https://medium.com/p/9bfba3849461?source=user_profile---------45------------------",
  "https://medium.com/p/d3b86d26ebb?source=user_profile---------46------------------",
  "https://medium.com/p/47eaae48de98?source=user_profile---------47------------------",
  "https://medium.com/p/2cf9d03be6a0?source=user_profile---------48------------------"
]

eightshapes_medium_articles_count = eightshapes_medium_articles.count

eightshapes_medium_articles.each_with_index do |medium_url, index|
  puts "IMPORTING ARTICLE: #{index + 1} of #{eightshapes_medium_articles_count}\n#{medium_url}\n\n"
  create_njk_from_medium(medium_url)
  puts "\n\n\n\n"
end
