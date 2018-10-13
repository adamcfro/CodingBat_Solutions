def string_times(str, n):
    '''This function accepts a string and a number and returns the string multiplied by the number (if the number is greater than zero).'''
    if n <= 0:
        return str
    else:
        return str * n

########

def front_times(str, n):
    '''.This function accepts a string and a number and returns the first three characters of the string multiplied by the given number.'''
    return str[:3] * n

########

def string_bits(str):
    '''This function accepts a string and returns every other character in the string.'''
    return str[::2]

########

def string_splosion(str):
    '''This function accepts a string and starts with the first character in the string and adds it to a new string. Each iteration of the loop adds the previous charcters and an extra character from the string to the new string.'''
    words = ''
    for i in range(len(str)):
        words += str[:i+1]
    return words

########

def last2(str):
    '''This function accepts a string and returns the count of times the last two characters in the string appear elsewhere in the string.'''
    if len(str) < 2:
        return 0
    last2 = str[len(str)-2:]
    count = 0
    for i in range(len(str)-2):
        sub = str[i:i+2]
        if sub == last2:
            count = count + 1
    return count

########

def array_count9(nums):
    '''This function takes in a list of numbers and returns the number of times 9 appears in it.'''
    number = 0
    for i in nums:
        if i == 9:
            number += 1
    return number

########

def array_front9(nums):
    '''This function takes in a list of numbers and returns True if 9 appears in one of the first four indices.'''
    if 9 in nums[:4]:
        return True
    return False

########

def array123(nums):
    '''This functions accepts a list of numbers and returns True if 1, 2, and 3 appear consecutively in the list.'''
    for i in range(len(nums)-2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

########

def string_match(a,b):
    '''This function accepts two lists and returns the count of times that each character at a given index is the same as the character in the other list.'''
    count = 0
    for i, j in zip(a,b):
        if a == b:
            count += 1
    return count







