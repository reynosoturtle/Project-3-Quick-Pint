class FavoritesController < ApplicationController
  def index
    @favorites = current_user.all_favorites
    @page_title = 'My Favourites'
  end
end
