class Trip < ApplicationRecord

    belongs_to :user
    alias_attribute :owner, :user
    has_many :users, through: :user_trips
    has_many :photos
    has_many :flights
    has_many :hotels
    has_many :activities
    has_many :trip_dates
    has_many :budgets

    validates :name, presence: true
end
