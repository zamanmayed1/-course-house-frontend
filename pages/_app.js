import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import { store } from '@/src/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return(
    <div className='bg-gray-50 min-h-screen'>
        
      <Provider store={store}>
    <Navbar/>
    <ToastContainer autoClose={1000} position="bottom-right" draggable  />
     <Component {...pageProps} />
     <Footer/>
     </Provider>
    </div>
  )
}
