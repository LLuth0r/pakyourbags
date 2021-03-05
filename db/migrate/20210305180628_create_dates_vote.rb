class CreateDatesVote < ActiveRecord::Migration[6.1]
  def change
    create_table :dates_votes do |t|

      t.references :user, null: false, foreign_key: true
      t.references :trip_dates, null: false, foreign_key: true
      t.timestamps
    end
  end
end
