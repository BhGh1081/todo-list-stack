import { getTaskWithId, getCategories } from "@/app/lib/action";
import EditTaskForm from "@/app/ui/editTask-form";


export default async function page(props: { params: Promise<{ id: string }> }) {

    const params = await props.params;
    const id = params.id;
    const task = await getTaskWithId(id);
    const categories = await getCategories(id);

    return (
        <EditTaskForm id={id} categories={categories} task={task} />
    )
}