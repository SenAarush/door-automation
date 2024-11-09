'use client';

import {
    ChangeEvent,
    useEffect,
    useState
} from "react";
import { signIn } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { IUserInput, AuthRoles } from "@/types/auth";

import styles from "@/styles/Login.module.css"

const Signup = () => {

    const queryClient = useQueryClient();

    const [input, setInput] = useState<IUserInput>({
        name: "",
        password: "",
        cPassword: "",
        email: "",
        branch: "",
        domain: "",
        roles: [],
        roll: ""
    })
    const [roleTemp, setRoleTemp] = useState<string>("");

    const mutateUser = useMutation({
        mutationFn: async (user: IUserInput) => {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            return await response.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries()
        }
    })

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { name, password, cPassword, email, branch, domain, roles, roll } = input

        if (!name || !password || !cPassword || !email || !branch || !domain || !roles || !roll) {
            alert("Please fill all the fields")
            return
        }
        if (password !== cPassword) {
            alert("Passwords do not match")
            return
        }
        password.length < 8 && alert("Password must be at least 8 characters")
        if(!email.includes("@") || !email.includes(".")){
            alert("Invalid email")
            return
        }
        branch.length < 3 && alert("Branch must be at least 3 characters")
        domain.length < 3 && alert("Domain must be at least 3 characters")
        roles.length < 1 && alert("Please select at least one role")
        String(roll).length < 6 && alert("Roll must be at least 6 characters")

        mutateUser.mutate({
            name,
            password,
            cPassword,
            email,
            branch,
            domain,
            roles,
            roll: Number(roll)
        })

        console.log(input)
    }

    const roleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setInput({
            ...input,
            roles: [...roles, e.target.value]
        });
        setRoleTemp("");
    }

    const allRoles = Object.values(AuthRoles);
    const { name, password, cPassword, email, branch, domain, roles, roll } = input

    // Testing
    useEffect(() => {
        console.table(input);
    }, [input]);

    return (
        <div className={styles.container}>
            <h1>Signup</h1>
            <form
                className="flex flex-col"
                onSubmit={onSubmitHandler}
            >
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={onChangeHandler}
                    value={name}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={onChangeHandler}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="confirm password"
                    name="cPassword"
                    onChange={onChangeHandler}
                    value={cPassword}
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={onChangeHandler}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="branch"
                    name="branch"
                    onChange={onChangeHandler}
                    value={branch}
                />
                <input
                    type="text"
                    placeholder="domain"
                    name="domain"
                    onChange={onChangeHandler}
                    value={domain}
                />

                <select
                    name="role"
                    value={roleTemp}
                    onChange={roleHandler}
                >
                    <option value="" disabled>Roles</option>
                    {allRoles
                        .filter((role) => !roles.includes(role))
                        .map((role) => (
                            <option key={role} value={role}>
                                {role.charAt(0).toUpperCase() + role.slice(1).replace('_', ' ')}
                            </option>
                        ))}
                </select>

                {roles.length > 0 && roles.map((role: string, idx: number) => (
                    <div key={idx}>
                        <p>
                            {role}
                        </p>
                        <button onClick={() => setInput({
                            ...input,
                            roles: roles.filter((r) => r !== role)
                        })}>Remove</button>
                    </div>
                ))}

                <input
                    type="text"
                    placeholder="roll"
                    name="roll"
                    onChange={onChangeHandler}
                    value={roll}
                />
                <button onClick={() => console.table(input)}>
                    SignUp with Credentials
                </button>
                <button onClick={() => signIn("github")}>
                    Login with Github
                </button>
                <button onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default Signup;
