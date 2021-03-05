class Flight < ApplicationRecord

    belongs_to :trip
    has_many :user

end
