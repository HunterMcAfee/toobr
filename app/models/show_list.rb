class ShowList < ApplicationRecord
    has_many :shows, dependent: :destroy
    validates :title, :length => { :minimum => 1, :maximum => 25  }
    validates :category, :length => { :minimum => 1, :maximum => 25  }
    validates :description, :length => { :minimum => 1, :maximum => 120  }
end
