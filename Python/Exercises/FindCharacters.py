def fCharac(list,char):
    check = ''
    new_list = []
    for item in list:
        check = item.find(char)
        if check >= 0:
            new_list.append(item)
    print new_list


fCharac(['hello','world','my','name','is','Jake'],'e')
