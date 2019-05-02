@areas.each do |area|
  json.set! area.id do
    json.extract! area, :id, :parent_id, :name
    json.sub_areas area.sub_areas, :name, :id
  end
end