import { hooks, createConfiguration } from "@midwayjs/hooks";
import bodyParser from "koa-bodyparser";
import * as dotenv from "dotenv";

dotenv.config();

export default createConfiguration({
  imports: [
    hooks({
      middleware: [bodyParser()],
    }),
  ],
});
