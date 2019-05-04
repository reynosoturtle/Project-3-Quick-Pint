# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Type.destroy_all #We delete all entries for type first before we create new types when seed file is run
# create an array with these categories in the new bar form
# Type.create(name: 'Bar')
# Type.create(name: 'Club')
# Type.create(name: 'Fine Dining')
# Type.create(name: 'Café/Bistro')
# Type.create(name: 'Restaurant')

# Type.create(name: 'Air-conditioned')
# Type.create(name: 'Smoking Allowed')
# Type.create(name: 'Large Groups')
# Type.create(name: 'Family-friendly')

# Type.create(name: 'Live Band')
# Type.create(name: 'Karaoke')
# Type.create(name: 'Background Music')

20.times do
  o = Owner.create(email: Faker::Internet.email,
                   name: Faker::Name.name,
                   password: "legend",
                   role: "owner")
  5.times do
    o.bars.create(name: Faker::Restaurant.name,
                  category: Faker::Restaurant.type,
                  address: Faker::Address.street_address,
                  opening_hour: "0930",
                  closing_hour: "2200")
  end
end

puts "SEEDED type data"
