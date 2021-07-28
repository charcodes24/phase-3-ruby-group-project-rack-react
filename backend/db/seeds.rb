puts "Clearing old data..."
Hike.destroy_all
NationalPark.destroy_all

puts "Seeding National Parks..."

yosemite = NationalPark.new(name:"Yosemite National Park")
sequoia = NationalPark.new(name:"Sequoia National Park")
lassen = NationalPark.new(name:"Lassen Volcanic National Park")
NationalPark.create(name:"Misc")

puts "Seeding hikes..."
yosemite.hikes.build(
    name:"Upper Yosemite Falls", 
    distance: 7.6,
    difficulty: "hard",
    note: "beautiful views of yosemite valley from the top", 
    )
yosemite.hikes.build(
    name: "Half Dome",
    distance: 16.3,
    difficulty: "hard", 
    note: "CRAZY!!"
)
yosemite.save

sequoia.hikes.build(
    name:"Moro Rock", 
    distance: 0.5, 
    difficulty: "moderate", 
    note: "not really a hike.. more like a walk up a lot of stairs to a cool view"
)
sequoia.hikes.build(
    name:"Heather Lake", 
    distance: 12.3, 
    difficulty: "hard", 
    note: "Absolutely beautiful hike!!"
)
sequoia.save

lassen.hikes.build(
    name:"Brokeoff Mountain", 
    distance: 7.6, 
    difficulty: "moderate", 
    note: "Great hike. Elevation gain almost the entire way up, but not too steep."
)
lassen.save

puts "Done!"
