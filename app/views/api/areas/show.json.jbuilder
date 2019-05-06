json.areas do
  json.set! @area.id do
    json.extract! @area, :id, :parent_id, :author_id, :name, :description, :getting_there, :latitude, :longitude, :created_at, :updated_at, :route_ids, :sub_area_ids
    json.parents @area_parents, :id, :name
  end
  @area.sub_areas.each do |sub|
    json.set! sub.id do
      json.extract! sub, :id, :name
    end
  end
end
json.routes do 
  @area.routes.each do |route|
    json.set! route.id do
      json.extract! route, :id, :name
    end
  end
end

json.extract! @area, :author

