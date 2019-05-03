json.extract! @area, :id, :parent_id, :name, :description, :getting_there, :latitude, :longitude, :created_at, :updated_at
json.author @area.author.username  
json.parentName @parent_area.name
json.sub_areas @area.sub_areas, :name, :id