# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all #We delete all entries for type first before we create new types when seed file is run
# create an array with these categories in the new bar form
Category.create(name: 'Bar')
Category.create(name: 'Club')
Category.create(name: 'Fine Dining')
Category.create(name: 'Café/Bistro')
Category.create(name: 'Restaurant')

Category.create(name: 'Air-conditioned')
Category.create(name: 'Smoking Allowed')
Category.create(name: 'Large Groups')
Category.create(name: 'Family-friendly')

Category.create(name: 'Live Band')
Category.create(name: 'Karaoke')
Category.create(name: 'Background Music')

p "SEEDED category DATA"


10.times do
  o = Owner.create(email: Faker::Internet.email,
                   name: Faker::Name.name,
                   password: 'legend')
  5.times do
    o.bars.create(name: Faker::Restaurant.name,
                  # category: Faker::Restaurant.type,
                  address: Faker::Address.street_address)
                  # opening_hour: "0930",
                  # closing_hour: "2200")
  end
end

p "SEEDED owner and bars DATA"

