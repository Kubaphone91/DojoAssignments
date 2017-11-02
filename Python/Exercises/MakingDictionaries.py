name = ["Anna", "Eli", "Pariece", " Brendan", " Amy", "Shane", "Oscar"]
favorite_animal = [ "horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(arr1,arr2):
    new_dict = {}
    new_dict = zip(arr1,arr2)
    new_dict_official = dict(new_dict)
    return new_dict_official

print(make_dict(name,favorite_animal))

#Hackerman version

#def make_dict_hacker(arr1,arr2):
#    new_dict1 = {}
#    if len(arr1) > len(arr2):
#        temp_dict = new_dict1.fromkeys(arr1)
#            arr1[item] = value(arr2)
#    else:
#        temp_dict = new_dict1.fromkeys(arr2)
#        for item in arr2:
#            arr2[item] = value(arr1)
#
#    return temp_dict

#print(make_dict_hacker(name,favorite_animal))
