import { SayHelloQueryArgs, SayHelloResponse } from "../../../types/graph";

const resolver = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: false,
        text: `hi there ${args.name}`,
      }
    }
  }
};

export default resolver;