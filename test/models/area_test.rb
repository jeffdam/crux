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
#  route_count   :integer
#

require 'test_helper'

class AreaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
