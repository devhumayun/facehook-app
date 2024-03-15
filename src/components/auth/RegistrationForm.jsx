import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Fields from "../common/Fields"

const RegistrationForm = () => {

    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const navigate = useNavigate()
    const submitRegisterForm = async (formData) => {
        try {

            const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`, formData)

            if (response.status === 201) {
                navigate("/login")
            }

        } catch (error) {
            console.error(error)
            setError("root.random", {
                type: "random",
                message: `Something happed wrong`
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(submitRegisterForm)} action="" className="border-b border-[#3F3F3F] pb-10 lg:pb-[40px]">
            <Fields label="Last Name" error={errors.firstName}>
                <input type="text"
                    name="firstName"
                    id="firstName"
                    className={`auth-input ${errors.firstName ? "border-red-400" : "border-gray-500"}`}
                    {...register("firstName", { required: "First name is requried" })}
                />
            </Fields>
            <Fields label="Last Name" error={errors.lastName}>
                <input type="text"
                    name="lastName"
                    id="lastName"
                    className={`auth-input ${errors.lastName ? "border-red-400" : "border-gray-500"}`}
                    {...register("lastName", { required: "Last name is requried" })}
                />
            </Fields>
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
            {<p className="mb-3 text-red-500">{errors?.root?.random?.message}</p>}
            <Fields>
                <button
                    className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                    type="submit"
                >
                    Register
                </button>
            </Fields>
        </form>
    )
}

export default RegistrationForm
