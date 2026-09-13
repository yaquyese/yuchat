export async function onRequestGet({ params, env }) {
  const object = await env.BUCKET.get(params.key);

  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(object.body);
}