use saurav
show dbs
db.items.find()

//This will delete one object from your database having name ranjan as element if there are many such objects having element ranjan as name then it will only delete the first one from your database
db.items.deleteOne({name:"ranjan"})

//This will delete all the objects having name as gunjan from your database
db.items.deleteMany({name:"gunjan"})