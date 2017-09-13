class AddColumnUserIdToMovieList < ActiveRecord::Migration[5.1]
  def change
    add_reference :movie_lists, :user, foreign_key: true
  end
end
