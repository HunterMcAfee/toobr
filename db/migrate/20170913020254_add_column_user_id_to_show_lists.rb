class AddColumnUserIdToShowLists < ActiveRecord::Migration[5.1]
  def change
    add_reference :show_lists, :user, foreign_key: true
  end
end
