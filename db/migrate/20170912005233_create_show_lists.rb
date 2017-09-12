class CreateShowLists < ActiveRecord::Migration[5.1]
  def change
    create_table :show_lists do |t|
      t.string :title
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
