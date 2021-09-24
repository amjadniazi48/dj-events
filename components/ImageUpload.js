import { useState } from 'react';
import { API_URL } from '@/config/index';

export default function ImageUpload({ evtId, imageUploaded }) {
    const [image, setImage] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('files', image)
        formData.append('ref', 'events')
        formData.append('refId', evtId)
        formData.append('field', 'image')

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData,
        })
        if (res.ok) {
            imageUploaded()
        }
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type='file' onChange={handleFileChange}  className="mb-2"/>
                </div>
                <input type='submit' value='Upload Image'  />
            </form>
        </div>
    )
}