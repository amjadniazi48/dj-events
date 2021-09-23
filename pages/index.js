
import Layout from '@/components/Layout';
import { API_URL,PER_PAGE } from '@/config/index';
import EventItem from '@/components/EventItem';
import Pagination from '@/components/Pagination';
export default function Home({ events,page,total }) {
  return (
    <Layout>
      <h1 className="text-center">Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((evt) => {
        return <EventItem key={evt.id} evt={evt} ></EventItem>
      })}
      <Pagination page={page} total ={total} ></Pagination>
    </Layout>
  )
}
export async function getServerSideProps({query:{page=1}}) {
  const start =  +page==1 ? 0 : (+page-1)*PER_PAGE
  //total 
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json()
  //Fetch Events
  const eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const events = await eventRes.json()
  //
  return {
    props: { events,page:+page, total },

  
  }
}

