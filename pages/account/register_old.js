import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import { LoginOutlined   } from '@ant-design/icons';
import {useForm} from 'react-hook-form';

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const {  error } = useContext(AuthContext)
    useEffect(() => error && toast.error(error))

    const {register,handleSubmit,formState:{errors}} = useForm();
    const handleRegistration = (e) => {
        e.preventDefault();  
        if (password !== passwordConfirm) {
            toast.error('Confirm Password does not match', {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            return
        }
        register({ username, email, password }) 
    }
    return (
        <Layout title='Register DJ events'>
            <ToastContainer />
            <div className="card bg-light mx-auto" style={{width:"40em"}}>
                <div className="card-body">
                    <h3 className="card-title"><LoginOutlined />&nbsp;&nbsp;Register</h3>
                    <hr></hr>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                id='username'
                                className="form-control"
                                value={username}
                                {...register("username",{required:true})}
                                onChange={(e) => setUsername(e.target.value)}                      
                            />
                               {errors.username && <p className="text-danger">Username is required</p>}
                        </div>
                        <div>
                            <label htmlFor='email'>Email Address</label>
                            <input
                                type='email'
                                className="form-control"
                                id='email'
                                value={email}
                                {...register("email",{required:true})}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                             {errors.email && <p className="text-danger">Email is required</p>}
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                className="form-control"
                                value={password}
                                {...register("password",{required:true})}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                               {errors.password && <p className="text-danger">password is required</p>}
                        </div>
                        <div>
                            <label htmlFor='passwordConfirm'>Confirm Password</label>
                            <input
                                type='password'
                                id='passwordConfirm'
                                className="form-control"
                                {...register("passwordConfirm",{required:true})}
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                               {errors.passwordConfirm && <p className="text-danger">Confirm Password is required</p>}
                        </div>
                        <input type='submit' value='Register' className='btn btn-primary mt-2' />
                    </form>
                </div>
            </div>
        </Layout>
    )
}
