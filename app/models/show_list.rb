class ShowList < ApplicationRecord
    has_many :shows, dependent: :destroy
end
