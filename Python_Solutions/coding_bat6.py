def make_bricks(small, big, goal):
    '''This program accepts three numbers, a smallest, biggest, and goal number. It returns False if the goal number is greater than the sum of small and big multiplied by 5. It also returns False if the goal number % 5 is greater than small.'''
    if goal > small + big * 5:
        return False
    elif goal % 5 > small:
            return False
    return True


print(make_bricks(3, 2, 19))
print(make_bricks(3, 2, 12))
print(make_bricks(2, 3, 17))
print(make_bricks(4, 1, 9))
print(make_bricks(1, 1, 7))

#######

def lone_sum(a, b, c):
    '''This program accepts three numbers. It returns 0 if a equals b and a equals c. It returns c if a equals b. It returns b if a equals c. It returns a if b equals c. Otherwise it returns the sum of the three numbers.'''
    if a == b and a == c:
        return 0
    elif a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a
    return a + b + c

# def lone_sum(a, b, c):
#     s = 0
#     if a != b and a != c:
#         s += a  
#     if b != a and b != c:
#         s += b                     
#     if c != a and c != b:
#         s += c     
#     return s

print(lone_sum(1, 2, 3))
print(lone_sum(3, 2, 3))
print(lone_sum(3, 3, 3))
print(lone_sum(2, 3, 3))
print(lone_sum(2, 2, 3))

#######

def lucky_sum(a, b, c):
    '''This function accepts three numbers. It returns 0 if a equals 13. It returns a if b equals 13. It returns the sum of a and b if c equals 13. Otherwise, it returns the sum of the three numbers.'''
    if a == 13:
        return 0
    if b == 13:
        return a    
    if c == 13:
        return a + b              
    return a + b + c
print(lucky_sum(13, 3, 11))
print(lucky_sum(13, 3, 13))
print(lucky_sum(1, 3, 11))
print(lucky_sum(1, 13, 11))

#######

def no_teen_sum(a, b, c):
    '''This function accepts three numbers and passes them them to the fix_teen function. It then sums the three numbers returned from the function.'''
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
    '''This program accepts a number and returns the number if it is less than 13 and greater than or equal to 20, or if the number is 15 or 16.'''
    if 13 <= n < 20 and n != 15 and n != 16:
        return 0
    return n

print(no_teen_sum(1, 13, 15))
print(no_teen_sum(18, 17, 16))
print(no_teen_sum(22, 16, 13))

#######

def round_sum(a, b, c):
    '''This function accepts three numbers and passes them to the round10 function. It then sums the returned numbers.'''
    return round10(a) + round10(b) + round10(c)
    
def round10(num):
    '''This function accepts a number and, if the number % 10 is less than 5, returns the number minus the number % 10. Otherwise, it returns the number plus (10 - num % 10).'''
    if num % 10 < 5:
        return num - (num % 10)
    return num + (10 - num % 10)

print(round_sum(7, 15, 21))
print(round_sum(4, 15, 20))

#######

def close_far(a, b, c):
    '''This function accepts three numbers and passes them to the is_close and is_far functions and returns a Boolean.'''
    return (is_close(a, b) and is_far(a, b, c)) or (is_close(a, c) and is_far(a, c, b))
        
def is_close(a, b):
    '''This function returns True if the absolute value of a minus b is greater than or equal to 1.'''
    return abs(a - b) <= 1
    
def is_far(a, b, c):
    '''This function accepts three numbers and returns a True if the absolute value of a minus c is greater than or equal to 2 and the absolute value of b minus c is greater than or equal to 2.'''
    return abs(a - c) >= 2 and abs(b - c) >= 2

print(close_far(1, 2, 3))
print(close_far(1, 2, 5))
print(close_far(1, 4, 5))
print(close_far(1, 2, 6))
print(close_far(1, 6, 2))

#######

def make_chocolate(small, big, goal):
    '''This function accepts three numbers. It returns -1 if goal is greater than small plus big multiplied by 5. It also returns -1 if goal % 5 is greater than small. Otherwise, it returns goal % 5.'''
    if goal > (small + big * 5):
        return - 1
    elif (goal % 5) > small:
        return - 1
    return goal % 5

print(make_chocolate(1, 1, 7))
print(make_chocolate(2, 1, 7))
print(make_chocolate(2, 3, 16))

#######



