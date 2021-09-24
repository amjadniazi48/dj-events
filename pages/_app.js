import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { AuthProvider } from '@/context/AuthContext';
function MyApp({ Component, pageProps }) {
  return <AuthProvider>
         <Component {...pageProps} />
        </AuthProvider>
}
export default MyApp
