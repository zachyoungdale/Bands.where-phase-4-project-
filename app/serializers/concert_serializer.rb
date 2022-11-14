class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :venue, :datetime, :url
  has_one :artist
  has_one :city
end
