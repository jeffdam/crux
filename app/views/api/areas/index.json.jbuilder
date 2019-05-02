@areas.each do |area|
  json.set! area.id do
    json.partial! 'area', area: area
  end
end