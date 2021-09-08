
import Link from 'next/link'
import Image from 'next/image';
const EventItem = ({ evt }) => {
    return (
        <div className="container-fluid mb-2 " >

            <h3>{evt.name}</h3>
            <div className="card mb-3 p-2" >
                <div className="row g-0">
                    <div className="col-md-2">
                        <Image
                            src={
                                evt.image
                                    ? evt.image.formats.thumbnail.url
                                    : '/images/event-default.png'
                            }
                            width={175}
                            height={105}
                        />

                        <p> <small>  {new Date(evt.date).toLocaleDateString('en-IN')} at {evt.time}</small></p>
                    </div>
                    <div className="col-md-8 p-2">
                        <p>{evt.description}</p>
                    </div>
                    <div className="col-md-2 p-2">

                        <Link href={`/events/${evt.slug}`}>
                            <a className='btn btn-primary'>Details</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventItem
