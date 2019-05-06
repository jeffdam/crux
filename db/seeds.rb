# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({username: "admin", email: "admin@crux.com", password:"cruxR0cksadmin"})
User.create({username: "demo_user", email: "demo@demo.com", password:"cruxR0cks"})

CLIMBERS = [
  "Alex_Megos",
  "Meagan_Martin",
  "Sean_McColl",
  "Sasha_DiGiulian",
  "Conrad_Anker",
  "John_Bachar",
  "Jim_Bridwell",
  "Tommy_Caldwell",
  "Yvon_Chouinard",
  "Peter_Croft",
  "Emily_Harrington",
  "Hans_Florine",
  "Warren_Harding",
  "Margo_Hayes",
  "Lynn_Hill",
  "Alex_Honnold",
  "Kevin_Jorgeson",
  "Kai_Lightner",
  "John_Long_",
  "Craig_Luebben",
  "Renan_Ozturk",
  "Dean_Potter",
  "Ethan_Pringle",
  "Alex_Puccio",
  "Royal_Robbins",
  "John_Salathé",
  "Chris_Sharma",
  "Ashima_Shiraishi",
  "Nina_Williams",
  "Daniel_Woods",
]

CLIMBERS.each { |climber| User.create({username: climber, email: "#{climber}@climberz.com", password:"cruxR0cksclimberz"})}

STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
LAT = [32.806671, 61.370716, 33.729759, 34.969704, 36.116203, 39.059811, 41.597782, 39.318523, 38.897438, 27.766279, 33.040619, 21.094318, 44.240459, 40.349457, 39.849426, 42.011539, 38.5266, 37.66814, 31.169546, 44.693947, 39.063946, 42.230171, 43.326618, 45.694454, 32.741646, 38.456085, 46.921925, 41.12537, 38.313515, 43.452492, 40.298904, 34.840515, 42.165726, 35.630066, 47.528912, 40.388783, 35.565342, 44.572021, 40.590752, 41.680893, 33.856892, 44.299782, 35.747845, 31.054487, 40.150032, 44.045876, 37.769337, 47.400902, 38.491226, 44.268543, 42.755966]
LONG = [-86.79113, -152.404419, -111.431221, -92.373123, -119.681564, -105.311104, -72.755371, -75.507141, -77.026817, -81.686783, -83.643074, -157.498337, -114.478828, -88.986137, -86.258278, -93.210526, -96.726486, -84.670067, -91.867805, -69.381927, -76.802101, -71.530106, -84.536095, -93.900192, -89.678696, -92.288368, -110.454353, -98.268082, -117.055374, -71.563896, -74.521011, -106.248482, -74.948051, -79.806419, -99.784012, -82.764915, -96.928917, -122.070938, -77.209755, -71.51178, -80.945007, -99.438828, -86.692345, -97.563461, -111.862434, -72.710686, -78.169968, -121.490494, -80.954453, -89.616508, -107.30249]
GETTING_THERE = "See individual climbing areas for specific directions."
DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at risus tincidunt, pellentesque ex eu, facilisis nibh. Cras placerat blandit mi sed lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec condimentum, augue sit amet pellentesque bibendum, turpis nunc commodo velit, sollicitudin aliquam ante libero in lectus. Proin ac mattis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut quis tempus magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices laoreet est quis finibus. Sed tempor lectus nec magna volutpat luctus. Fusce pulvinar vitae diam a gravida.

Ut volutpat, risus vel dictum pellentesque, eros augue suscipit justo, congue interdum mauris leo sit amet nisi. Ut non nulla a felis lobortis fringilla. Nulla volutpat laoreet nisl non efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sed scelerisque ante. Sed eros ligula, feugiat facilisis dapibus eu, fringilla vitae risus. Phasellus convallis blandit erat, ullamcorper porttitor dolor imperdiet et. Vivamus eu elementum purus. Curabitur varius lacus mauris, vitae varius nisi pretium ut. Phasellus feugiat rhoncus arcu, eget mattis est viverra vel. Vestibulum quis quam libero. Aenean a sapien rutrum, feugiat turpis vitae, egestas leo. Proin semper convallis justo et rutrum. Maecenas rhoncus ornare augue, at bibendum nibh dictum quis."

