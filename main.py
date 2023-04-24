import math
import time

def is_prime(n):
    for i in range(2,round(math.sqrt(n)) + 1):
        if n % i == 0: return False
    return n > 1

def find_prime_numbers(n:int):
    result = []
    i = 2
    if n < 1: return 'Введите положительное число'
    while len(result) < n:
        if is_prime(i): result.append(i)
        i = i + 1
    return result
start = time.time()
print(find_prime_numbers(100000))
end = time.time()
print(end - start)