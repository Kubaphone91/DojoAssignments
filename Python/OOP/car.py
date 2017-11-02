class Car(object):
    def __init__(self, price,speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

    def displayAll(self):
        print "Price: $" + str(self.price)
        print "Speed: " + str(self.speed) + ' mph'
        print "Fuel: " +  str(self.fuel)
        print "Mileage: " + str(self.mileage) + ' mpg'
        if self.price > 10000:
            print "Tax: 15%"
        else:
            print "Tax: 12%"

car1 = Car(2000, 35, 'Full', 15)
car1.displayAll()

car2 = Car(2000, 5, 'Not Full', 105)
car2.displayAll()

car3 = Car(2000, 15, 'Kind of Full', 95)
car3.displayAll()

car4 = Car(2000, 25, 'Full', 25)
car4.displayAll()

car5 = Car(2000, 45, 'Empty', 25)
car5.displayAll()

car6 = Car(200000, 35, 'Empty', 15)
car6.displayAll()
