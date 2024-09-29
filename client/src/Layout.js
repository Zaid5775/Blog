import Header from './Header.js'
import Footer from './pages/Footer.js';
import { Outlet } from 'react-router';
export default function Layout(){


        return(
            <>

            <div className="container" >
        <main>



        <Header/>
        <Outlet/>
       
        </main>
        </div>
        </>



        );
    


}