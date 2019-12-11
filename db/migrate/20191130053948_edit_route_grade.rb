class EditRouteGrade < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :rope_grade, :integer, default: -1, null: false
    add_column :routes, :boulder_grade, :integer, default: -1, null: false
    remove_column :routes, :grade

    add_index :routes, :rope_grade
    add_index :routes, :boulder_grade
  end
end
