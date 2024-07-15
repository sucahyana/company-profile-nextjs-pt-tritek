import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { Button } from "@headlessui/react";
import { useState } from 'react';

export default function Guest({ children }) {
    const { url: page } = usePage();
    const [primaryButton, setPrimaryButton] = useState({
        label: page === '/register' ? 'Alreadey registerd?' : 'Do not have?',
        route: page === '/register' ? '/login' : '/register'
    });

    const navigate = (route) => {
        if (typeof route === 'string') {
            window.location.href = route;
        } else {
            route.preventDefault();
            window.location.href = primaryButton.route;
        }
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-48 h-auto fill-current text-gray-500"/>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <h2 className="text-center text-xl font-bold mb-4">{page === '/register' ? 'Register' : 'Login'}</h2>
                {children}

                <div className="mt-2 flex flex-row gap-2 opacity-50">
                    <Button
                        type="button"
                        onClick={() => navigate(primaryButton.route)}
                        className="w-1/2 bg-indigo-500 text-white text-sm rounded-md py-1 px-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {primaryButton.label}
                    </Button>
                    {page !== '/login' && page !== '/register' && (
                        <Button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="w-1/2 bg-gray-200 text-gray-600 text-sm rounded-md py-1 px-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Login
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
