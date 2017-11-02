class Product(object):
    def __init__(self, price, name, weight, brand):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.cost = 0
        self.status = 'For Sale'

    def sell(self):
        self.status = 'Sold'
        return self

    def addTax(self, taxRate):
        self.cost = round((self.price + (self.price * taxRate)), 2)
        return self

    def returned(self, condition):
        if condition == 'defective':
            self.status = 'Defective'
            self.price = 0
        elif condition == 'Open Box':
            self.status = 'Used'
            self.price *= .8
        return self

    def displayInfo(self):
        print 'Product: ' + self.name
        print 'Price: $' + str(self.price)
        print 'Weight: ' + str(self.weight) + ' lbs'
        print 'Brand: ' + self.brand
        print 'Cost: $' + str(self.cost)
        print 'Condition: ' + self.status

product1 = Product(500, 'Xbox One', 10, 'Microsoft')
product1.addTax(0.099).displayInfo()

product2 =Product(450, 'Playstation 4', 12, 'Sony')
product2.returned('Open Box').addTax(.099).displayInfo()

product3 = Product(300, 'Wii', 10, 'Nintendo')
product3.returned('defective').displayInfo()
