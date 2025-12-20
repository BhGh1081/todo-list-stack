import { TaskType } from "../lib/definision";
import EditTaskForm from "./editTask-form";
import ModalPortal from "./modalPortal";

export default function Modal({ task }: { task: TaskType }) {

    return (
            
                <EditTaskForm categories={['ssdsd','sdds']} task={task} />

    )
}