# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.destroy_all #We delete all entries for type first before we create new types when seed file is run

Genre.create(name: 'Bar')  #1
Genre.create(name: 'Club')   #2
Genre.create(name: 'Fine Dining')  #3
Genre.create(name: 'Café/Bistro')  #4
Genre.create(name: 'Restaurant')  #5
Genre.create(name: 'Air-conditioned')  #6
Genre.create(name: 'Smoking Allowed')  #7
Genre.create(name: 'Large Groups')   #8
Genre.create(name: 'Family-friendly')   #9
Genre.create(name: 'Live Band')  #10
Genre.create(name: 'Karaoke')   #11
Genre.create(name: 'Background Music')  #12

P "SEEDED genre data"

Bar.destroy_all # delete all entries in bar table first before creating anything new

Bar.create(name: 'OverEasy',
          hours: ['1000-2200',
                  '1500-2300',
                  '1500-2300',
                  '1500-2300',
                  '1500-2300',
                  '1200-0100',
                  '1000-0000'],
                  image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/b0/e2/66/overeasy-alfresco.jpg',
                  phone: '66841453',
                  type_id: '1',
                  address: '541 Orchard Rd, #01-01 Liat Towers, Singapore 238881')

Bar.create(name: 'OverDifficult',
          hours: ['1000-2200',
                  '1500-2300',
                  '1500-2300',
                  '1500-2300',
                  '1500-2300',
                  '1200-0100',
                  '1000-0000'],
                  image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/9d/7c/7a/overeasy-fullerton.jpg',
                  phone: '66841453',
                  type_id: '2',
                  address: '1 Fullerton Rd, #01-06, Singapore 049213')

P "SEEDED bar data"

