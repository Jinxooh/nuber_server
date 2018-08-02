import { Greeting } from "../../../types/graph";

const resolver = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: false,
        text: 'hi there'
      }
    }
  }
};

export default resolver;