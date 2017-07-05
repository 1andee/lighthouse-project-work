# Object-Oriented Programming in Ruby
# https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1

# 1.
# Create a class called MyCar. When you initialize a new instance
# or object of the class, allow the user to define some instance variables
# that tell us the year, color, and model of the car. Create an instance
# variable that is set to 0 during instantiation of the object to track
# the current speed of the car as well. Create instance methods that allow
# the car to speed up, brake, and shut the car off.

# 2.
# Add an accessor method to your MyCar class to change and view the color
# of your car. Add an accessor method that allows you to view, but not
# modify, the year of your car.

# 3.
# Create a nice interface that allows you to accurately describe the action
# you want your program to perform. Create a method called spray_paint that
# can be called on an object and will modify the color of the car.


class MyCar

  attr_reader :year, :model
  attr_accessor :engine, :handbrake, :speed, :colour

  def initialize(year, colour, model)
    @year = year
    @model = model
    @colour = colour
    @speed = 0
    @engine = "off"
    @handbrake = "on"
    puts "Ah, yes, the #{year} #{model}. Nice whip!"
  end

  def start_car
    engine = "on"
    puts "Gentlemen, start your engines..."
  end

  def shut_off_car
    engine = "off"
    puts "Entering fuel-saving mode"
  end

  def release_brake
    handbrake = "off"
    puts "Handbrake released"
  end

  def apply_brake
    handbrake = "on"
    puts "Handbrake applied"
  end

  def gun_it(kph_increase)
    speed += kph_increase
    speed = 200 if speed > 200
    "Speed increased to #{speed} kph."
  end

  def granny_mode(kph_decrease)
    speed -= kph_decrease
    speed = 0 if speed < 0
    "Slowing by #{speed} until you reach #{speed}"
  end

  def abrupt_stop
    speed = 0
    puts "Gehalten"
  end

  def return_year
    puts "The car was manufactured in #{year}"
  end

  def spray_paint(new_colour)
    self.colour = new_colour
    puts "Your ride is now a nice shade of #{colour}"
  end

end
