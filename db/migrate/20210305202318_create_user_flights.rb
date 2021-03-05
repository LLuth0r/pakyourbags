class CreateUserFlights < ActiveRecord::Migration[6.1]
  def change
    create_table :user_flights do |t|

      t.references :flight, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
