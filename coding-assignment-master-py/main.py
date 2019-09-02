def exercise1(displayname):
    arr = []
    from data1 import people
    for x in people:
        if x.is_team:
            for t in x.members:
                if displayname == t.displayname:
                    arr.append(x.displayname)
    print ('exercise1('+ displayname+ '):', arr)

exercise1('Alice')
###############################

def exercise2(displayname):
    arr = []
    from data2 import people
    for x in people:
        if x.is_team:
            for t in x.members:
                if displayname == t.displayname:
                    arr.append(x.displayname)
    print('exercise2('+displayname+'):',arr)  

exercise2('Charlie')
################################
def get_people(team):
    arr = []
    from data2 import people
    for x in people:
        if x.displayname == team:
            for t in x.members:
                if t.is_team:
                    for e in t.members:
                        arr.append(e.displayname)
                else:
                    arr.append(t.displayname)
    print('get_people('+team+ '): ',arr)
    
get_people('The C-Team')

###############################
arrs = [] 
def get_members(members):
     if len(arrs)  < 7: ##only 8 out of 13 persons in team, end recursion when max reached
        from data3 import people
        for x in people:
            if x.displayname == members:
                for t in x.members:
                    if not t.is_team and t.displayname not in arrs: ## no dups
                        arrs.append(t.displayname)
                    else:
                        get_members(t.displayname)
        else:
            return
        
get_members("The C-Team")
print('get_members:', arrs)
