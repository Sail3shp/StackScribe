import { Key, Mail, UserIcon } from "lucide-react"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useState,useEffect } from "react"
import { signin } from "../app/userSlice"

const SignupPage = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const{user,loading} = useSelector((state) => state.user)
    console.log(user,loading)

    const handleFormSubmit =(e) => {
        e.preventDefault()
        dispatch(signin(formData))

    }
    useEffect(() => {
        if(user) {
            navigate('/',{replace:true})
        }
    },[user,navigate])
    return (
        <form 
        onSubmit={handleFormSubmit}
        className="flex flex-col space-y-5 max-w-lg md:mx-auto my-10 bg-neutral-200  rounded-lg shadow-xl p-6 m-6">
            <h2 className="text-2xl font-medium">Create an account</h2>
            <div>
                <label htmlFor="username" className="text-sm block mb-2.5">Username</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3"><UserIcon /></div>
                    <input type="text" id="username" required className=" block w-full ps-10 pe-3 py-2.5 bg-neutral-100 rounded-md"
                    onChange={(e) => setFormData({...formData,username:e.target.value})}
                    placeholder="john doe"/>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="text-sm block mb-2.5">Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3"><Mail/></div>
                    <input type="email" id="email" required 
                    onChange={(e) => setFormData({...formData,email:e.target.value})}
                    className=" block w-full ps-10 pe-3 py-2.5 bg-neutral-100 rounded-md" placeholder="my@email.com"/>
                </div>
            </div>
            <div>
                <label htmlFor="password" className="text-sm block mb-2.5">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3"><Key /></div>
                    <input type="password" id="password" required className=" block w-full ps-10 pe-3 py-2.5 bg-neutral-100 rounded-md"
                    onChange={(e) => setFormData({...formData,password:e.target.value})}
                    placeholder="********" />
                </div>
            </div>
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer transition text-white duration-100  ">Create an account </button>

        </form>
    )
}

export default SignupPage