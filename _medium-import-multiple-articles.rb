require './_medium-import-create-njk.rb'

eightshapes_medium_articles = [
  'https://medium.com/eightshapes-llc/documenting-components-9fe59b80c015',
  'https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871',
  'https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62',
  'https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421',
  'https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0',
  'https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce',
  'https://medium.com/eightshapes-llc/stealing-time-in-user-research-64a52866f7c0',
  "https://medium.com/p/aa6ce2cf7bc3?source=user_profile---------2------------------",
  "https://medium.com/p/48cceb5ace4d?source=user_profile---------3------------------",
  "https://medium.com/p/57fca91a23f6?source=user_profile---------4------------------",
  "https://medium.com/p/2e3e6694ba21?source=user_profile---------5------------------",
  "https://medium.com/p/1e9109fac9c4?source=user_profile---------6------------------",
  "https://medium.com/p/eca706100e7c?source=user_profile---------7------------------",
  "https://medium.com/p/d814fd390389?source=user_profile---------8------------------",
  "https://medium.com/p/8845ecbee50e?source=user_profile---------9------------------",
  "https://medium.com/p/9c4b3bb3b308?source=user_profile---------10------------------",
  "https://medium.com/p/fe5b04287284?source=user_profile---------11------------------",
  "https://medium.com/p/9fe59b80c015?source=user_profile---------12------------------",
  "https://medium.com/p/6bb7ce72f393?source=user_profile---------13------------------",
  "https://medium.com/p/955ef18c9409?source=user_profile---------14------------------",
  "https://medium.com/p/4029decf9e30?source=user_profile---------15------------------",
  "https://medium.com/p/60d6ffe42be3?source=user_profile---------16------------------",
  "https://medium.com/p/6dd4b03e0ff6?source=user_profile---------17------------------",
  "https://medium.com/p/e69c90982630?source=user_profile---------18------------------",
  "https://medium.com/p/3b67b9894531?source=user_profile---------19------------------",
  "https://medium.com/p/6b909a578325?source=user_profile---------20------------------",
  "https://medium.com/p/26eb5b5c1871?source=user_profile---------21------------------",
  "https://medium.com/p/71e599ff660a?source=user_profile---------22------------------",
  "https://medium.com/p/d0513a93dd96?source=user_profile---------23------------------",
  "https://medium.com/p/d22f27a2d81d?source=user_profile---------24------------------",
  "https://medium.com/p/3bfa49d79883?source=user_profile---------25------------------",
  "https://medium.com/p/294ee45dcf81?source=user_profile---------26------------------",
  "https://medium.com/p/89261a9363d8?source=user_profile---------27------------------",
  "https://medium.com/p/9f8ea42c9081?source=user_profile---------28------------------",
  "https://medium.com/p/2ce778cbe4e8?source=user_profile---------29------------------",
  "https://medium.com/p/b18cb4decb9c?source=user_profile---------30------------------",
  "https://medium.com/p/188bcbae0d62?source=user_profile---------31------------------",
  "https://medium.com/p/8c0b027322f8?source=user_profile---------32------------------",
  "https://medium.com/p/5f6b8705ba5a?source=user_profile---------33------------------",
  "https://medium.com/p/25dd82d58421?source=user_profile---------34------------------",
  "https://medium.com/p/eac3acf7e23?source=user_profile---------35------------------",
  "https://medium.com/p/a1c80f65fa3?source=user_profile---------36------------------",
  "https://medium.com/p/a06721e81742?source=user_profile---------37------------------",
  "https://medium.com/p/936894ca0f99?source=user_profile---------38------------------",
  "https://medium.com/p/6b33b97f4a8f?source=user_profile---------39------------------",
  "https://medium.com/p/74dcfffef935?source=user_profile---------40------------------",
  "https://medium.com/p/ee2e93149e4a?source=user_profile---------41------------------",
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
