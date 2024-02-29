import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Fields from "../common/Fields"
const LoginForm = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLoginForm = (formData) => {
        console.log(formData);

        navigate("/")
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(handleLoginForm)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[40px]">
                <Fields label="Email" error={errors.email}>
                    <input type="email"
                        name="email"
                        id="email"
                        className={`auth-input ${errors.email ? "border-red-400" : "border-gray-500"}`}
                        {...register("email", { required: "Email is requried" })}
                    />
                </Fields>
                <Fields label="Password" error={errors.password}>
                    <input type="password"
                        id="password"
                        name="password"
                        className={`auth-input ${errors.password ? "border-red-400" : "border-gray-500"}`}
                        {...register("password", {
                            required: "Password is requried",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}
                    />
                </Fields>
                <Fields>
                    <button
                        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                        type="submit"
                    >
                        Login
                    </button>
                </Fields>
            </form>
        </div>
    )
}

export default LoginForm
