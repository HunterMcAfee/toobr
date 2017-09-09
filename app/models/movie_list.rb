class MovieList < ApplicationRecord
    has_many :movies, dependent: :destroy
end
