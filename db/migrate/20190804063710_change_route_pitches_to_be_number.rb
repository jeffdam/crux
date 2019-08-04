class ChangeRoutePitchesToBeNumber < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :pitches, 'integer USING CAST(pitches AS integer)'
  end
end
