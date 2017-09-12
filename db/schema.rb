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

ActiveRecord::Schema.define(version: 20170912005431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "movie_lists", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string "genres"
    t.string "homepage"
    t.integer "movie_id"
    t.string "original_title"
    t.string "overview"
    t.string "poster_path"
    t.string "release_date"
    t.integer "runtime"
    t.string "tagline"
    t.boolean "video"
    t.integer "vote_average"
    t.bigint "movie_list_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_list_id"], name: "index_movies_on_movie_list_id"
  end

  create_table "show_lists", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shows", force: :cascade do |t|
    t.integer "show_id"
    t.string "original_name"
    t.integer "vote_average"
    t.string "poster_path"
    t.string "overview"
    t.string "backdrop_path"
    t.bigint "show_list_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["show_list_id"], name: "index_shows_on_show_list_id"
  end

  add_foreign_key "movies", "movie_lists"
  add_foreign_key "shows", "show_lists"
end
