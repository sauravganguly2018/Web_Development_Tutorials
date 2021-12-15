//storing data into our mongo db(database)
use saurav
db.items.insertOne({name:"saurav",salary:"250000"})
db.items.find()
db.items.insertMany([{name:"saurav",salary:"250000"},{name:"kundan",salary:"500000"}])
db.items.find()
show dbs
show collections
//then ctrl+c in mongod administrator powershell and then run show dbs it will not run
//again we run mongo d in admis powershell and then run show dbs it will run now
//and then execute
use saurav
db.items.find()
//This will show the data from database( because it store the data in datadirectory by taking command ) even after stopping mongo d from your powershell and reopening mongo d again 
db.items.insertMany([{name:"gunjan",salary:"250000"},{name:"ranjan",salary:"500000"}])



