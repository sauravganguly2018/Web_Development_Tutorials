//searching data into our mongo db(database)
use saurav

//This query will return all the objects with name as saurav
//filter object
db.items.find({name:"saurav"})

//complex filter object
//gte=greater than or equal to
db.items.find({salary:{$gte:250000}})
db.items.find({salary:{$gt:250000}})

//performing and operation in fiter object
//we can also use lt(less than)
db.items.find({salary:{$gt:250000},name:"saurav"})

//performing oroperation in filter object
db.items.find({$or:[{name:"kundan"},{salary:{$gt:250000}}]})

//if we want to view only salary then
db.items.find({name:"kundan"},{salary:1})

//if we want to view  name then
db.items.find({name:"kundan"},{name:1})

//if we want to view name and salary both then
db.items.find({name:"kundan"},{name:1,salary:1})