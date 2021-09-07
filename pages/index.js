
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to show</h3>}
      {events.map((evt) => {
        return <EventItem key={evt.id} evt={evt} ></EventItem>
      })}
    </Layout>
  )
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()

  return {
    props: { events },


  }
}

