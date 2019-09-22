require 'spec_helper'

RSpec.describe 'Application', type: :feature do
  context 'when visiting "/"' do
    it 'renders' do
      visit '/'
    end
  end

  context 'when visiting "/about"' do
    it 'renders' do
      visit '/about'
    end
  end

  context 'when visiting "/features"' do
    it 'renders' do
      visit '/features'
    end
  end

  context 'when visiting "/press"' do
    it 'renders' do
      visit '/press'
    end
  end

  context 'when visiting "/social"' do
    it 'renders' do
      visit '/social'
    end
  end

  context 'when visiting "/download"' do
    it 'redirects' do
      visit '/download'
    end
  end
end
