st = "Print only the words that start with s in this sentence"

for word in st.split():
    if word[0] == 's':
        print word

#Even numbers 0 to 10
for i in range(0,11):
    if i % 2 == 0:
        print(i)

#All the numbers divisable by 3
[x for in range(50) if x%3==0]

if len(st.split())%2==0:
    print("even")

[word[0] for word in st.split()]

#Counts the times that 3 is in the list l
l.count(3)

l.append(6)

help(l.count)


##################################################################################
#                                 Exo                                            #
##################################################################################
# Enter your code here. Read input from STDIN. Print output to STDOUT
elist = []
lines = int(input())
for i in range(lines):
    commands = str(input()).split()
    '''    if commands[0] == 'insert':
        l.insert(int(commands[1]),int(commands[2]))
    elif commands[0] == 'print':
        print(l)
    elif commands[0] == 'remove':
        l.remove(int(commands[1]))
    elfi commands[0] == 'append':
        l.append(int(commands[1]))
    elif commands[0] == 'sort'
    '''

    if commands[0] == 'print':
        print(elist)
    else:
        method = getattr(list, commands[0])
        com = (int(x) for x in commands[1:])
        method(elist,*com)
#################################################################################        
