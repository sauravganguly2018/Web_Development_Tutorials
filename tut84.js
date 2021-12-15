use saurav
show dbs
show collections
db.items.find()

//This is used to update elements in a particular object having name as ranjan
db.items.updateOne({name:ranjan},{$set:{salary:20000}})
db.items.find()

//This is used to update elements in all the objects having name as ranjan
db.items.updateMany({name:ranjan},{$set:{salary:20000}})
db.items.find()