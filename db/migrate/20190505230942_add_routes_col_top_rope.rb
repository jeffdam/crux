class AddRoutesColTopRope < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :toprope, :boolean, default: false
  end
end
