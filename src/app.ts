import cors from "cors";
import { GraphQLServer, PubSub } from "graphql-yoga";
import helmet from "helmet";
import morgan from "morgan";
import schema from "./schema";
import decodeJWT from "./utils/decodeJWT";
import { NextFunction, Response } from "express";

class App {
  public app: GraphQLServer;
  public pubSub: any;
  constructor() {
    this.pubSub = new PubSub(); // this is demo version, use redies, Memcached when production version
    this.pubSub.ee.setMaxListeners(99);
    this.app = new GraphQLServer({
      schema,
      context: req => {
        return {
          req: req.request,
          pubSub: this.pubSub,
        }
      }
    });
    this.middlewares();
  }

  private middlewares = () => {
    this.app.express.use(cors());
    this.app.express.use(morgan("dev"));
    this.app.express.use(helmet());
    this.app.express.use(this.jwt);
  };

  private jwt = async (
    req,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.get("X-JWT");
    if (token) {
      const user = await decodeJWT(token);
      if (user) {
        req.user = user;
      } else {
        req.user = undefined;
      }
    }
    next();
  };
}

export default new App().app;
