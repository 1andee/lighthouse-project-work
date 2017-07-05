require_relative '../setup'
require_relative './exercise_1'

puts "Exercise 2"
puts "----------"

# Your code goes here ...
#
# 1. Load the first store (with `id = 1`) from the database and
#    assign it to an instance variable `@store1`.

store1 = Store.find(1)

# 2. Load the 2nd store from the DB and assign it to `@store2`.

store2 = Store.find(2)

# 3. Update the first store (`@store1`) instance in the database.
#    (Change its name or something.)

store1.update(name: "Abbotsford")

# Verifying if it worked:
pp Store.find(1)
