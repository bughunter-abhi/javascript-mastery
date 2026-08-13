// Read npmMongodb documentation ---------

const { MongoClient } = require("mongodb");

//Connection URL
const url = "mongodb+srv://bhandariabhishek488_db_user:iW5VcrqFOsJjonCk@bughunter-abhi.mhmlabi.mongodb.net/";
const client = new MongoClient(url);

//Database Name
const dbName = 'dummyData';

async function main(){
    //use Connection method to connect to the server
    await client.connect();
    console.log("Connected Successfully To The Server");
    const db = client.db(dbName);
    const collection = db.collection('user');

    //Create a second Document
    const data = [{
        firstName : "Mansi",
        lastName : "Bhandari",
        Degree : "Bachelor's of Computer Application",
        role : "Back-End Developer",
        programmingLanguage : ["Python", "Rust", "Java"],
        phoneNumber : 6326248912,
        country : "America",
        State : "California"
    },
    {
        firstName : "Bhaskar",
        lastName : "Bhandari",
        Degree : "B-Tech",
        role : "MERN Developer",
        programmingLanguage : ["Java", "Javascript", "Go"],
        phoneNumber : 8829364882,
        country : "Japan",
        State : "Tokkyo"
    }];

    const insertResult = await collection.insertMany(data);
    console.log('Inserted documents =>', insertResult); 

    //Read The Documents...
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log("Total Documents => ",countResult);

    return 'Done...';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());