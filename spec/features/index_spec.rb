require 'rails_helper'

feature 'Search', js: true do

  before do
    visit root_path
  end

  scenario 'Successful search with city' do
    VCR.use_cassette("yelp search", :record => :new_episodes) do
      fill_in 'term', with: 'Sushi'
      fill_in 'city', with: 'Huntington Beach, CA'
      click_button 'Search'

      expect(page).to have_content 'Sushi On Fire'
      expect(page).to have_content 'Matsu Restaurant'
    end
  end

  scenario 'Successful search with zip code' do
    VCR.use_cassette("yelp search", :record => :new_episodes) do
      fill_in 'term', with: 'Sushi'
      fill_in 'city', with: '92647'
      click_button 'Search'

      expect(page).to have_content 'Sushi On Fire'
      expect(page).to have_content 'Matsu Restaurant'
    end
  end

  scenario 'Unsuccessful search with no result' do
    VCR.use_cassette("unsuccessful yelp search", :record => :new_episodes) do
      fill_in 'term', with: 'dsfdsfsdf'
      fill_in 'city', with: 'erewrbfgdf'
      click_button 'Search'

      expect(page).to_not have_content 'Sushi On Fire'
      expect(page).to_not have_content 'Matsu Restaurant'
    end
  end

  scenario 'Unsuccessful search with no parameters' do
    VCR.use_cassette("unsuccessful yelp search", :record => :new_episodes) do
      click_button 'Search'

      expect(page).to_not have_content 'Sushi On Fire'
      expect(page).to_not have_content 'Matsu Restaurant'
    end
  end
end