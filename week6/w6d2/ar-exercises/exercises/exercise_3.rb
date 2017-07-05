require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'

puts "Exercise 3"
puts "----------"

# 1. Load the third store (into `@store3`)

store3 = Store.find(3)

# 2. Using Active Record's `destroy` method, delete the store
#    from the database.

store3.destroy

# 3. Verify that the store has been deleted by again outputting
# (`puts`ing) the `count` (as you did in Exercise 1.)

puts Store.count
