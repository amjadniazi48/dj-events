
import Image from 'next/image';
const EventItem = ({ evt }) => {
    return (
        <div className="container mb-2 p-2" >
            <h3>{evt.name}</h3>
            <Image
            src={
                 evt.image
                ? evt.image.formats.thumbnail.url
                : '/images/event-default.png'
            }
            width={170}
            height={100}
        />
            <p>{evt.description}</p>
        </div>
    )
}

export default EventItem
