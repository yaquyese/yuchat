export async function onRequestPost({ request, env }) {
  const body = await request.json();

  await env.DB.prepare(
    `INSERT INTO items (type, content, file_key, created_at)
     VALUES (?, ?, ?, ?)`
  ).bind(
    body.type,
    body.content || "",
    body.file_key || "",
    Date.now()
  ).run();

  return Response.json({ ok: true });
}