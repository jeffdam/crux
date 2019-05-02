class AddUsersColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :home_city_state, :string
  end
end
