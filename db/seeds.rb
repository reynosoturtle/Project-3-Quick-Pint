# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Type.destroy_all #We delete all entries for type first before we create new types when seed file is run

Type.create(name: 'Bar')  #1
Type.create(name: 'Club')   #2
Type.create(name: 'Fine Dining')  #3
Type.create(name: 'Café/Bistro')  #4
Type.create(name: 'Restaurant')  #5
Type.create(name: 'Air-conditioned')  #6
Type.create(name: 'Smoking Allowed')  #7
Type.create(name: 'Large Groups')   #8
Type.create(name: 'Family-friendly')   #9
Type.create(name: 'Live Band')  #10
Type.create(name: 'Karaoke')   #11
Type.create(name: 'Background Music')  #12

p "SEEDED type data"

Bar.destroy_all # delete all entries in bar table first before creating anything new

Bar.create(name: 'OverEasy',
          business_hour: ['1000-2200',
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
          business_hour: ['1000-2200',
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

p "SEEDED bar data"

