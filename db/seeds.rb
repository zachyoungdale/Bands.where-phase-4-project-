# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
require 'rest-client'

client_id = "MzAzMTkwNzB8MTY2ODQ0NTU3Ni4wMTQzNTYx"
cities = [
    ['San Antonio', 78620], 
    ['New York', 10013]
]

cities.length().times do |i|

    response = RestClient.get
    #san antonio
    "https://api.seatgeek.com/2/events?geoip=#{cities[i][1]}&client_id=#{client_id}"

    result = JSON.parse(response)

    events = result["events"]

    events.each do |event|
        Artist.create(
            name: event["performers"]["name"],
            image: event["performers"]["image"]
        )
    end

    City.create(
        name: cities[i][0]
    )

    events.each do |event|
        Concert.create(
            venue: event["venue"]["name"],
            datetime: event["datetime_utc"],
            url: event["url"],
            artist_id: Artist.find_by(name: event["performers"]["name"]).id,
            city_id: City.find_by(name: event["city"]).id
        )
    end


end
