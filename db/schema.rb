# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_05_180628) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.float "price"
    t.date "date"
    t.time "start_time"
    t.time "end_time"
    t.bigint "trip_id", null: false
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_activities_on_trip_id"
  end

  create_table "activity_votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "activity_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["activity_id"], name: "index_activity_votes_on_activity_id"
    t.index ["user_id"], name: "index_activity_votes_on_user_id"
  end

  create_table "budgets", force: :cascade do |t|
    t.integer "travel_cost"
    t.integer "accommodation_cost"
    t.integer "food_cost"
    t.integer "entertainment_cost"
    t.bigint "user_id", null: false
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_budgets_on_trip_id"
    t.index ["user_id"], name: "index_budgets_on_user_id"
  end

  create_table "dates_votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "trip_dates_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_dates_id"], name: "index_dates_votes_on_trip_dates_id"
    t.index ["user_id"], name: "index_dates_votes_on_user_id"
  end

  create_table "flights", force: :cascade do |t|
    t.date "date"
    t.time "time"
    t.float "price"
    t.string "flight_number"
    t.bigint "user_id"
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_flights_on_trip_id"
    t.index ["user_id"], name: "index_flights_on_user_id"
  end

  create_table "hotel_votes", force: :cascade do |t|
    t.bigint "hotel_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hotel_id"], name: "index_hotel_votes_on_hotel_id"
    t.index ["user_id"], name: "index_hotel_votes_on_user_id"
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.float "price"
    t.date "start_date"
    t.date "end_date"
    t.time "checkin_time"
    t.time "checkout_time"
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_hotels_on_trip_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "description"
    t.bigint "user_id", null: false
    t.bigint "trip_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_photos_on_trip_id"
    t.index ["user_id"], name: "index_photos_on_user_id"
  end

  create_table "trip_dates", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_trip_dates_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "user_trips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_user_trips_on_trip_id"
    t.index ["user_id"], name: "index_user_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "activities", "trips"
  add_foreign_key "activity_votes", "activities"
  add_foreign_key "activity_votes", "users"
  add_foreign_key "budgets", "trips"
  add_foreign_key "budgets", "users"
  add_foreign_key "dates_votes", "trip_dates", column: "trip_dates_id"
  add_foreign_key "dates_votes", "users"
  add_foreign_key "flights", "trips"
  add_foreign_key "flights", "users"
  add_foreign_key "hotel_votes", "hotels"
  add_foreign_key "hotel_votes", "users"
  add_foreign_key "hotels", "trips"
  add_foreign_key "photos", "trips"
  add_foreign_key "photos", "users"
  add_foreign_key "trip_dates", "trips"
  add_foreign_key "user_trips", "trips"
  add_foreign_key "user_trips", "users"
end
