import React,  { useState }from 'react'
import {Button, Card, Alert} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Logout.scss'

export default function Logout() {
    const {logout} = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

 
    async function handleLogout(){
        try{
            await logout()
            history.push('/login')
        } catch{
            setError ('failed to log out ')
        }
    }
    return (
        <div className='logout-body'>
           <Card className='profile__card'>
               <Card.Body>
                    <h2 className ="text-center mb-4">See you Soon! </h2>
                    {error && <Alert variant ='danger'>{error}</Alert>}
                    {/* <strong>Email:  </strong> {currentUser.email} */}
                    {/* <Link to = "/update-profile" className = "btn btn-primary w-100 mt-3">Update Profile</Link> */}
                    <div className='w-100 text-center mt-2'>
                <Button variant ="link" onClick={handleLogout}>Log Out</Button>
           
            </div>
               </Card.Body>
            </Card> 

           
        </div>
    )
}
