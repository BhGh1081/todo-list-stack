
import { auth } from "@/auth";
import { getUserTasks } from "@/app/lib/action";

export async function GET(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || undefined;
  const category = searchParams.get('category') || undefined;


  const tasks = await getUserTasks(session.user.id, status, category);
  return Response.json(tasks);
}