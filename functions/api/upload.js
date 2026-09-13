export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const file = form.get("file");

  const key = Date.now() + "_" + file.name;

  await env.BUCKET.put(key, file.stream());

  return Response.json({
    file_key: key
  });
}