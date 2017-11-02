l = ['magical unicorns',19,'hello','world']

def typeList(list):
    strings = 0
    integers = 0
    strs = ''
    ints = 0
    for element in list:
        if isinstance(element, str) == True:
            strings += 1
            strs += element + ' '
        else:
            integers += 1
            ints += element
    if strings and integers > 0:
        print "The list you entered is of mixed type"
        print strs
        print ints
    elif strings > 0 and integers == 0:
        print "The list you entered is of string type"
        print "Strings: ", strs
    else:
        print "The list you entered is of integer type"
        print "Sum: ", ints

typeList(['magical unicorns',19,98.98,'hello','world'])
