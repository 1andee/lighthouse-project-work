class Employee < ActiveRecord::Base

  belongs_to :store
  validates :store, presence: true

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :hourly_rate, presence: true, if: :correct_range?

  def correct_range?
    if hourly_rate >= 40 &&
       hourly_rate <= 200
       true
     else
       false
    end
  end

end
