export async function onRequestGet({ env }) {
  const data = await env.DB.prepare(
    `SELECT * FROM items ORDER BY id ASC`
  ).all();

  return Response.json(data.results);
}