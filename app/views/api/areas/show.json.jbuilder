json.area_id @area.id

json.areas do
  json.set! @area.id do
    json.extract! @area, :id, :parent_id, :author_id, :name, :description, :getting_there, :latitude, :longitude, :created_at, :updated_at, :route_ids, :sub_area_ids, :route_count
    json.parents @area_parents, :id, :name, :route_count
    json.photo_urls @area.photos.map { |file| url_for(file) }
  end

  @area.sub_areas.each do |sub|
    json.set! sub.id do
      json.extract! sub, :id, :name, :route_count
    end
  end
end

json.routes do 
  @area.routes.each do |route|
    json.set! route.id do
      json.extract! route, :id, :name, :grade, :route_type, :safety
    end
  end
end

json.extract! @area, :author

