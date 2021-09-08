import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from 'next/link';
import { BsPencil,BsFillTrashFill } from "react-icons/bs";
const EventPage = ({ evt }) => {
  return (
    <Layout>
      <div className="container">
        <div className="card">
          <div className="card-body">
          
         
            <Link href="#">
            <a  className="btn btn-danger float-end ms-1">
            < BsFillTrashFill color="white"></BsFillTrashFill>&nbsp;Delete
            </a>
            </Link>
            <Link href={`/events/edit/${evt.slug}`}> 
            <a className="btn btn-success float-end">
            <BsPencil color="white" ></BsPencil>&nbsp;Edit
            </a>
            </Link>
          </div>
        </div>
        
        <small>
          <b>
            Dated :{new Date(evt.date).toLocaleDateString("en-IN")} at{" "}
            {evt.time}
          </b>
        </small>
        <div class="card p-1">
          {evt.image && (
            <Image
              className="card-img-top"
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
            />
          )}
          <div class="card-body">
            <h3>Performers:</h3>
            <p>{evt.performers}</p>
            <h3>Description:</h3>
            <p>{evt.description}</p>
            <h3>Venue: {evt.venue}</h3>
            <p>{evt.address}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ query: { slug } }) {
  //  console.log(slug)
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
export default EventPage;
