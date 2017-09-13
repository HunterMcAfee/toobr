class MovieList < ApplicationRecord
    has_many :movies, dependent: :destroy
    belongs_to :user
end
