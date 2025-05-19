// api/comments/[id]/route.ts
import { comments } from "../data";

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params;

  const comment = comments.find(c => c.id === parseInt(id));

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params;

  const index = comments.findIndex(c => c.id === parseInt(id));

  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }

  const deletedComment = comments[index];
  comments.splice(index, 1);

  return Response.json(deletedComment);
}