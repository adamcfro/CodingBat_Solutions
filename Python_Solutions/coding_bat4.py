def first_last6(arr):
    '''This function accepts a list and returns True if the first or last index equals 6.'''
    if 6 == arr[0] or 6 == arr[-1]:
        return True
    return False
print(first_last6([1, 2, 6]))
print(first_last6([1, 2, 4]))
print(first_last6([6, 2, 4]))

########

def same_first_last(arr):
    '''This function accepts a list and returns True if the first and last index equal each other.'''
    if len(arr) > 0 and arr[0] == arr[-1]:
        return True
    return False
print(same_first_last([1, 2, 1]))
print(same_first_last([1, 2, 3]))

########

from math import pi

def make_pi():
    '''This program takes imports pi and returns the first three digits (excluding the period).'''
    full_pi = list(str(pi))
    final_pi = []
    for i in full_pi[:4]:
        if i == '.':
            continue
        else:
            final_pi.append(i)
    return final_pi
print(make_pi())

########

def common_end(a, b):
    '''This function accepts two strings and returns True if the first or last indices of each of the lists equal each other.'''
    if len(a) > 0 and len(b) > 0:
        if a[0] == b[0] or a[-1] == b[-1]:
            return True
    return False
print(common_end([1, 2, 3], [3, 2, 1]))
print(common_end([1, 8, 3], [1, 4, 1]))
print(common_end([1, 4, 3], [9, 3, 3]))

########

def sum3(arr):
    '''This function accepts a list and returns the sum of the first three integers.'''
    return sum(arr[:3])
print(sum3([1, 2, 3]))
print(sum3([1, 2, 3, 4]))
print(sum3([3, 4]))

########

def rotate_left3(arr):
    '''This function accepts a list and returns the list with the first index moved to the end if the length of the list is three.'''
    if len(arr) == 3:
        return arr[1:] + arr[:1]
    else:
        return "That is an unacceptable length."
print(rotate_left3([1, 2, 3]))

########

def reverse3(arr):
    '''This function accepts a list and, if the length of the list is three, returns the list reversed.'''
    if len(arr) == 3:
        return arr[::-1]
    else:
        return "That is an unacceptable length."
print(reverse3([1, 2, 3]))

########

def max_end(arr):
    '''This function accepts a list and, if the length of the list is three, returns a new list with the highest number repeated three times.'''
    if len(arr) == 3:
        high = max(arr)
        arr = [high, high, high]
        return arr
print(max_end([1, 2, 3]))

########

def sum2(arr):
    '''This function accepts a list and returns the sum of the first two indices.'''
    return sum(arr[:2])
print(sum2([1, 2, 3, 4]))
print(sum2([]))

########

def middle_way(a, b):
    '''This function accepts two lists and returns the middle index from each list if the length of both lists is three.'''
    if len(a) == 3 and len(b) == 3:
        return [a[1], b[1]]
print(middle_way([1, 2, 3], [4, 5, 6]))

########

def make_ends(arr):
    '''This function accepts a list and returns the first and last indices.'''
    if len(arr) > 0:
        return [arr[0], arr[-1]]
    return f"array length not correct"
print(make_ends([1, 2, 3, 4]))

#########

def has23(arr):
    '''This function returns True if the length of the list is two and it contains the number 2 or 3.'''
    if len(arr) == 2:
        if 2 in arr or 3 in arr:
            return True
        return False
    else:
        print("I do not know the trouble")
print(has23([1, 2]))
print(has23([1, 4]))

#########












