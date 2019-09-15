json.areas do 
  @areas.each do |area|
    json.set! area.id do
      json.extract! area, :id, :parent_id, :name, :route_count
      json.sub_areas area.sub_areas, :name, :id, :route_count
    end
    json.photo_urls @photos.map { |file| url_for(file) }
  end
end

json.routes do 
  @routes.each do |route|
    json.set! route.id do 
      json.extract! route, :id, :name, :grade, :safety, :route_type, :pitches, :toprope, :area_id, :area
    end
  end
end
