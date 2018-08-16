const privateResolver = resolverFunction => async (
  parent,
  args,
  context,
  info,
) => {
  if (!context.req.user) {
    throw new Error('No JWT. I refuse to processed');
  }
  const resolved = await resolverFunction(parent, args, context, info);
  return resolved;
}

export default privateResolver;