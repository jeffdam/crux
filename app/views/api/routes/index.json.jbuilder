json.routes do 
  @routes.each do |route|
    json.set! route.id do 
      json.extract! route, :id, :name, :rope_grade, :boulder_grade, :safety, :route_type, :pitches, :toprope, :area_id
    end
  end
end
json.areas do 
  @routes.each do |route|
    json.set! route.area.id do 
      json.extract! route.area, :id, :name
    end
  end
end

