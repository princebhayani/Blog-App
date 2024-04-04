import { Link } from "react-router-dom";
import {Button, Label, TextInput} from "flowbite-react";
function SignUp() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                {/* left side */}
                <div className="flex-1">
                    <Link to="/" className=" font-bold dark:text-white text-4xl">
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                            {"Prince's"}
                        </span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">
                        This is demo project. You can sign up with your email and password
                        or with Google.
                    </p>
                </div>
                {/* right side */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div>
                            <Label value="Username"></Label>
                            <TextInput type="text" placeholder="Username" id="username"></TextInput>
                        </div>
                        <div>
                            <Label value="Email"></Label>
                            <TextInput type="text" placeholder="example@email.com" id="email"></TextInput>
                        </div>
                        <div>
                            <Label value="Password"></Label>
                            <TextInput type="text" placeholder="Password" id="password"></TextInput>
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to='/sign-in' className="text-blue-500">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
