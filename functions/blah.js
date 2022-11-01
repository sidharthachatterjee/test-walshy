export function onRequest(context) {
  const { env } = context;
  return Response.json(env);
}
