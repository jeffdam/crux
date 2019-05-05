class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.string :route_type, null: false
      t.integer :author_id, null: false
      t.integer :area_id, null: false
      t.string :grade, null: false
      t.string :safety, null: false
      t.string :first_ascensionist
      t.date :first_ascent_date
      t.string :length, null: false
      t.string :pitches, null: false
      t.string :protection, null: false
      t.text :description, null: false
      t.text :getting_there, null: false

      t.timestamps
    end

    add_index :routes, :author_id 
    add_index :routes, :pitches 
    add_index :routes, :route_type 
    add_index :routes, :grade 
    add_index :routes, :area_id 
  end
end
