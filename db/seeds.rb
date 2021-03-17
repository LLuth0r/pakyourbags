# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.destroy_all
Activity.destroy_all
Budget.destroy_all
Flight.destroy_all
Hotel.destroy_all
Trip.destroy_all
User.destroy_all



@admin = User.create!(first_name: 'Administrator', last_name: 'Administrator',username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@trip1 = Trip.create!(name: 'Cancun 2021', location: 'Cancun', created_at: '03/20/2020', updated_at: '05/21/2020', user: @admin)

@trip2 = Trip.create!(name: 'Vegas 2021', location: 'Las Vegas', created_at: '03/20/2020', updated_at: '05/21/2020', user: @admin)
puts "#{Trip.count} trips created"

@hotel1 = Hotel.create!(name: 'Grand Velas', location: 'Riviera Maya', price: 650.00, start_date: '05/01/2021', end_date: '05/10/2021', checkin_time: '10:00', checkout_time: '11:00', trip: @trip1)
puts "#{Hotel.count} hotels created"

@flight1 = Flight.create!(date: '05/01/2021', time: '6:00am', price: '300.00', flight_number: 'TWA123', trip: @trip1)
puts "#{Flight.count} flights created"

@budget1 = Budget.create!(travel_cost: 1000, accommodation_cost: 500, food_cost: 100, entertainment_cost: 100, user: @admin, trip: @trip1)
puts "#{Budget.count} budgets created"

@activity1 = Activity.create!(name: 'Scuba Diving', location: 'Caribbean', price: '45', date: '05/03/2021', start_time: '10:00am', end_time: '12:00pm', trip: @trip1, description: 'Scuba diving off coast of Rivieria Maya')
puts "#{Activity.count} activities created"



