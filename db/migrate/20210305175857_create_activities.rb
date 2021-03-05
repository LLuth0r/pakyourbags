class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :location
      t.float :price
      t.date :date
      t.time :start_time
      t.time :end_time
      t.references :trip, null: false, foreign_key: true
      t.string :description
      

      t.timestamps
    end
  end
end
