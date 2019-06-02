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
Category.create(name: 'Pub')

Category.create(name: 'Air-conditioned')
Category.create(name: 'Smoking Allowed')
Category.create(name: 'Family-friendly')

p "SEEDED category DATA"

Owner.all.destroy_all
Bar.all.destroy_all
5.times do
  o = Owner.create(email: Faker::Internet.email,
                   name: Faker::Name.name,
                   password: 'legend')
  2.times do
    bar = o.bars.create(name: Faker::Restaurant.name,
                  address: Faker::Address.street_address,
                  business_hours:'0930-2200')
    5.times do
    bar.promos.create(name: "Beer Promotion!",
                 detail: "$25 for 2 pints!",
                 duration:"2 weeks")
    end

  end
end



p "SEEDED owner and bars DATA"

