require 'rails_helper'

feature 'Search' do

  before do
    visit root_path
  end

  scenario 'Successful search with city', js: true do
    fill_in 'term', with: 'Sushi'
    fill_in 'city', with: 'Huntington Beach, CA'
    click_button 'Search'

    expect(page).to have_content 'Sushi On Fire'
    expect(page).to have_content 'Matsu Restaurant'
  end

  scenario 'Successful search with zip code', js: true do
    fill_in 'term', with: 'Sushi'
    fill_in 'city', with: '92647'
    click_button 'Search'

    expect(page).to have_content 'Sushi On Fire'
    expect(page).to have_content 'Matsu Restaurant'
  end

  scenario 'Unsuccessful search with no result', js: true do
    fill_in 'term', with: 'dsfdsfsdf'
    fill_in 'city', with: 'erewrbfgdf'
    click_button 'Search'

    expect(page).to_not have_content 'Sushi On Fire'
    expect(page).to_not have_content 'Matsu Restaurant'
  end

  scenario 'Unsuccessful search with no parameters', js: true do
    click_button 'Search'

    expect(page).to_not have_content 'Sushi On Fire'
    expect(page).to_not have_content 'Matsu Restaurant'
  end
end