STATES.each_with_index { |state, idx| Area.create({
  parent_id: nil,
  author_id: 1,
  name: state,
  description: "Rock climbing in #{state} offers a wide array of climbing on a variety of different rock types. From Palisades diabase to Watchung basalt to the purple conglomerate of Green Pond Mt, the granite of Allamuchy, to the metaquartzite of Delaware Water Gap, there is an enormous amount of rock to be climbed.",
  getting_there: GETTING_THERE,
  latitude: LAT[idx],
  longitude: LONG[idx]
})}

count = 0
total_count = 0

(1..50).each do |i| 
  (rand(3..5)).times do 
    Area.create({
    parent_id: i,
    author_id: rand(3..32),
    name: Faker::Address.city,
    description: DESCRIPTION,
    getting_there: GETTING_THERE,
    latitude: LAT.sample,
    longitude: LONG.sample
    })
    count += 1
    total_count += 1
  end
end

oldcount = count
count = 0

(51..oldcount).each do |i| 
  (rand(3..4)).times do 
    Area.create({
    parent_id: i,
    author_id: rand(3..32),
    name: Faker::Address.city,
    description: DESCRIPTION,
    getting_there: GETTING_THERE,
    latitude: LAT.sample,
    longitude: LONG.sample
    })
    count += 1
    total_count += 1
  end
end

startcount = oldcount
oldcount = count
no_sub_area = []

(startcount..oldcount).each do |i| 
  n = rand(0..3)
  no_sub_area.push(i) if n == 0
  (rand(0..3)).times do 
    Area.create({
    parent_id: i,
    author_id: rand(3..32),
    name: Faker::Address.city,
    description: DESCRIPTION,
    getting_there: GETTING_THERE,
    latitude: LAT.sample,
    longitude: LONG.sample
    })
    total_count += 1
    no_sub_area.push(total_count)
  end
end

ROPE_GRADE = [
  "5.8", 
  "5.9", 
  "5.10a", 
  "5.10b", 
  "5.10c", 
  "5.10d", 
  "5.11a", 
  "5.11b", 
  "5.11c", 
  "5.11d", 
  "5.12a", 
  "5.12b", 
  "5.12c", 
  "5.12d", 
  "5.13a", 
  "5.13b", 
  "5.13c", 
  "5.13d", 
  "5.14a", 
  "5.14b", 
  "5.14c", 
  "5.14d", 
  "5.15a", 
  "5.15b", 
  "5.15c", 
  "5.15d", 
]

BOULDER_GRADE = [
  "VB",
  "V1",
  "V2",
  "V3",
  "V4",
  "V5",
  "V6",
  "V7",
  "V8",
  "V9",
  "V10",
  "V11",
  "V12",
  "V13",
  "V14",
  "V15",
]

SAFETY = [
  "G",
  "G",
  "G",
  "G",
  "G",
  "PG-13",
  "R",
  "X"
]

ROPE_DESCRIPTION = [
  "This route starts under a small roof on the upper Hamlet. It is the pull of this roof , the routes crux , that garners the majority of the 5.9+ grade (estimated a 5.9+/10a move by the FA), the climbing that follows is solid 5.7 on terrain similar to its neighbors to the right. A longer draw is recommended for the first bolt.",
  "Crux starts out pulling the roof through the third bolt, then sustained face climbing until the last bolt where it mellows out on a slab to the finish on the ledge.",
  "Climb an easy slab then launch past a hollow pistol grip to begin the steep arete. Pass a thin, short crux section midway and continue to an anchor. 6 bolts.",
  "Climb up onto the ledge, a few steep moves on jugs on the left seam, lead to a slab and rest. Climb up, slightly right, on ever steepening, beautiful black varnished rock, to a bit of a crux near the top.",
  "A, or the, crux comes quick on this route. Climb the shallow cornercrack up past a 2 bolts, climb up, slightly right through a notch in an overlap. Continue up to the varnished, plated wall to a seam\\crack system that leads straight up to the another crux just below the anchor.",
  "Just like the name says, this route wastes no time getting to it! Climb the side by side, steep seams in the dark rock on good jugs, pinches, and edges to a steep face. Continue up the seams on super fun moderate steep face\\slab to a 5.8 overlap\\roof. Once over come, a fun romp up 30' feet of easy slab.",
  "This route is fun from the start to the finish. Start on the crack in middle of the crag, gain holds on the steep face on the right. climb up through a technical crux, (1st - 2nd bolts). jugs lead up the ever steepening wall to the roof, good holds lead you up and left, then back right to the anchors.",
  "Fun, thoughtful climbing leads to a definitive crux near mid-route",
  "Like its neighbor to the right, this route has a really fun, slightly technical start, with interesting climbing up to, (and beyond) the definitive crux just above mid-height on the route.",
  "an absolutely classic one-pitch face climb. Not only does it have very interesting moves and features for its entire length, but it also is safely, but not obscenely, bolted."
]

