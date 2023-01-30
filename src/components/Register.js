import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap"

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [valid, setValid] = useState('')


    const handleRegister = (e) => {
        e.preventDefault()
        console.log(username, password, confirmPassword)
        axios.post('http://localhost:3005/users/register',
            { username, password })
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (password !== confirmPassword) {
            setValid('is-invalid')
            setMessage('confirm password does not match')
            return
        }
        setValid('is-valid')
    }, [confirmPassword, password])

    return (
        <>
            <Form>
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

                <FormGroup>
                    <Label for="confirmPassword">
                        Confirm Password
                    </Label>
                    <Input className={valid}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="re-enter password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FormFeedback onInvalid={() => setMessage('password matches')}>
                        {message}
                    </FormFeedback>
                </FormGroup>

                <Button color="primary" onClick={handleRegister}>Register</Button>
            </Form>
        </>
    )
}

export default Register