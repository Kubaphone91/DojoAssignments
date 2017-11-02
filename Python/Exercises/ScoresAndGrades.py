import random

def Scores(amount):
    print "Scores and Grades"
    for item in range(0,amount):
        random_num = random.randint(60,101)
        if random_num >= 90:
            print 'Score: ' + str(random_num) + '; Your grade is an A'
        elif random_num >= 80:
            print 'Score: ' + str(random_num) + '; Your grade is a B'
        elif random_num >= 70:
            print 'Score: ' + str(random_num) + '; Your grade is a C'
        else:
            print 'Score: ' + str(random_num) + '; Your graide a a D'
    print 'End of the program. Bye!'

Scores(10)
