import LoginForm from "../ui/loginForm";

export const dynamic = 'force-dynamic';

export default function Page() {

    return (
        <div className="flex px-4 md:items-center pt-4 md:pt-0 justify-center h-screen">
            <LoginForm />
        </div>
    )
}