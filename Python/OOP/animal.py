class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 50
        print str(name)

    def Walk(self):
        self.health -= 1
        print "Walking"
        return self

    def Run(self):
        self.health -= 5
        print "Running"
        return self

    def displayHealth(self):
        print "Health is: " + str(self.health) + " HP"
        return self

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def Pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon,self).__init__(name)
        self.health = 170

    def Fly(self):
        self.health -= 10
        return self

    def displayDrag(self):
        super(Dragon, self).displayHealth()
        print "I am a Dragon"
        return self

dog = Dog("Hogan")
dog.Walk().Walk().Walk().Run().Run().Pet().displayHealth()

dragon = Dragon("Smog")
dragon.Walk().Walk().Walk().Run().Run().Fly().displayDrag()

animal = Animal("Bear")
animal.Walk().Walk().Walk().Run().Run().displayHealth()
