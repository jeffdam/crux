# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({username: "demo_user", email: "demo@demo.com", password:"password"})

STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
LAT = [32.806671, 61.370716, 33.729759, 34.969704, 36.116203, 39.059811, 41.597782, 39.318523, 38.897438, 27.766279, 33.040619, 21.094318, 44.240459, 40.349457, 39.849426, 42.011539, 38.5266, 37.66814, 31.169546, 44.693947, 39.063946, 42.230171, 43.326618, 45.694454, 32.741646, 38.456085, 46.921925, 41.12537, 38.313515, 43.452492, 40.298904, 34.840515, 42.165726, 35.630066, 47.528912, 40.388783, 35.565342, 44.572021, 40.590752, 41.680893, 33.856892, 44.299782, 35.747845, 31.054487, 40.150032, 44.045876, 37.769337, 47.400902, 38.491226, 44.268543, 42.755966]
LONG = [-86.79113, -152.404419, -111.431221, -92.373123, -119.681564, -105.311104, -72.755371, -75.507141, -77.026817, -81.686783, -83.643074, -157.498337, -114.478828, -88.986137, -86.258278, -93.210526, -96.726486, -84.670067, -91.867805, -69.381927, -76.802101, -71.530106, -84.536095, -93.900192, -89.678696, -92.288368, -110.454353, -98.268082, -117.055374, -71.563896, -74.521011, -106.248482, -74.948051, -79.806419, -99.784012, -82.764915, -96.928917, -122.070938, -77.209755, -71.51178, -80.945007, -99.438828, -86.692345, -97.563461, -111.862434, -72.710686, -78.169968, -121.490494, -80.954453, -89.616508, -107.30249]
GETTING_THERE = "See individual climbing areas for specific directions."

STATES.each_with_index { |state, idx| Area.create({
  parent_id: nil,
  author_id: 1,
  name: state,
  description: "Rock climbing in #{state} offers a wide array of climbing on a variety of different rock types. From Palisades diabase to Watchung basalt to the purple conglomerate of Green Pond Mt, the granite of Allamuchy, to the metaquartzite of Delaware Water Gap, there is an enormous amount of rock to be climbed.",
  getting_there: GETTING_THERE,
  latitude: LAT[idx],
  longitude: LONG[idx]
})}



10.times do 
  Area.create({
  parent_id: 5,
  author_id: 1,
  name: Faker::Address.city,
  description: Faker::Lorem.paragraphs(rand(2..4)),
  getting_there: GETTING_THERE,
  latitude: Faker::Address.latitude,
  longitude: Faker::Address.longitude})
end

100.times do 
  Area.create({
  parent_id: rand(51..60),
  author_id: 1,
  name: Faker::Address.city,
  description: Faker::Lorem.paragraphs(rand(2..4)),
  getting_there: GETTING_THERE,
  latitude: Faker::Address.latitude,
  longitude: Faker::Address.longitude})
end

500.times do 
  Area.create({
  parent_id: rand(150..250),
  author_id: 1,
  name: Faker::Address.city,
  description: Faker::Lorem.paragraphs(rand(2..4)),
  getting_there: GETTING_THERE,
  latitude: Faker::Address.latitude,
  longitude: Faker::Address.longitude})
end

