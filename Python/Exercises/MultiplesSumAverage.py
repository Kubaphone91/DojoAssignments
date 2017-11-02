#Multiples Pt1
for count in range(1,1000):
    if count % 2 == 1:
        print count

#Multiples Pt2
for count in range(5,1000005):
    if count % 5 == 0:
        print count

#Sum List
a = [1,2,5,10,255,3]
print sum(a)

#Average List
a = [1,2,5,10,255,3]
b = sum(a)/len(a)
print b
