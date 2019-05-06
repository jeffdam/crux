# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_06_164333) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "areas", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "author_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.text "getting_there", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_areas_on_author_id"
    t.index ["name"], name: "index_areas_on_name"
    t.index ["parent_id"], name: "index_areas_on_parent_id"
  end

  create_table "routes", force: :cascade do |t|
    t.string "name", null: false
    t.string "route_type", null: false
    t.integer "author_id", null: false
    t.integer "area_id", null: false
    t.string "grade", null: false
    t.string "safety", null: false
    t.string "first_ascensionist"
    t.date "first_ascent_date"
    t.string "length", null: false
    t.string "pitches", null: false
    t.string "protection", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "location", null: false
    t.boolean "toprope", default: false
    t.index ["area_id"], name: "index_routes_on_area_id"
    t.index ["author_id"], name: "index_routes_on_author_id"
    t.index ["grade"], name: "index_routes_on_grade"
    t.index ["pitches"], name: "index_routes_on_pitches"
    t.index ["route_type"], name: "index_routes_on_route_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "favorite_routes"
    t.string "other_interests"
    t.string "more_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "home_city_state"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
