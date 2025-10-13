import { auth } from "../auth";
import { getCategories } from "../lib/action";
import AddTaskForm from "../ui/addTask-form";

export default async function page() {


    let categoreis = ['work', 'person'];

    const session = await auth();

    if (session?.user?.id)
        categoreis = await getCategories(session?.user.id);

    return (
        <div>
            <AddTaskForm categories={categoreis} />
        </div>
    )
}