import Layout from "@/components/Layout";
import moment from 'moment';
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import {useForm} from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
function EditEventPage({evt}) {
  const [name, setName] = useState(evt.name);
  const [performers, setPerformers] = useState(evt.performers);
  const [venue, setVenue] = useState(evt.venue);
  const [address, setAddress] = useState(evt.address);
  const [date, setDate] = useState(evt.date);
  const [time, setTime] = useState(evt.time);
  const [description, setDescription] = useState(evt.description);
  const {register,handleSubmit,formState:{errors}} = useForm();
  const [imagePreview, setImagePreview] = useState(
    evt.image ? evt.image.formats.thumbnail.url : null
  )
  const router = useRouter();
  const handleRegistration = async (e) => { 
   
    const myEvent = { name, performers, venue, address, date, time, description }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myEvent)
    };
   
    const response = await fetch(`${API_URL}/events`, requestOptions);
    const evt = await response.json()

    if(!response.ok){
      toast.error('Something Went Wrong'),{
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
      };
      return
    }
    toast.success("A new event has been submitted successfully !", {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored"
    });
    router.push(`/events/${evt.slug}`)
  };
  return (
    <Layout title="Add Event page">
      <div className="container bg-light p-3">
        <h3 className="text-primary text-center">Add Event</h3>
        <ToastContainer style={{ width: "600px" }} />
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              {...register("name",{required:true})}
              onChange={(e) => setName(e.target.value)}
            />
              {errors.name && <p className="text-danger">Name is required</p>}
          </div>
        
          <div className="mb-3">
            <label className="form-label">Performers</label>
            <input
              className="form-control"
              type="text"
              name="performers"
              id="performers"
              value={performers}
              {...register("performers",{required:true})}
              onChange={(e) => setPerformers(e.target.value)}
            />
             {errors.performers && <p className="text-danger">Performers are required</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Venue</label>
            <input
              className="form-control"
              type="text"
              name="venue"
              id="venue"
              value={venue}
              {...register("venue",{required:true})}
              onChange={(e) => setVenue(e.target.value)}
            />
                {errors.venue && <p className="text-danger">Venue is required</p>} 
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              value={address}
              {...register("address",{required:true})}
              onChange={(e) => setAddress(e.target.value)}
            />
                {errors.address && <p className="text-danger">Address is required</p>} 
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              className="form-control"
              type="date"
              name="date"
              id="date"
              value={moment(date).format('yyyy-MM-DD')}
              {...register("date",{required:true})}
              onChange={(e) => setDate(e.target.value)}
            />
                {errors.date && <p className="text-danger">Date is required</p>}  
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input
              className="form-control"
              type="text"
              name="time"
              id="time"
              value={time}
              {...register("time",{required:true})}
              onChange={(e) => setTime(e.target.value)}
            />
              {errors.time && <p className="text-danger">Time is required</p>}  
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={description}
              {...register("description",{required:true})}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
               {errors.description && <p className="text-danger">Description is required</p>}    
          </div>
          <input
            type="submit"
            value="Update Event"
            className="btn btn-primary block"
          />
        </form>

        <h3>Event Image</h3>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={170} />
      ) : (
        <div>
          <p>No image uploaded</p>
        </div>
      )}
      </div>
    </Layout>
  );
}

export default EditEventPage;

export async function getServerSideProps({ params: { id }}) {
  
  
    const res = await fetch(`${API_URL}/events/${id}`)
    const evt = await res.json()
    return {
      props: {
        evt,
       
      },
    }
  }
