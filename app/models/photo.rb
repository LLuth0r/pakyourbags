class Photo < ApplicationRecord

    belongs_to :user
    has_one :trip


end
