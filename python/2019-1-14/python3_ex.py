#!/usr/bin/env python3
# if ...else和缩进
luckNum = 7
num = -1
while num!=luckNum:
    num = int(input("输入一个数字"))
    if (num > 7):
        print ("大于")
    elif (num < 7):
        print ("小于")
print ("bingo")