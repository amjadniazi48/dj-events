import Head from "next/head";
import Header from "./Header";
import styles from '../../styles/Custom.module.css'
const Layout = ({ title, keywords, description, children }) => {
  return (
    <html lang="en" class="h-100">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <body className="d-flex flex-column h-100">
        <Header />
        <div className={styles.container}>{children}</div>
        <footer className="footer mt-auto py-3 bg-light">
          <div className='container'>
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </body>
    </html>
  );
};
Layout.defalutProps = {
  title: "DJ Events|Find the hottest parties",
  description: "Find the latest DJ and other events",
  keywords: "music, events",
};
export default Layout;
