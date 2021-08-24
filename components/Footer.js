import Link from 'next/link';
const Footer = () => {
    return ( 
        <footer className="footer mt-auto py-3 bg-light">
          <div className='container'>
            <span className="text-muted">Place sticky footer content here.</span>
            <Link  href="/about"><a className="nav-link">About</a></Link>
          </div>
        </footer>
     );
}
export default Footer;