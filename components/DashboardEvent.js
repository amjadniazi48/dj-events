import Link from 'next/link'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
export default function DashboardEvent({ evt, handleDelete }) {
  return (
    <div className="card mb-2 p-3 bg-light shadow-sm">
      <div className="row g-0">
        <div className="col-md-8">
          <h4>
            <Link href={`/events/${evt.slug}`}>
              <a className="nav-link">{evt.name}</a>
            </Link>
          </h4>
        </div>
        <div className="col-md-3 ">
          <Link href={`/events/edit/${evt.id}`}>
            <a className='btn btn-primary m-1'>
              <EditOutlined />
            </a>
          </Link>
          <a
            className='btn btn-primary '
            onClick={() => handleDelete(evt.id)}
          >
            <DeleteOutlined />
          </a>
        </div>
      </div>
    </div>
  )
}