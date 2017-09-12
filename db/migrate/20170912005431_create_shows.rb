class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.integer :show_id
      t.string :original_name
      t.integer :vote_average
      t.string :poster_path
      t.string :overview
      t.string :backdrop_path
      t.integer :vote_average
      t.references :show_list, foreign_key: true

      t.timestamps
    end
  end
end
