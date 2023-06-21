import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button,Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login, register} from '../actions/userActions'



function LoginScreen({ history}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch  = useDispatch()

    const location  = useLocation()

    const navigate = useNavigate()
    
    const redirect = location.state ? Number(location.state) : '/'

    const userRegister = useSelector(state  => state.userRegister)
    const {error, loading, userInfo} =userRegister

    useEffect(() =>{
        if(userInfo){
            navigate(redirect)
        }
    },[navigate, userInfo, redirect] )

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <FormContainer>
        <h1>
            Sign In
        </h1>
        {error && <Message variant= 'danger'>{error}</Message>}
        {loading && <Loader/>}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>

                <Form.Control 
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
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange = {(e)=>setPassword(e.target.value)}
                >

                </Form.Control>

            </Form.Group>

            <Button type='submit' variant='primary'>
                    Sign In
            </Button>

        </Form >

        <Row className = 'py-3'>
            <Col>
                New Customer? <Link to = {redirect?`/register?redirect = ${redirect}` : `/register`}>
                    Register
                
                </Link>
            
            </Col>

        </Row>
    </FormContainer>
  )
}

export default LoginScreen