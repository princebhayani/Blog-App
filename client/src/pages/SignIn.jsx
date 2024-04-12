import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";

function SignIn() {
    const [formData, setFormData] = useState({});
    const {loading, error:errorMessage} = useSelector(state =>state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return dispatch(signInFailure('please fill out all fields.'));
        }
        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message));
            }
            if(res.ok){
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    }
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
                        This is demo project. You can sign in with your email and password
                        or with Google.
                    </p>
                </div>
                {/* right side */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <Label value="Email"></Label>
                            <TextInput type="email" placeholder="example@email.com" id="email" onChange={handleChange}></TextInput>
                        </div>
                        <div>
                            <Label value="Password"></Label>
                            <TextInput type="password" placeholder="**********" id="password" onChange={handleChange}></TextInput>
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>{loading ? (
                            <>
                                <Spinner size='sm' />
                                <span className="pl-3">Loading...</span>
                            </>
                        ) : 'Sign In'}</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>{"Don't have an account?"}</span>
                        <Link to='/sign-up' className="text-blue-500">Sign up</Link>
                    </div>
                    {
                        errorMessage && (
                            <Alert className="mt-5" color='failure'>
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default SignIn;
