class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.integer :parent_id
      t.integer :author_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.text :getting_there, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end

    add_index :areas, :parent_id
    add_index :areas, :author_id
    add_index :areas, :name

  end
end