ROPE_LOCATION = [
  "The fist bolt is alone under the small roof directly to the left of Frailty thy name is Sandstone on the upper part of The Hamelet.",
  "Found to the right of Sweets to the Sweet. Climb through a pumpy roof to easier terrain above.",
  "Right of 'when the blood burns' (route bolted with glue ins), left of 'To Grunt and Sweat'",
  "This route start off a ledge, approx., 6-8' high. Its, (currently) the last bolted route on the left side of the wall, approx. 30' left of \"Straight to the Point\". There is another route that starts off this ledge, in the shallow corner.",
  "This route starts on a 6-8' high ledge on the left hand end of the Massacre. There are 2 routes that start off this ledge, this one starts in a shallow corner. You can stick clip these routes from the ground.",
  "The route starts just left of the light colored, steep, center wall. It is the 1st route in the dark rock, (it has glue ins) left of the steep light colored wall.",
  "The route starts in the middle of the crag, on the obvious wide, left angling crack at the base of the wall. 20' right of \"Cactus Root\".",
  "This route starts approx. 15' left of \"Never kiss a Cactus\". Start on the series of flakes and edges in a slightly shallow corner. Climb up and slightly right thru a shallow slot in an overlap, to a slab and the headwall, (crux), continue up and slightly left to anchors.",
  "Belay position is completely shaded and out of sight at the bottom of a comfy 2.5' wide 6' deep crack easily accessible by walking to the end of the narrow gully past a tree and around a huge wedged boulder.",
  "Walk into the Black Velvet wall, traverse left along the wall under the huge boulder to the crack that marks the start of Refried brains. The route takes the first pitch of Refried brains and then wanders up the wall to the right of that route.",
]

def time_rand from = 0.0, to = Time.now
  Time.at(from + rand * (to.to_f - from.to_f))
end

(no_sub_area.length/3).times do |i|
  rand_n = rand(0...no_sub_area.length)
  toprope_rand = [ true, false, false ].sample

  (rand(3..4)).times do |j|
    length_rand = rand(50..200)
    pitches_rand = length_rand/100 + 1

    Route.create({
      name: Faker::Hipster.words(2).join(" ").titleize, 
      route_type: "Sport", 
      toprope: toprope_rand,
      author_id: rand(3..32), 
      area_id: no_sub_area[rand_n], 
      grade: ROPE_GRADE.sample, 
      safety: SAFETY.sample, 
      first_ascensionist: CLIMBERS.sample.split("_").join(" "), 
      first_ascent_date: time_rand, 
      length: length_rand, 
      pitches: pitches_rand, 
      protection: "#{length_rand/rand(8..10)} bolts, 2 bolt anchor.", 
      description: ROPE_DESCRIPTION.sample, 
      location: ROPE_LOCATION.sample
    })
  end
  no_sub_area.delete_at(rand_n)
end

TRAD_PRO = [
  "Double set of cams through a 4 inch piece.",
  "Small gear (doubles) (offset Aliens, micro cams, lowe-balls) up to 3. Perhaps a #4 Camalot for the wide crack. Pitch one can be toproped from the rappel anchors with a 70 m rope (although you just barely reach the ground with rope stretch so be careful not to lower your partner off the end!)",
  "2-3 sets of small cams to Yellow/red alien (x4- c3 -alien)one red ,one Yellow and one four camalot. I used a set of totem cam and found them the best cam to protect the first pitch . I used also a 000c3 Five quick draws and long slings",
  "SR through a #0.75 Camalot, include RP's and extra little techie cams. Draws, slings. Two ropes to rap the route (from any point).",
  "Micro to 1",
  "1 set stoppers, 1-2 sets cams to 2 inches, optional 3 long slings, extra carabiners, 6-7 draws for A0 section",
]

