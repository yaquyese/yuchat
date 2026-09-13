export async function onRequestGet({ params, env }) {
  const key = decodeURIComponent(params.key);

  const object = await env.BUCKET.get(key);

  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(object.body);
}