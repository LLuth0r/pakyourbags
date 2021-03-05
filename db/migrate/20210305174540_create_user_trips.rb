class CreateUserTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :user_trips do |t|

      t.references :user, null: false, foreign_key: true
      t.references :trip, null: false, foreign_key: true


      t.timestamps
    end
  end
end
