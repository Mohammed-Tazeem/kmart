
import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button,Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register} from '../actions/userActions'

function RegisterScreen({history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch  = useDispatch()

    const location  = useLocation()

    const navigate = useNavigate()
    
    const redirect = location.state ? Number(location.state) : '/'

    const userLogin = useSelector(state  => state.userLogin)
    const {error, loading, userInfo} =userLogin

    useEffect(() =>{
        if(userInfo){
            navigate(redirect)
        }
    },[navigate, userInfo, redirect] )

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password Do not Match')
        } else{
            dispatch(register(name,email, password))
        }
        
    }
  return (
    <FormContainer>
        <h1>
            Sign In
        </h1>
        {message && <Message variant= 'danger'>{message}</Message> }
        {error && <Message variant= 'danger'>{error}</Message>}
        {loading && <Loader/>}

        <Form onSubmit={submitHandler}>

        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                
                <Form.Control 
                    required
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange = {(e)=>setName(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>

                <Form.Control 
                    required
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange = {(e)=>setEmail(e.target.value)}
                >

                </Form.Control>

            </Form.Group>


            <Form.Group controlId='password'>
                <Form.Label>password</Form.Label>
                
                <Form.Control 
                    required
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange = {(e)=>setPassword(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Form.Group controlId='passwordConfirm'>
                <Form.Label>Confirm password</Form.Label>
                
                <Form.Control 
                    required
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange = {(e)=>setConfirmPassword(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Button type='submit' variant='primary'>
                   Register
            </Button>

        </Form >
        <Row className = 'py-3'>
            <Col>
                have an Account? <Link 
                        to = {redirect?`/login?redirect = ${redirect}` : `/rlogin`}>
                    Sign In
                
                </Link>
            
            </Col>

        </Row>

    </FormContainer>
  )
}

export default RegisterScreen