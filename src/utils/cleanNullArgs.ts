const cleanNullArgs = (args: object): object => {
  const notNull = {};
  Object.keys(args).forEach(key => {
    if (args[key] !== null) {
      notNull[key] = args[key];
    }
  });
  console.log('notNull', notNull);
  return notNull;
};
 export default cleanNullArgs;