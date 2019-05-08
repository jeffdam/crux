json.route_id @route.id
json.routes do
  json.set! @route.id do 
    json.extract! @route, :name, :route_type, :author_id, :area_id, :grade, :safety, :first_ascensionist, :first_ascent_date, :length, :pitches, :protection, :description, :location, :toprope, :neighbor_route_ids, :created_at
    json.area_path @area_path, :id, :name
  end
  @route.neighbor_routes.each do |neighbor|
    json.set! neighbor.id do
      json.extract! neighbor, :id, :name, :grade, :route_type, :safety, :toprope
    end
  end
end
json.extract! @route, :author



