class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :description
      t.references :user, null: false, foreign_key: true
      t.references :trip, null: true, foreign_key: true

      t.timestamps
    end
  end
end
