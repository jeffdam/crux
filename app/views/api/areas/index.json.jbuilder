json.areas do 
  @areas.each do |area|
    json.set! area.id do
      json.extract! area, :id, :parent_id, :name, :route_count
      json.sub_areas area.sub_areas, :name, :id, :route_count
    end
    json.photo_urls @photos.map { |file| url_for(file) }
  end
end