#Part 1
def draw_stars(amount):
    for item in range(len(amount)):
        stars = amount[item]
        print "*" * stars

x = [4,6,1,3,5,7,25]
draw_stars(x)

#Part 2
def draw_stars_modded(mod_arr):
    for element in range(len(mod_arr)):
        if isinstance(mod_arr[element], int):
            star = mod_arr[element]
            print "*" * star
        else:
            first = mod_arr[element][0]
            print first.lower() * len(mod_arr[element])

y = [4, "Tom", 1, "Michael",5,7,"Jimmy Smith"]
draw_stars_modded(y)
