class CreateHotelVote < ActiveRecord::Migration[6.1]
  def change
    create_table :hotel_votes do |t|

      t.references :hotel, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
