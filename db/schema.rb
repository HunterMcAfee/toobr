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

ActiveRecord::Schema.define(version: 20170913020254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "movie_lists", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_movie_lists_on_user_id"
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
    t.bigint "user_id"
    t.index ["user_id"], name: "index_show_lists_on_user_id"
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

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "movie_lists", "users"
  add_foreign_key "movies", "movie_lists"
  add_foreign_key "show_lists", "users"
  add_foreign_key "shows", "show_lists"
end
