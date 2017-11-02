sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

def testInt(a):
    if a >= 100:
        print "That's a big number!"
    else:
        print "That's a small number"

def testStr(b):
    if len(b) >= 50:
        print "Long sentence"
    else:
        print "Short sentence"

def testList(c):
    if len(c) >= 10:
        print "Big list!"
    else:
        print "Short list"

def filterType(d):
    if isinstance(d, int) == True:
        testInt(d)
    elif isinstance(d, str) == True:
        testStr(d)
    else:
        testList(d)

filterType(bS)
