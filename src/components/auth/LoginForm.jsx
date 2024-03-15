import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import Fields from "../common/Fields"
const LoginForm = () => {
    const navigate = useNavigate()

    const { setAuth } = useAuth()
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    const handleLoginForm = async (formData) => {

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, formData)

            if (response.status === 200) {
                const { token, user } = response.data
                if (token) {
                    const authToken = token.token
                    const refreshToken = token.refreshToken

                    setAuth({ user, authToken, refreshToken })
                    navigate("/")
                }
            }

        } catch (error) {
            setError("root.random", {
                type: "random",
                message: `User with ${formData.email} is not found`
            })
            console.log(error);
        }
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
                {<p className="mb-3">{errors?.root?.random?.message}</p>}
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
