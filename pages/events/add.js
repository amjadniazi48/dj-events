import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/config/index";
function AddEventPage() {
  const [name, setName] = useState("");
  const [performers, setPerformers] = useState("");
  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
        const myEvent={name,performers,venue,address,date,time,description}
        console.log(myEvent);
  };
  const router = useRouter();
  return (
    <Layout title="Add Event page">
      <div className="container">
        <h1>Add Event page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Performs</label>
            <input
              className="form-control"
              type="text"
              name="performers"
              id="performers"
              value={performers}
              onChange={(e) => setPerformers(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Venue</label>
            <input
              className="form-control"
              type="text"
              name="venue"
              id="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              className="form-control"
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              className="form-control"
              type="text"
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add Event"
            className="btn btn-primary block"
          />
        </form>
      </div>
    </Layout>
  );
}

export default AddEventPage;
