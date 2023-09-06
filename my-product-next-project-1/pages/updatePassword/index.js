import { useRef } from "react";
import Link from "next/link";

export default function UpdateUser({userEmail}) {
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();

    const onUpdateUser = async (event) => {
        event.preventDefault();
        const oldPassword = oldPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
        const res = await fetch("/api/updatePassword", {
            method: "PATCH",
            body: JSON.stringify({ oldPassword, newPassword, userEmail }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            alert("Your Old Password does not matched");
            return;
        }
        alert("Password Update successful");
    };


    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onUpdateUser}>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Old Password
                    </label>
                    <div className="mt-2">
                        <input
                            id="password"
                            ref={oldPasswordRef}
                            name="password"
                            type="password"
                            autoComplete="password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            New Password
                        </label>

                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            ref={newPasswordRef}
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    {/* {check ? <p style={{ color: "#10781a", fontWeight: 500 }}>Login Successfully</p> : <p style={{ color: "#f00" }}>Please enter a valid email and password</p>} */}
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Update Password
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link href="signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign up
                </Link>
            </p>
        </div>
    );
}