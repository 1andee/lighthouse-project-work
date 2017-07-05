# Object-Oriented Programming in Ruby
# https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1

# Add a class method to your MyCar class that calculates the gas mileage
# of any car.


class MyCar

  attr_reader :year, :model
  attr_accessor :speed, :engine, :handbrake, :colour

  def initialize(year, colour, model)
    @year = year
    @model = model
    @colour = colour
    @speed = 0
    @handbrake = "on"
    @engine = "off"
    puts "Ah, yes, the #{year} #{model}. Nice whip!"
  end

  def self.mileage(endurance, tank_size)
    puts "Your mileage is #{endurance / tank_size} kilometers per litre"
  end

end

MyCar.mileage(650, 60)
