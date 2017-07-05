# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'

binding.pry

# List all candidates ('pretty print')
puts "-----------------------------"
puts "Show all candidates:"
pp @candidates

# Return TRUE if candidate has > 2 yrs experience
puts "-----------------------------"
puts "Return TRUE if candidate has > 2 yrs experience"
@candidates.each {|candidate| puts experienced?(candidate)}

# Lookup candidate by id
puts "-----------------------------"
puts "Looking up candidate by ID:"
puts find(9)

# Return TRUE if candidate has > 100 github points
puts "-----------------------------"
puts "Return TRUE if candidate has > 100 github points"
@candidates.each {|candidate| puts enough_pts?(candidate)}

# Return TRUE if candidate knows Ruby or Python
puts "-----------------------------"
puts "Return TRUE if candidate knows Ruby or Python"
@candidates.each {|candidate| puts language?(candidate)}

# Return TRUE if candidate applied within past 15 days
puts "-----------------------------"
puts "Return TRUE if candidate applied within past 15 days"
@candidates.each {|candidate| puts applied_recently?(candidate)}

# Return TRUE if candidate is over 18 years old
puts "-----------------------------"
puts "Return TRUE if candidate is over 18 years old"
@candidates.each {|candidate| puts old_enough?(candidate)}

# List only the qualified candidiates
puts "-----------------------------"
puts "List of only the qualifed candidates:"
pp qualified_candidates
