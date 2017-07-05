require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "Exercise 5\nCalculations"
puts "----------"

# 1. Output the total revenue for the entire company (all stores),
# using Active Record's `.sum` calculation method.
@total_revenue = Store.sum("annual_revenue")
puts @total_revenue

# 2. Output the average annual revenue for all stores.
@avg_revenue = Store.average("annual_revenue")
puts @avg_revenue

# 3. Output the # of stores generating $1M+ in annual sales.
#    **Hint:** Chain together `where` and `size` (or `count`) Active Record methods.
@stores_over_a_mil = Store.where("annual_revenue < ?", 1000000).count
puts @stores_over_a_mil
