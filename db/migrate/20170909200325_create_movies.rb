class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :genres
      t.string :homepage
      t.integer :movie_id
      t.string :original_title
      t.string :overview
      t.string :poster_path
      t.string :release_date
      t.integer :runtime
      t.string :tagline
      t.boolean :video
      t.integer :vote_average
      t.references :movie_list, foreign_key: true

      t.timestamps
    end
  end
end
