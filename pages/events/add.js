import Layout from '@/components/Layout';
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { API_URL } from '@/config/index'
function AddEventPage() {

    const [values, setValues] = useState({
        name: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: '',
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('submit')
    }
     const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

    const router = useRouter()
    return (
        <Layout title="Add Event page">
            <div className="container">
                <h1>Add Event page</h1>
                <form onSubmit={handleSubmit} >
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input
                           className="form-control"
                            type='text'
                            id='name'
                            name='name'
                            value={values.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Performs</label>
                        <input
                           className="form-control"
                            type='text'
                            name='performers'
                            id='performers'
                            value={values.performers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Venue</label>
                        <input
                        className="form-control"
                            type='text'
                            name='venue'
                            id='venue'
                            value={values.venue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Address</label>
                        <input
                           className="form-control"
                            type='text'
                            name='address'
                            id='address'
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Address</label>
                        <input
                           className="form-control"
                            type='date'
                            name='date'
                            id='date'
                            value={values.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Address</label>
                        <input
                           className="form-control"
                            type='text'
                            name='time'
                            id='time'
                            value={values.time}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">description</label>
                        <textarea
                           className="form-control"
                            type='text'
                            name='description'
                            id='description'
                            value={values.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <input type='submit' value='Add Event' className='btn btn-primary block' />
                </form>
            </div>
        </Layout>
    )
}

export default AddEventPage
