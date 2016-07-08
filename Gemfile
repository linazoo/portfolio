source "https://rubygems.org"

# Ruby Requirement
# ruby '2.2.3'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

# Gem Requirements
gem 'sass',  '>=3.4.3'
gem 'jekyll', '>=3.0'
gem 'jekyll-sitemap'
gem 'jekyll-paginate'
