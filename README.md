# csv_to_json

A simple program made in TypeScript to convert CSV files into JSON.

## Features

- Custom delimiter.
- TypeScript type declarations.
- More soon!

## Example

- Typescript

```typescript
import { MainParser } from "not-public-yet";

const parser: MainParser = new MainParser("path/bla/in.csv", {
  outFile: "out.json", // Result will be saved to out.json file.
  delimiter: ",", // CSV delimiter (defaulted to ,)
});
const result: object[] = parser.parse(); // Parse the CSV file
```

- JavaScript

```typescript
const { MainParser } = require("not-public-yet");

const parser = new MainParser("path/bla/in.csv", {
  outFile: "out.json", // Result will be saved to out.json file.
  delimiter: ",", // CSV delimiter (defaulted to ,)
});
const result = parser.parse(); // Parse the CSV file
```
