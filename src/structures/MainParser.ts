import { Error } from "../managers/Error";
import { ErrorLevel } from "../enums/ErrorLevel";
import fs from "fs";
import { ParserOptions } from "../interfaces/ParserOptions";

class MainParser {
  public pathToFile: string = null;
  public options: ParserOptions = {
    outFile: null,
    delimiter: ",",
  };
  public constructor(pathToFile: string, options: ParserOptions) {
    if (!pathToFile)
      throw new Error("No path provided to CSV file.", ErrorLevel.ERROR);
    this.pathToFile = pathToFile;
    this.options = options;
  }
  public parse(): object[] {
    if (!fs.existsSync(this.pathToFile))
      throw new Error("File does not exist.", ErrorLevel.ERROR);
    const options = this.options;
    const rows = [];
    const data: string = fs.readFileSync(this.pathToFile, "utf-8");
    const lines = data.split("\n");
    const headers = lines[0]
      .split(options.delimiter)
      .map((header) => header.trim());
    for (let i = 1; i < lines.length; i++) {
      const values: string[] = [];
      let current = "";
      let insideQuotes = false;

      for (const char of lines[i]) {
        if (char === '"') {
          insideQuotes = !insideQuotes;
        } else if (char === options.delimiter && !insideQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }

      values.push(current.trim());

      const row = {};

      for (let j = 0; j < headers.length; j++) {
        row[headers[j]] = values[j] ? values[j].trim() : "";
      }

      rows.push(row);
    }
    if (options.outFile) {
      fs.writeFileSync(options.outFile, JSON.stringify(rows, null, 2));
    }
    return rows;
  }
}

export { MainParser };
