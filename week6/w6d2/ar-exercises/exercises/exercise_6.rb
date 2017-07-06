require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6\nOne-to-many association"
puts "----------"

# We haven't used the Employee class (and employees table) at all yet.
# If you look at this table's column structure, you'll find that it
# has a `store_id` (integer) column. This is a column that identifies
# which store each employee belongs to. It points to the `id` (integer)
# column of their store.

# Tell Active Record that the employee and store tables are related.
# 1. Add to the Store model (class): `has_many :employees`
# DONE

# 2. Add to the Employee model (class): `belongs_to :store`
# DONE

# 3. Add some data into employees.
@store1.employees.create(first_name: "Bob", last_name: "Dobolina", hourly_rate: 50)

# 4. Create some more employees using the create method.
@store1.employees.create(first_name: "Ronald", last_name: "McDonald", hourly_rate: 60)
@store2.employees.create(first_name: "Roy", last_name: "McRoyerson", hourly_rate: 20)
@store2.employees.create(first_name: "Bill", last_name: "Clinton", hourly_rate: 1000)
