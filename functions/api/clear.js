export async function onRequestPost({ env }) {
  await env.DB.prepare(`DELETE FROM items`).run();
  return Response.json({ ok: true });
}