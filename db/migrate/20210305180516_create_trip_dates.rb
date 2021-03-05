class CreateTripDates < ActiveRecord::Migration[6.1]
  def change
    create_table :trip_dates do |t|
      t.date :start_date
      t.date :end_date
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
