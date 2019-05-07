class AddAreasColRoutesCount < ActiveRecord::Migration[5.2]
  def change
    add_column :areas, :route_count, :integer
  end
end
