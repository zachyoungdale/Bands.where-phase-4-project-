class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :venue, :datetime, :url, :artist, :city
  has_one :artist
  has_one :city
end
