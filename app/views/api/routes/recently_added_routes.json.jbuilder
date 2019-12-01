json.routes do 
  @routes.each do |route|
    json.set! route.id do 
      json.extract! route, :id, :name, :rope_grade, :boulder_grade, :safety, :route_type, :pitches, :toprope, :area_id, :area
    end
  end
end