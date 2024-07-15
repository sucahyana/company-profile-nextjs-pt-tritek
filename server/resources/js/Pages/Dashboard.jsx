import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import MainContent from "@/Components/organisms/MainContent.jsx";

export default function Dashboard({auth}) {

    const content = () => {
        return (
            <div>
                content
            </div>
        )
    }
    return (
        <MainContent
            auth={auth}
            tittle={"Manage Landing Page"}
            content={content()}
        />
    );
}
