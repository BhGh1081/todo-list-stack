

export interface TaskType  {
    id: string,
    user_id: string,
    title: string,
    description: string,
    category: string,
    date: Date,
    completed: boolean
}

export interface SessionUserType {
    email: string,
    id: string,
    name: string,
}
