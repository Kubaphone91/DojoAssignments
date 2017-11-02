def autobiography(person):
    for key, data in person.iteritems():
        print "My" , key, "is", data

myself = {"name": "Jacob Belica", "age": "24", "hometown": "Palatine"}
autobiography(myself)

def biography(person):
    for key, data in person.iteritems():
        print str(data) + " is my " + str(key) + "."

myself1 = {"name": "Kuba Belica", "age": "24", "passion": "Electrical Engineering", "focus": "Renewable Energy"}
biography(myself1)
