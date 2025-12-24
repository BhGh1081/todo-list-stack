import { TaskType } from "../lib/definision";
import EditTaskForm from "./editTask-form";
import ModalPortal from "./modalPortal";

export default function Modal({ task, categories }: { task: TaskType, categories: string[] }) {

    return (
            
                <EditTaskForm categories={categories} task={task} />

    )
}