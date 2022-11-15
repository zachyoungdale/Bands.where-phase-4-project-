class Concert < ApplicationRecord
  belongs_to :artist
  belongs_to :city

    # get all concerts in your city
    def self.city_concerts(city)
      return self.all
    end


end
