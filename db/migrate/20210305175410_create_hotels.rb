class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :location
      t.float :price
      t.date :start_date
      t.date :end_date
      t.time :checkin_time
      t.time :checkout_time
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
