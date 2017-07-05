# Object-Oriented Programming in Ruby
# https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1

class GoodDog

  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
    puts "The object was initialized!"
  end

  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  def speak
    "#{name} says Arf!"
  end

  def info
    "#{name} is #{height} tall and weighs #{weight}."
  end

end
