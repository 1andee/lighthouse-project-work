# Object-Oriented Programming in Ruby
# https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1
#
# 1.
# Create a superclass called Vehicle for your MyCar class to inherit from and
# move the behavior that isn't specific to the MyCar class to the superclass.
# Create a constant in your MyCar class that stores information about the
# vehicle that makes it different from other types of Vehicles.
#
# Then create a new class called MyTruck that inherits from your superclass
# that also has a constant defined that separates it from the MyCar class in
# some way.
#
# 2.
# Add a class variable to your superclass that can keep track of the number of
# objects created that inherit from the superclass. Create a method to print
# out the value of this class variable as well.
#
# 3.
# Create a module that you can mix in to ONE of your subclasses that describes
# a behavior unique to that subclass.

module Offroadable
  def can_offroad?(transmission)
    (transmission === "4x4") ? true : false
  end
end

class Vehicle
  @@number_of_vehicles = 0
  attr_reader :year, :model, :colour, :ballin

  def initialize(year, model, colour)
    @@number_of_vehicles += 1
    @year = year
    @model = model
    @colour = colour
    puts "Ah, yes, the #{year} #{model}. Nice whip!"
  end

  def deets
    puts "Check out this #{self.year} #{self.model}. It's #{self.ballin}!"
  end

  def mileage(endurance, tank_size)
    puts "Your mileage is #{endurance / tank_size} kilometers per litre"
  end

end

class MyCar < Vehicle
  def initialize(year, model, colour)
    super(year, model, colour)
    @NUMBER_OF_DOORS = 4
    @BALLIN = "could be ballin"
  end
end

class MyVan < Vehicle
  def initialize(year, model, colour)
    super(year, model, colour)
    @NUMBER_OF_DOORS = 4
    @soccer_mom = true
    @dvd_player = true
    @ballin = "not ballin"
  end
end

class MyTruck < Vehicle
  include Offroadable

  def initialize(year, model, colour)
  super(year, model, colour)
    @NUMBER_OF_DOORS = 2
    @push_bar = true
    @roof_rack = true
    @BALLIN = "ballin aight"
  end

end
