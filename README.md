# Node status code API

### Get started:

```bash
git clone https://github.com/Code-Your-Future/node-status-code-api.git
npm install
npm test
```

## Goal

The goal is to write an API that serves JSON data containing information about different HTTP status codes. For example, when you run `npm start` and navigate to http://localhost:8080/200, you should see a JSON file that tells you that the HTTP status code `200` means `OK`.

You need to fetch the information from a JSON file that contains all the codes.

### Steps

To achieve this goal, you'll have to complete the following steps.

1. Make an Express route that accepts a status code as a parameter.
2. In the route endpoint, find the correct status code data from within the `statusCode` array.
3. Return that data as JSON.

### TDD

This repository contains a set of tests, which check that the app works correctly. Run `npm test` to check if things work as expected. When the application works correctly, you should see something like:
```
Status code API
  ✓ has a '/:code' route
  ✓ returns the correct data from the 'statusCode' array

2 passing (36ms)
```
