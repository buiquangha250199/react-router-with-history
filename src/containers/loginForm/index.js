import React, {useState} from 'react'
import Footer from '../../components/footer'
import { connect } from 'react-redux'
import { login } from '../../actions'

const LoginForm = ({ dispatch}) => {
    const onFormSubmit = (e) => {
        e.preventDefault()

        dispatch(login(email, password))
    }
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login">
                <div className="login-form w-full max-w-xs text-left" >
                    <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4" onSubmit={onFormSubmit}>
                    <h3 className='text-blue-700 font-bold mb-2 text-center tracking-wider uppercase'>Login</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="username" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} autoFocus required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                id="password" type="password" placeholder="************" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                    <Footer />
                    </div>

            </div>

    )
}

export default connect()(LoginForm)