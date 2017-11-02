#Part 1

students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
    {"first_name": "Mark", "last_name": "Guillen"},
    {"first_name": "KB", "last_name": "Tonel"}
]

def printingNames(parameter):
    for item in parameter:
        print item['first_name'], item['last_name']

printingNames(students)

users = {
    'Students':[
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
    'Instructors': [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
}

def printingNames2(parameter):
    print "Students"
    order = 1
    for item in users['Students']:
        namelength = len(item['first_name']) + len(item['last_name'])
        print str(order) + " - " + str(item['first_name']) + str(item['last_name']) + " - " + str(namelength)
        order += 1

    print "Instructors"
    order = 1
    for item in users['Instructors']:
        namelength = len(item['first_name']) + len(item['last_name'])
        print str(order) + " - " + str(item['first_name']) + str(item['last_name']) + " - " + str(namelength)
        order += 1

printingNames2(users)
