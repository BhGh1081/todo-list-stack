
export interface TaskType  {
    id: string,
    user_id: string,
    title: string,
    description: string,
    category: string,
    date: Date,
    completed: boolean
}

export type CategoryContextType = {
    categories: string[];
    selectedCategory: string | null;
    setSelectedCategory: (c: string | null) => void;
}

export type SetTaskListType =( a: TaskType[]) => void ;