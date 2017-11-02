class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "Price is :$" + str(self.price)
        print "Max speed is: " + str(self.max_speed) + ' mph'
        print "Total miles: " + str(self.miles) + ' miles'

    def drive(self):
        print 'Driving'
        self.miles += 10
        return self

    def reverse(self):
        print 'Reversing'
        if self.miles > 5:
            self.miles -= 5
        else:
            print "Cannot reverse beyond 0 total miles"
        return self

bike1 = Bike(100, 15)
bike1.drive().drive().drive().reverse()
bike1.displayInfo()

bike2 = Bike(200, 25)
bike2.drive().drive().reverse().reverse()
bike2.displayInfo()

bike3 = Bike(50, 10)
bike3.reverse().reverse().reverse()
bike3.displayInfo()
