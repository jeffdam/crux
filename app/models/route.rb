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
#  getting_there      :text             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Route < ApplicationRecord
  validates :name, :route_type, :author_id, :area_id, :grade, :safety, :first_ascensionist, :first_ascent_date, :length, :pitches, :protection, :description, :getting_there, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :area,
    foreign_key: :area_id,
    class_name: :Area

end
