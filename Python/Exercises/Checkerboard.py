def checker():
    row = 0
    for item in range(0,4):
        print "* * * * "
        row += 1
        if row == 1 or 3 or 5 or 7:
            print " * * * *"
            row += 1

checker()
