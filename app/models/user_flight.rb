class UserFlight < ApplicationRecord

    belongs_to :flight
    belongs_to :user

end
