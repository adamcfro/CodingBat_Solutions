def sleep_in(day, vac):
    '''This function takes in two inputs and returns True if it is not a weekday or you are on vacation.'''
    if not weekday or vacation:
        return True
    return False

########

def monkey_trouble(a, b):
    '''This function takes in two inputs and returns True if both a and b are True or if both are not True.'''
    if (a and b) or (not a and not b):
        return True
    return False

########

def sum_double(a, b):
    '''This program takes in two inputs, a and b, and if a is equal to b, adds them together and multiplies them by 2. Otherwise, it just returns the sum of a and b.'''
    if a == b:
        return ((a + b) * 2)
    else:
        return a + b

########

def diff21(n):
    '''This function takes in a number and if it is greater than 21, returns the absolute value of the number minus 21 and multiplied by 2. Otherwise, it returns the absolute value of 21 minus the number.'''
    if n > 21:
        return abs((n -21) * 2)
    else:
        return abs(21 - n)

########

def parrot_trouble(talking, hour):
    '''This function takes in two inputs and returns True if the parrot is talking and it is between 7am and 8pm.'''
    if talking and (hour < 7 or hour > 20):
        return True
    return False

########

def makes10(a, b):
    '''This program takes in two numbers and returns True if their sum is 10 or if either number is 10.'''
    if (a + b == 10) or (a == 10 or b == 10):
        return True
    return False

# sleeker way
# def makes10(a, b):
#   return (a == 10 or b == 10 or a + b == 10)

########

def near_hundred(n):
    '''THis function takes in a number and returns True if the number is within 10 of 100 or within 10 of 200.'''
    if ((abs(n - 100) <= 10) or (abs(n - 200) <= 10)):
        return True
    return False

########

def pos_neg(a, b, negative):
    '''This function takes in three boolean values and returns true if negative, and not a and not b. It also returns True if not negative and not a or not b.'''
    if negative:
        if not a and not b:
            return True
    elif not a or not b:
        return True
    return False

# alternative

def pos_neg(a, b, negative):
    '''This function takes in three boolean values and returns true if negative, and not a and not b. It also returns True if not negative and not a or not b.'''
    if negative:
        return (a < 0 and b < 0)
    return ((a < 0 and b > 0) or (b < 0 and a > 0))

########

def not_string(str):
    '''This function takes in a string and returns the string if it starts with 'not'. Otherwise it adds 'not' to the beginning of the string.'''
    if str.startswith('not'):
        return str
    return 'not ' + str

# alternative

def not_string(str):
    '''This function takes in a string and returns the string if it starts with 'not'. Otherwise it adds 'not' to the beginning of the string.'''
    if len(str) >= 3 and str[:3] == 'not':
        return str
    return 'not ' + str

########

def missing_char(str, n):
    '''This program takes in a string and a number and returns the string with the character removed from the number's index spot.'''
    if n <= len(str) - 1:
        newstring = list(str)
        newstring.pop(n)
        return ''.join(newstring)
    return str

# alternative

def missing_char(str, n):
    '''This function takes in a string and a number and returns the string with the characters up to the index of the number placed.'''
    front = str[:n]
    back = str[n+1:]
    return front + back

########

def front_back(str):
    '''This function accepts a string and returns the front character to the back and the last character to the front.'''
    if len(str) <= 1:
        return str
    else:
        front = str[:1]
        mid = str[1:-1]
        back = str[-1:]
        return back + mid + front

# alternative

def front_back(str):
    '''This function accepts a string and returns the front character to the back and the last character to the front.'''
    if len(str) <= 1:
        return str
    mid = str[1:-1]
    return str[len(str)-1] + mid + str[0]

########

def front3(str):
    '''This function returns the first three characters of a string multiplied 3 times.'''
    return str[:3] * 3

# alternative

def front3(str):
    '''This function returns the first three characters of a string multiplied 3 times.'''
    front_end = 3
    if len(str) < front_end:
        front_end = len(str)
    front = str[:front_end]
    return front + front + front

########

