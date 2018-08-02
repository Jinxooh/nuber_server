import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import morgan from 'morgan';
import schema from './schema';

class App {
  public app: GraphQLServer;
  constructor () {
    this.app = new GraphQLServer({
      schema,
    });
    this.middlewares();
  }

  private middlewares = () => {
    this.app.express.use(cors());
    this.app.express.use(morgan('dev'));
    this.app.express.use(helmet());
  }
}

export default new App().app;
