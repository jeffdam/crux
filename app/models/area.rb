# == Schema Information
#
# Table name: areas
#
#  id            :bigint           not null, primary key
#  parent_id     :integer
#  author_id     :integer          not null
#  name          :string           not null
#  description   :text             not null
#  getting_there :text             not null
#  latitude      :float            not null
#  longitude     :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Area < ApplicationRecord
  validates :author_id, :name, :description, :getting_there, :latitude, :longitude, presence: true

  belongs_to :parent_area,
  primary_key: :id,
  foreign_key: :parent_id,
  class_name: :Area,
  optional: true
  
  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User
  
  has_many :sub_areas,
    primary_key: :id,
    foreign_key: :parent_id,
    class_name: :Area

  has_many :routes,
    primary_key: :id,
    foreign_key: :area_id,
    class_name: :Route
end
