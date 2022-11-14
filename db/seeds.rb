# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
require 'rest-client'

client_id = 'MzAzMTkwNzB8MTY2ODQ0NTU3Ni4wMTQzNTYx'

cities = [
    'San Antonio', 
    'New York',
    'Los Angeles',
    'Chicago',
    'Philadelphia',
    'San Francisco',
    'Washington DC',
    'Miami',
    'Austin',
    'Boston'
]

today = Date.today
two_years_time = today + 730

cities.length().times do |i|

    response = RestClient.get("https://api.seatgeek.com/2/events?venue.city=#{cities[i].gsub(" ", "-")}&per_page=1000&type=concert&datetime_utc.gte=#{today}&datetime_utc.lte=#{two_years_time}&client_id=#{client_id}")

    result = JSON.parse(response)

    events = result["events"]

    events.each do |event|
        Artist.find_or_create_by(
            name: event["performers"][0]["name"],
            image: event["performers"][0]["image"]
        )
    end

    City.create(
        name: cities[i]
    )

    events.each do |event|
        Concert.create(
            venue: event["venue"]["name"],
            datetime: event["datetime_utc"],
            url: event["url"],
            artist_id: Artist.find_by(name: event["performers"][0]["name"]).id,
            city_id: i+1
        )
    end


end
