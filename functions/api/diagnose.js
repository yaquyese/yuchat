
export async function onRequestGet(context) {
  const env = context?.env;

  return Response.json({
    hasEnv: Boolean(env),
    hasDB: Boolean(env?.DB),
    hasBUCKET: Boolean(env?.BUCKET),
  });
}
