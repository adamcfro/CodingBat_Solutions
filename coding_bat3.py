

def hello_name(name):
    '''This function accepts a name and returns 'Hello ' plus name.'''
    return(f"Hello {name}!")
print(hello_name('Bob'))

##########

def make_abba(a, b):
    '''This function accepts two strings and concatenates them.'''
    return(a + b + b + a)
print(make_abba('girl', 'boy'))

##########

def make_tags(tag, text):
    '''This function accepts a tag and a string as input, then concatenates them to appear as HTML tags.'''
    first = (f"<{tag}>")
    second = (f"</{tag}>")
    return first + text + second
print(make_tags('i', 'hello'))
print(make_tags('cite', 'goodbye'))

##########

def make_out_word(wrapper, word):
    '''This function accepts an HTML wrapper and a word and wraps the word in the wrapper.'''
    first = wrapper[:2]
    second = wrapper[2:]
    return first + word + second
print(make_out_word('<<>>', 'super'))

##########

def extra_end(text):
    '''This function accepts a string and returns the last two characters of the string multiplied three times.'''
    return text[-2:] * 3
print(extra_end('gobble'))

##########

def first_two(text):
    '''This function accepts a string and returns the first two characters.'''
    return text[:2]
print(first_two('great'))

##########

def first_half(text):
    '''This function accepts a string and returns the first half of the string.'''
    word = len(text)//2
    return text[:word]
print(first_half('apples'))

##########

def without_end(text):
    '''This function accepts a string and returns the string with the first and last characters removed.'''
    if len(text) >= 2:
        return text[1:-1]
print(without_end('sweet'))

##########

def combo_string(a, b):
    '''This function accepts two strings and returns the longer string wrapped on each side by the shorter string.'''
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
print(combo_string('gonna', 'go'))
print(combo_string('grey', 'goose'))

##########

def non_start(a, b):
    '''This function accepts two strings and concatenates the two strings without the first character from each string.'''
    if len(a) and len(b) > 0:
        return a[1:] + b[1:]
    else:
        return "That won't work"
print(non_start('gravy', 'train'))

##########

def left2(text):
    '''This function accepts a string and returns the string with the first two characters moved to the end.'''
    if len(text) > 1:
        return text[2:] + text[:2]
print(left2('greetings'))
print(left2('hi'))

##########







