class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.string :venue
      t.datetime :datetime
      t.string :url
      t.string :artist_id
      t.string :city_id

      t.timestamps
    end
  end
end
