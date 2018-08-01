import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

class App {
  public app: GraphQLServer;
  constructor () {
    this.app = new GraphQLServer({
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
