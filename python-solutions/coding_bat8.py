def count_evens(nums):
    '''This function counts the number of even numbers in a list.'''
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

print(count_evens([2, 1, 2, 3, 4]))
print(count_evens([2, 0, 4]))
print(count_evens([1, 3, 5]))

######

def big_diff(nums):
    '''This function returns the difference between the highest and lowest numbers in a list.'''
    return max(nums) - min(nums)

print(big_diff([1, 2, 3]))
print(big_diff([1, 2, 30]))
print(big_diff([31, 2, 30]))

######

def centered_average(nums):
    '''This function sums all numbers in a list, subtracts the lowest and highest numbers, then divides the remainder by the length of the list minus two.'''
    return (sum(nums) - max(nums) - min(nums)) / (len(nums) - 2)

print(centered_average([1, 2, 3]))
print(centered_average([1, 1, 2, 3, 3]))
print(centered_average([17, 22, 15, 30]))
print(centered_average([1, 2, 30, 50, 42]))

######

def sum13(nums):
    '''This function checks to see if there is a 13 in the given list. If so, it disregards the 13 and the following number in the list and returns the sum of the remaining numbers.'''
    while 13 in nums:
        if nums.index(13) < len(nums)-1:
            nums.pop(nums.index(13)+1)
        nums.pop(nums.index(13))
    return sum(nums)

print(sum13([1, 2, 3]))
print(sum13([1, 2, 13]))
print(sum13([1, 2, 13, 15, 16]))

######

def sum67(nums):
    '''This function checks to see if there is a 6 in the given list. If so, it disregards the 6 and all numbers until there is a 7, which is also disregarded, then sums all remaining numbers in the list.'''
    blocked = False
    count = 0
    for num in nums:
        if num == 6:
            blocked = True
            continue
        elif num == 7 and blocked:
            blocked = False
            continue
        elif not blocked:
            count += num
        continue
    return count


print(sum67([1, 2, 6, 3, 7, 5]))
print(sum67([6, 2, 7, 7, 1, 6, 2]))
print(sum67([6, 2, 1, 9, 1, 3, 7, 1]))

######

def has22(nums):
    '''This function checks to see if there are two consecutive 2's in the given list and returns True if there are.'''
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False

print(has22([1, 2, 2]))
print(has22([1, 2, 3, 2]))


