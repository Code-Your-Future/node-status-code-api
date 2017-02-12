# Node status code API

### Get started:

```
git clone https://github.com/Code-Your-Future/node-status-code-api.git
npm install
npm test
```

## Goal

The goal is to write an API that serves JSON data containing information about different HTTP status codes. For example, when you run `npm start` and navigate to [http://localhost:8080/200](http://localhost:8080/200), you should see a JSON file that tells you that the HTTP status code `200` means `OK`. Likewise, at [http://localhost:8080/503](http://localhost:8080/503) you should see a JSON file that tells you that the HTTP status code `503` means `Service Unavailable`.

`/data/status-codes.json` is a JSON file that contains information about all the codes. The file has already been required into the `server.js` file (this is the file where you will be doing your work) and is available as the `statusCodes` array. You will need to fetch the correct information from this array.

### Steps

To achieve this goal, you'll have to complete the following steps.

1. Make an Express route that accepts a status code as a parameter.
2. In the route endpoint, find the correct status code data from within the `statusCodes` array and return that data as JSON.

### TDD

This repository contains a set of tests which check that the app works correctly. Run `npm test` to check if things work as expected. When the application works correctly, you should see something like:
```
Status code API
  ✓ has a '/:code' route
  ✓ returns the correct data from the 'statusCodes' array

  2 passing (36ms)
```
However, when you start work on this project, you should see something like:
```
  Status codes API
    1) has a '/:code' route
    2) returns the correct data from the 'statusCodes' array


  0 passing (52ms)
  2 failing
  
  1) Status codes API has a '/:code' route:
     Error: expected 200 "OK", got 404 "Not Found"
     
  2) Status codes API returns the correct data from the 'statusCodes' array
     Error: expected 200 "OK", got 404 "Not Found"
```

These failing tests should give you some ideas about how to proceed, so read them closely.
