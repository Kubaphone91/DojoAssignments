import random

def CoinTosses(amount):
    heads = 0
    tails = 0
    for item in range(1,amount+1):
        random_num = random.random()
        x_rounded = round(random_num)
        if x_rounded == 0:
            heads += 1
            print "Attempt #" + str(item) + ": Throwing a coin... It's a head! ... Got " +str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
        elif x_rounded == 1:
            tails += 1
            print "Attempt #" + str(item) + ": Throwing a coin... It's a tail! ... Got " +str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
    print "Ending the program, thank you!"

CoinTosses(5000)
