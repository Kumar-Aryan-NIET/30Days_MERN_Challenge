# 30 Days MERN Challenge

![alt text](image.png)

 <div style="color:Grey">API routes for CRUD operations in an Express.js application.</div>

### Create (POST):

```js
app.post("/api/items", (req, res) => {
  // Code to create a new item...
  res.json({ message: "Item created" });
});
```

- In a RESTful API, POST is typically used to create new resources.
- The req.body would usually contain the data for the new item to be created.
- After the item is created (usually in a database),
  - a response is sent back to the client.
  - The response could be a confirmation message or the created item itself.

### Read (GET):

```js
app.get("/api/items", (req, res) => {
  // Code to fetch all items...
  res.json({ message: "Fetched items" });
});

app.get("/api/items/:id", (req, res) => {
  // Code to fetch a single item by id...
  res.json({ message: `Fetched item with id ${req.params.id}` });
});
```

- The first route fetches all items, while the second fetches a single item by its ID.
- In a RESTful API, GET is used to read or retrieve resources.
- The :id in the second route is a route parameter, allowing you to specify the ID of the item in the URL.
  - The ID can be accessed in your code with req.params.id.
- The responses could be the items fetched from the database.

### Update (PUT):

```js
app.put("/api/items/:id", (req, res) => {
  // Code to update an item by id...
  res.json({ message: `Updated item with id ${req.params.id}` });
});
```

- In a RESTful API, PUT is typically used to update existing resources.
- The req.body would usually contain the updated data for the item, and req.params.id would be the ID of the item to update.
- After the item is updated in the database, a response is sent back to the client.
- The response could be a confirmation message or the updated item itself.

### Delete (DELETE):

```js
app.delete("/api/items/:id", (req, res) => {
  // Code to delete an item by id...
  res.json({ message: `Deleted item with id ${req.params.id}` });
});
```

- In a RESTful API, DELETE is used to delete resources.
- req.params.id would be the ID of the item to delete.
- After the item is deleted from the database, a response is sent back to the client.
- The response could be a confirmation message.

### PATCH:

- This HTTP method is used to apply partial modifications to a resource.
- Unlike PUT, which updates the entire resource,
  - PATCH only updates the fields that were included in the request.
- Here's an example of a PATCH route in Express:

```js
app.patch("/api/items/:id", (req, res) => {
  // Code to partially update an item by id...
  res.json({ message: `Partially updated item with id ${req.params.id}` });
});
```

- In this route, req.body would contain the fields to be updated, and req.params.id would be the ID of the item to update.
- After the item is partially updated in the database, a response is sent back to the client.
- The response could be a confirmation message or the partially updated item itself.

### HEAD:

- This HTTP method is similar to GET, but it only returns the headers and not the body of the response.
- This can be useful when you want to check if a resource exists or retrieve metadata about a resource without actually downloading the resource itself.
- Here's an example of a HEAD route in Express:

```js
app.head("/api/items/:id", (req, res) => {
  // Code to check if an item exists by id...
  res.status(200).end(); // Send a 200 OK status if the item exists
});
```

- In this route, req.params.id would be the ID of the item to check.
- If the item exists, the server sends a 200 OK status.
- If the item doesn't exist, the server could send a 404 Not Found status.

### OPTIONS:

- This HTTP method is used to describe the communication options for the target resource.
- It returns the HTTP methods that the server supports for the specified URL.
- This can be useful for feature detection and for implementing CORS (Cross-Origin Resource Sharing).
- Here's an example of an OPTIONS route in Express:

```js
app.head("/api/items/:id", (req, res) => {
  // Code to check if an item exists by id...
  res.status(200).end(); // Send a 200 OK status if the item exists
});
```

- In this route, the server sends a response with the Allow header,
  - which lists the HTTP methods that are supported for the /api/items URL.
