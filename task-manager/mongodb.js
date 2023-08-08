

// destructuring
const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'; //27017 is the default port where mongodb runs. mongodb server is already running 
const databaseName = 'task-manager';  //database name. We can give any name


async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
       // Do something with the 'client', e.g., access the database, perform operations, etc.
    console.log('Connected correctly');
    // const db = client.db(databaseName);

//     db.collection('users').findOne({name: 'Jen', age: 1}, (error, user)=>{
// if(error){
//     return console.log('unable to fetch')
// }
// console.log(user)
//     })


// db.collection('users').find({age: 27}).toArray((error, users)=>{
//     console.log(users)
// })


const db = client.db(databaseName);


db.collection('task').deleteOne({
    description: "Clean the house"
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

  } catch (error) {
    console.log('Unable to connect to database!', error);
  }
}

connectToDatabase();
