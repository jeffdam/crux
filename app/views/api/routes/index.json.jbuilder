@routes.each do |route|
  json.set! route.id do 
    json.extract! route, :id, :name, :grade, :safety, :route_type, :pitches, :toprope
    json.area_path do
      json.array! @area_paths[route.id] do |area|
        json.extract! area, :name, :id
      end
    end
  end
end