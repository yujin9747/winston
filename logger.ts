import { createLogger } from "winston";
import { CliConfigSetLevels } from "winston/lib/winston/config";

class CliConfigSetLevelsImple implements CliConfigSetLevels {
  [key: string]: number;

  data: number;
  debug: number;
  error: number;
  help: number;
  info: number;
  input: number;
  prompt: number;
  silly: number;
  verbose: number;
  warn: number;
}

createLogger({
  levels:
})
