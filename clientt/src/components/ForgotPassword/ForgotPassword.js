import React, { useRef, useState }from 'react';
import {Form, Button,  Card, Alert} from 'react-bootstrap'
import '../Signup/Signup.scss'
import { useAuth } from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef= useRef()
    const { resetPassword } = useAuth()
    const [error,setError] = useState('')
    const [message,setMessage] = useState('')
    const [loading,setLoading] = useState(false)
    




    async function handleSubmit(e){
        e.preventDefault()

        // try catch

        try{
            setMessage('')
            setError('')
            // set up loading state to prevent multiple account creation 
            setLoading(true)

            await resetPassword(emailRef.current.value)
            setMessage ('Check your inbox for further Instructions')
            
        } catch{
            setError('Failed to reset password ')
        }
            setLoading(false)  
    }

    return (
        <div className="container">
            <div className ="container__card">
                <Card className ="cards">
                    <Card.Body>
                        <h2 className ="text-center mb-4">Password Reset</h2>
                        
                        {error && <Alert variant ='danger'>{error}</Alert>}
                        {message && <Alert variant ='success'>{message}</Alert>}
                            <Form onSubmit = {handleSubmit}>
                            
                                <Form.Group id ='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref ={emailRef} required></Form.Control>
                                </Form.Group>
                                
                                <Button disabled={loading} className = "w-100" type= "Submit">Reset Password</Button> 
                            </Form> 
                            <div className="w-100 text-center mt-3">
                                 <Link to ="/login">Log In</Link>
                            </div>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to ="/signup">Sign Up</Link>
                </div>
            </div>   
        </div>
    )
}