class ChangeAreasRouteCountDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default :areas, :route_count, 0
  end
end
