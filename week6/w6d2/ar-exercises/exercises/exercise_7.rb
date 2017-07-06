require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'
require_relative './exercise_6'

puts "Exercise 7\nValidations for both models"
puts "----------"

# 1. Add validations to two models to enforce the following rules:
#    Employees must always have a first name present            DONE
#    Employees must always have a last name present             DONE
#    Employees have a hourly_rate (integer) between 40 and 200  DONE
#    Employees must always belong to a store                    DONE
#    Store names must always be >= 3 characters in length       DONE
#    Stores must have an annual_revenue (integer) of >= 0       DONE
#
#    BONUS: Stores must carry >= 1 of the men's or women's apparel
#    Use a custom validation method, not a `Validator` class. See:
#    http://guides.rubyonrails.org/active_record_validations.html#custom-methods

# 2. Ask the user for a store name (store it in a variable)

# 3. Attempt to create a store with the inputted name but leave
#    out the other fields (annual_revenue, mens_apparel,
#    and womens_apparel)

# 4. Display the error messages provided back from ActiveRecord
#    to the user (one on each line) after you attempt to save/create
#    the record
