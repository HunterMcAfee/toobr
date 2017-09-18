class MovieList < ApplicationRecord
    has_many :movies, dependent: :destroy
    belongs_to :user
    validates :title, :length => { :minimum => 1, :maximum => 25  }
    validates :category, :length => { :minimum => 1, :maximum => 25  }
    validates :description, :length => { :minimum => 1, :maximum => 120  }
end
