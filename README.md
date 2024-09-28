# 30 Days MERN Challenge

![alt text](image.png)

MongoDB:

MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability.

- It works on the concept of collections and documents.

Mongoose:

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

- It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

_Here's how you can connect to MongoDB using the MongoDB native driver_:

Install the MongoDB native driver:

```cmd
    npm install mongodb
```

Connect to MongoDB:

```js
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");
  client.close();
});
```

Now, I want to save the connection code in './config/db.js'
for that I used

//db.js

```js
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const connectDB = MongoClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    client.close();
  }
);

module.exports = connectDB;
```

and

```js
const connectDB = require("./config/db");
connectDB();
```

I got

_The error message "TypeError: connectDB is not a function" is indicating that connectDB is not a function, which is true according to the code you've selected from db.js._

In your db.js file, connectDB is assigned the result of MongoClient.connect(), which is not a function.

- Instead, connectDB should be a function that wraps the MongoClient.connect() call.

```js
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const connectDB = function (callback) {
  MongoClient.connect(
    url,
    { useUnifiedTopology: true },
    function (err, client) {
      if (err) {
        console.error("Failed to connect to MongoDB", err);
        if (callback) callback(err);
        return;
      }
      console.log("Connected successfully to server");
      if (callback) callback(null, client);
    }
  );
};

module.exports = connectDB;
```

_how you can connect to MongoDB using Mongoose:_

Install Mongoose:

```cmd
    npm install mongoose
```

Connect to MongoDB:

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established successfully"))
  .catch((err) => console.error("Failed to establish MongoDB connection", err));
```

The main difference between the two is that

- the MongoDB native driver provides a simple API for MongoDB, with no abstraction,
- while Mongoose provides an abstraction layer with a lot of features like middleware, model validation, and more.

_for performance or fine-grained control, the MongoDB native driver might be a better choice._
