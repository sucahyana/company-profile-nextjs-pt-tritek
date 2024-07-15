import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MainContent({ auth ,tittle,content}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{tittle}</h2>}
        >
            <Head title={tittle}/>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-2 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {content}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
