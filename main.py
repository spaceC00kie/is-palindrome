# given a string, write a function that returns a boolean saying if the string is a palindrome or not

def is_palindrome(word):
    # copy string into array
    arr = list(word)
    # define left and right pointer variables
    left = 0
    right = len(arr) - 1
    # while pointers haven't crossed
    while left < right:
        # check if values are same
        # if values are equal do nothing
        # if values are not equal return "false"
        if arr[left] != arr[right]:
            return False
        left += 1
        right -= 1
    return True


print(is_palindrome("kayak"))
