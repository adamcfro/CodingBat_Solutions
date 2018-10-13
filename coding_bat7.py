def double_char(str):
    '''This function accepts a string and returns the string with each letter repeated twice in a row.'''
    my_string = ''
    for letter in str:
        my_string += letter * 2
    return my_string

print(double_char('hello'))

######

def count_hi(str):
    '''This function accepts a string and counts how many times 'hi' appears in that string.'''
    my_string = 'hi'
    return str.count(my_string)

def print_this(func):
    '''This function accepts a function and returns how many times 'hi' is said.'''
    return f"Hi said {func} times."

print_this(count_hi('hi how are you? high time to move. hiking is good.'))

# def count_hi(str):
#     count = 0
#     for i in range(len(str)-1):
#         if str[i:i+2] == "hi":
#             count += 1   
#     return count

######

def cat_dog(str):
    '''This function takes in a string and returns the number of times 'cat' and 'dog' appear in the string.'''
    cats = 'cat'
    dogs = 'dog'
    count1 = str.count(cats)
    count2 = str.count(dogs)
    return count1 == count2

# def cat_dog(str):
#     cat = 0
#     dog = 0
#     for i in range(len(str) - 2):
#         if str[i:i+3] == "cat":
#             cat += 1
#         elif str[i:i+3] == "dog":
#             dog += 1                        
#     return cat == dog

print(cat_dog('cat and dog and cat and dog'))
print(cat_dog('cat and dog and cat and dog and cat'))

######

def count_code(str):
    '''This function accepts a string and returns the number of times 'co(any alphanumeric)e' appears in the string.'''
    count = 0
    for i in range(len(str)-3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1       
    return count

print(count_code("code is life, code is dream. coze."))

######

def end_other(a, b):
    '''This function takes in two strings and returns True if either string ends with the other string.'''
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

print(end_other('abcde', 'bcd'))
print(end_other('abcde', 'cde'))
print(end_other('abcde', 'bbcd'))

######

def xyz_there(str):
    '''This function accepts a string and returns True if the string contains 'xyz' and is not proceeded by a period.'''
    for i in range(1, len(str) -2):
        if str[i-1] != '.' and str[i:i+3] == 'xyz':
            return True
    return False

print(xyz_there('this is xyz'))
print(xyz_there('this is .xyz'))

######

