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

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
