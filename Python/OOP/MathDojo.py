class MathDojo(object):
    def __init__(self):
        self.total = 0

    def Add(self, *arg):
        for i in arg:
            if type(i) == int:
                self.total += i
            elif type(i) == list:
                for num in i:
                    self.total += num
            elif type (i) == tuple:
                for x in i:
                    self.total += x
        return self

    def Subtract(self, *arg):
        for i in arg:
            if type(i) == int:
                self.total -= i
            elif type(i) == list:
                for num in i:
                    self.total -= num
            elif type(i) == tuple:
                for x in i:
                    self.total -= x
        return self

    def Result(self):
        print self.total

md = MathDojo().Add(2).Add(2,5).Subtract(3,2).Result()
md = MathDojo().Add([1],3,4).Add([3,5,7,8],[2,6.3,1.25]).Subtract(2,[9,3],[1.1,2.3]).Result()
