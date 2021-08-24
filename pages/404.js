import Layout from '@/components/Layout';
import Link from 'next/link';
import { BsExclamationTriangleFill } from "react-icons/bs";
const PageNotFound = () => {
    return ( 
        <Layout title='Not Found Page'>      
        <h1><BsExclamationTriangleFill color="red" /> Not Found Page</h1>
        <Link href='/'>Go Back</Link>
        </Layout>
      
     );
}
 
export default PageNotFound;