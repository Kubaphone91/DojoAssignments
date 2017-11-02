#Odd/Even
def OddEven():
    for item in range (0,2001):
        if item % 2 == 0:
            print 'Number is ' + str(item) + '. This is an even number.'
        else:
            print 'Number is ' + str(item) + '. This is an odd number.'

OddEven()

#Multiply
def Multiply(arr,multiplier):
    for item in range(len(arr)):
        arr[item] *= multiplier
    return arr

b = Multiply([2,4,10,16],5)
print b

#Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for item in arr:
        temp_arr = []
        for element in range(0,item):
            temp_arr.append(1)
        new_array.append(temp_arr)
    return new_array

x = layered_multiples(Multiply([2,4,5],3))
print x
