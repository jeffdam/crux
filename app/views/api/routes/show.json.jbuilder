json.route_id @route.id

json.routes do
  json.set! @route.id do 
    json.extract! @route, :name, :route_type, :author_id, :area_id, :rope_grade, :boulder_grade, :safety, :first_ascensionist, :first_ascent_date, :length, :pitches, :protection, :description, :location, :toprope, :neighbor_route_ids, :created_at
    json.area_path @area_path, :id, :name
    json.photo_urls @route.photos.map { |file| url_for(file) }
  end
  @route.neighbor_routes.each do |neighbor|
    json.set! neighbor.id do
      json.extract! neighbor, :id, :name, :rope_grade, :boulder_grade, :route_type, :safety, :toprope
    end
  end
end

json.author do
  json.id @route.author.id
  json.username @route.author.username
end 

json.area do
  json.set! @route.area.id do
    json.extract! @route.area, :id, :name
  end
end

