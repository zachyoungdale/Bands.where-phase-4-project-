class Artist < ApplicationRecord

    has_many :concerts
    has_many :cities, through: :concerts
end
