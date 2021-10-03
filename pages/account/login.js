import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import { LoginOutlined   } from '@ant-design/icons';
import {useForm} from 'react-hook-form';
import AuthContext from '@/context/AuthContext'
export default function LoginPage() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error } = useContext(AuthContext)
    useEffect(() => error && toast.error(error,{  position: toast.POSITION.TOP_CENTER,
        theme: "colored"}))
    const {register,handleSubmit,formState:{errors}} = useForm();
    const handleLogin = (e) => {
       // e.preventDefault();  
        login({ email, password })
    }
    return (
        <Layout title='Login DJ events'>
            <ToastContainer />
            <div className="card bg-light mx-auto" style={{width:"40em"}}>
                <div className="card-body">
                    <h3 className="card-title"><LoginOutlined />&nbsp;&nbsp;Login</h3>
                    <hr></hr>
                    <form onSubmit={handleSubmit(handleLogin)}>
                     
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
                       
                        <input type='submit' value='Login' className='btn btn-primary mt-2' />
                    </form>
                </div>
            </div>
        </Layout>
    )
}
