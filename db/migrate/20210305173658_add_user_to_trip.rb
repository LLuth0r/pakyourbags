class AddUserToTrip < ActiveRecord::Migration[6.1]
  def change

    add_reference :trips, :user

  end
end
