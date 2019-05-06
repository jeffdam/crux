class EditRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :location, :text, null: false
    remove_column :routes, :getting_there
  end
end
