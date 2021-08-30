import Head from "next/head";
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
import styles from '@/styles/Custom.module.css';

const Layout = ({ title, keywords, description, children }) => {
  return (
   <>
      <Head>   
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head> 
    
        <main>
         <Header />
         <Slider />
         <div className={styles.container}>{children}</div>
         <Footer/>
        </main>
     
</>
  
  );
};
Layout.defalutProps = {
  title: "DJ Events|Find the hottest parties",
  description: "Find the latest DJ and other events",
  keywords: "music, events",
};
export default Layout;
