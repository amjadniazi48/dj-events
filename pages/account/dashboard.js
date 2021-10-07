import Layout from '@/components/Layout';
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
const DashboardPage = () => {
    const { user } = useContext(AuthContext);
    return (

        <Layout title='User Dashboard'>


            <h1>Main Dashboard Page</h1>

            {user ? (
                <>
                You are logged in as  {user.username}
                </>

            ) : (
                <>
                   Logged out
                </>

            )}
        </Layout>

    );
}

export default DashboardPage;