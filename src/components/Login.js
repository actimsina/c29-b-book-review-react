import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import userService from "../services/userService"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(username, password)
        userService.login({ username, password })
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                window.alert(res.data.status)
                navigate('/books')
            }).catch(err => window.alert(err.response.data.msg))
    }
    return (
        <div>
            <h2>Login Form</h2>
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="enter username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="enter password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>

                <Button color="primary">
                    Login
                </Button>

            </Form>
        </div>
    )
}

export default Login