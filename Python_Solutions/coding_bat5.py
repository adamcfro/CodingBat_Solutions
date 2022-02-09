def cigar_party(cigars, is_weekend):
    '''This function accepts a number (cigars) and a Boolean (is_weekend) and returns True if it is the weekend and there are at least 40 cigars. It also returns True if there are between 40 and 60 cigars.'''
    if 40 <= cigars and is_weekend:
        return True
    elif 40 <= cigars <= 60:
        return True
    return False
print(cigar_party(50, True))
print(cigar_party(40, False))
print(cigar_party(70, True))

#######

def date_fashion(you, date):
    '''This function accepts two numbers (you and date) and returns 2 if you is 8 or greater and date is greater than 2 or date is 8 or greater and you is greater than 2. It returns 0 if you is less than or equal to 2 or if date is less than or equal to 2. Otherwise, it returns 1.'''
    if (you >= 8 and date > 2) or (date >=8 and you > 2):
        return 2 # yes
    elif you <= 2 or date <= 2:
        return 0 # no
    else:
        return 1 # maybe
print(date_fashion(7, 6))
print(date_fashion(9, 2))
print(date_fashion(8, 7))

#######

def squirrel_play(temp, is_summer):
    '''This function accepts a number (temp) and a Boolean (is_summer). It returns True if temp is greater than or equal to 60 and it is summer. It also returns True if temp is between 60 and 90.'''
    if temp >= 60 and is_summer:
        return True
    elif 60 <= temp <= 90:
        return True
    return False
print(squirrel_play(50, True))
print(squirrel_play(80, False))
print(squirrel_play(90, True))

#######

def caught_speeding(speed, is_birthday):
    '''This program takes in a number (speed) and a Boolean (is_birthday). It subracts 5 from speed if is_birthday is True. If speed is less than 60, it returns 0. If speed is between 61 and 80, it returns 1. Otherwise it returns 2.'''
    if is_birthday:
        speed = speed - 5
    else:
        pass

    if speed <= 60:
        return 0
    elif 61 <= speed <= 80:
        return 1
    else:
        return 2

print(caught_speeding(65, True))
print(caught_speeding(85, False))
print(caught_speeding(81, True))
#######

def sorta_sum(a, b):
    '''This function accepts two numbers and returns 20 if the sum of the numbers is between 10 and 20 (excluding 20). Otherwise returns the sum of the two numbers.'''
    if 10 <= (a + b) <= 19:
        return 20
    return a + b
print(sorta_sum(5, 7))
print(sorta_sum(5, 20))
print(sorta_sum(5, 3))

#######

def alarm_clock(day, vacation):
    '''This function accepts a number between 0 and 6 (corresponding to the days of the week) and a Boolean (vacation). If vacation is True and it is the weekend, returns 'off'. If vacation is True, returns '10:00'. If it is a weekday, returns '7:00'. Else, returns '10:00'.'''
    if vacation and day == (0 or 6):
        return 'off'
    elif vacation:
        return '10:00'
    elif day in [1, 2, 3, 4, 5]:
        return '7:00'
    else:
        return '10:00'
print(alarm_clock(3, True))
print(alarm_clock(0, False))
print(alarm_clock(6, True))
print(alarm_clock(4, False))

#######

def love6(a, b):
    '''This function accepts two numbers and returns True if either number is 6 or the sum of the two numbers is 6 or the absolute value of the two numbers subtracted from each other is greater than or equal to 6.'''
    if (a == 6 or b == 6) or (a + b == 6) or (abs(a - b) >= 6):
        return True
    return False
print(love6(5, 6))
print(love6(5, 15))
print(love6(5, 2))

#######

def in1to10(n, outside_mode):
    '''This function accepts a number and a Boolean (outside_mode). It returns True if outside_mode is True and the number is less than or equal to 1 or greater than or equal to 10. It also returns true if the number is in range(1, 10).'''
    if outside_mode:
        if n <= 1 or n >= 10:
            return True
        return False
    elif n in range(1, 11):
        return True
    return False
print(in1to10(5, False))
print(in1to10(11, False))
print(in1to10(11, True))

#######

def near_ten(num):
    '''This function accepts a number and returns True if the number % 10 is less than or equal to 2.'''
    if num % 10 <= 2:
        return True
    return False
print(near_ten(12))
print(near_ten(18))
print(near_ten(401))


