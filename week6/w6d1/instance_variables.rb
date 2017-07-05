class Person

  attr_accessor :name

  def initialize(name)
    @name = name
  end

end

p = Person.new('Prince')
puts p.name

p.name = 'The Artist (Formerly Known As Prince)'
puts p.name
