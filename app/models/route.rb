# == Schema Information
#
# Table name: routes
#
#  id                 :bigint           not null, primary key
#  name               :string           not null
#  route_type         :string           not null
#  author_id          :integer          not null
#  area_id            :integer          not null
#  grade              :string           not null
#  safety             :string           not null
#  first_ascensionist :string
#  first_ascent_date  :date
#  length             :string           not null
#  pitches            :string           not null
#  protection         :string           not null
#  description        :text             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  location           :text             not null
#  toprope            :boolean          default(FALSE)
#

class Route < ApplicationRecord
  validates :name, :route_type, :author_id, :area_id, :grade, :safety, :length, :pitches, :protection, :description, :location, presence: true
  validates :toprope, inclusion: { in: [ true, false ] }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :area,
    foreign_key: :area_id,
    class_name: :Area

  has_many :neighbor_routes,
    through: :area,
    source: :routes

  has_many_attached :photos
end
