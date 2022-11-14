class AddImageColumnToArtists < ActiveRecord::Migration[6.1]
  def change
    add_column :artists, :image, :string
  end
end
