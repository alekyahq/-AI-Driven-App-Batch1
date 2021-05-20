import sqlite3
con = sqlite3.connect('demo.db')

cur = con.cursor()

# Step - 1 ( Create table )

"""
cur.execute('''CREATE TABLE stocks
               (date text, trans text, symbol text, qty real, price real)''')
"""


# Step - 2 (Insert a row of data )
"""
cur.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")
"""


# Step - 3 ( Retrive data from table)

cur.execute("select * from stocks")
data = cur.fetchall
print(data)



#Save (commit) the changes
con.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
con.close()

