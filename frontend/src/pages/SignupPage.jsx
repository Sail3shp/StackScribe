import { Key, Mail, UserIcon } from "lucide-react"

const SignupPage = () => {
    return (
        <form className="flex flex-col space-y-5 max-w-lg mx-auto my-10 bg-neutral-200  rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-medium">Create an account</h2>
            <div>
                <label htmlFor="username" className="text-sm block mb-2.5">Username</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3"><UserIcon /></div>
                    <input type="text" id="username" required className=" block w-full ps-10 pe-3 py-2.5 bg-neutral-100 rounded-md" placeholder="john doe"/>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="text-sm block mb-2.5">Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3"><Mail/></div>
                    <input type="email" id="email" required className=" block w-full ps-10 pe-3 py-2.5 bg-neutral-100 rounded-md" placeholder="my@email.com"/>
                </div>
            </div>
            <div>
                <label htmlFor="password" className="text-sm block mb-2.5">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3"><Key /></div>
                    <input type="password" id="password" required className=" block w-full ps-10 pe-3 py-2.5 bg-neutral-100 rounded-md" placeholder="********" />
                </div>
            </div>
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer transition text-white duration-100  ">Create an account </button>

        </form>
    )
}

export default SignupPage