(no_sub_area.length/2).times do |i|
  rand_n = rand(0...no_sub_area.length)
  toprope_rand = [ true, false, false, false, false ].sample

  (rand(3..4)).times do |j|
    length_rand = rand(50..3000)
    pitches_rand = length_rand/100 + 1

    Route.create({
      name: Faker::Hipster.words(2).join(" ").titleize, 
      route_type: "Trad", 
      toprope: toprope_rand,
      author_id: rand(3..32), 
      area_id: no_sub_area[rand_n], 
      grade: ROPE_GRADE.sample, 
      safety: SAFETY.sample, 
      first_ascensionist: CLIMBERS.sample.split("_").join(" "), 
      first_ascent_date: time_rand, 
      length: length_rand, 
      pitches: pitches_rand, 
      protection: TRAD_PRO.sample, 
      description: ROPE_DESCRIPTION.sample, 
      location: ROPE_LOCATION.sample
    })
  end
  no_sub_area.delete_at(rand_n)
end


BOULDER_DESC = [
  "Sit down start on the northwest side of the boulder. This is essentially the first problem you see as you get to the boulder. A few powerful moves will take you to a large sidepull jug, where you begin to trend left and up on small holds.",
  "This route has about five different ways to be done, but basically you climb up the overhang using pockeys, slopers and crimps to a crappy grip about 9 feet off the ground, and then reach up and left to a cheesegrater for a hold, and finish by grabbing onto a large jug over the roof.",
  "Climb jugs to a large hueco/undercling. Pull onto the the slab for an exciting finish on crimps.",
  "Start at a good sized hueco. Pull up and onto the slab and follow it, via nice slab moves, to the top. For the tick don't escape right onto the arete.",
  "Climb the obvious rail from left to right. Easy moves provide encouragement, until the rail gets smaller near the end. Good incuts and determination help gain the sloper out on the right lip. Match on this and swing your right foot high and complete a classic.",
  "Stand-start with wide palms and make a tricky first move to get your right foot on (crux). Stem your way up to the good fin and jugs to the easy but great top-out.",
  "Teasingly easy entry moves lead to two height-dependent crux sequences. For most taller people like myself, its a wild lean out right with the right hand to a sloper-type thingy utilizing a left heel hook. A left hand power up to a bulbous crimp sets you up for the big, flying move to a killer jug! Match and crank off a few knobs and small but positive plates up off the deck, to the blunt top out.",
  "Stem your way up the shallow scoop into the 'dihedral' using good sidepulls, gastons and other edges. Exit right at the top of the dihedral or continue straight up for full value.",
  "Stand-start matched on a crimp and make a reach up to a high right-hand gaston. Climb straight up with another gaston to a perfect jug on the lip. Balancy, technical, and fun.",
]

BOULDER_LOC = [
  "On the northwest side of the boulder at the far east end of the area.",
  "Sit start with pockets, climb the face above.",
  "Stand start the right arête. Climb up and right til you can reach the left arête. Top out at the apex.",
  "Right side of the boulder facing the trail.",
  "West face of the boudler which will be on your right as you hike in on the main trail. Lots of other nice easy lines can be found in the neighborhood.",
  "South face of the boulder.",
  "South face of the boulder, right side.",
  "East face of the boulder, far right side.",
  "North face of the twin boulders on the vertical wall, center route.",
]


no_sub_area.each do |area_id|
  (rand(3..4)).times do |j|
    length_rand = rand(10..30)
    Route.create({
      name: Faker::Hipster.words(2).join(" ").titleize, 
      route_type: "Boulder", 
      toprope: false,
      author_id: rand(3..32), 
      area_id: area_id, 
      grade: BOULDER_GRADE.sample, 
      safety: SAFETY.sample, 
      first_ascensionist: CLIMBERS.sample.split("_").join(" "), 
      first_ascent_date: time_rand, 
      length: length_rand, 
      pitches: 1, 
      protection: "Boulder pads.", 
      description: BOULDER_DESC.sample, 
      location: BOULDER_LOC.sample
    })
  end
end