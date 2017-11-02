#Fnd and Replace
str = "It's thanksgiving day. It's my birthday too!"
print str.find("day")

print str.replace("day","month")

#Min and Max
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

#First and Last
y = ["hello",2,54,-2,7,12,98,"world"]
print y[0]
z = len(y)
print y[z-1]
newStr = [y[0],y[z-1]]
print newStr

#New list
List = [19,2,54,-2,7,12,98,32,10,-3,6]
List.sort()
print List
newList = []
newList.append(List[0:(len(List)/2)])
print newList + List[(len(List)/2):]
