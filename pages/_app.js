import '../styles/globals.css'
import '../styles/mainScreen.css'
import { AuthProvider } from '../contexts/auth'
import '../styles/userprofile.css'
import '../styles/ourteam.css'
import '../styles/companyprofile.css';

import 'bootstrap/dist/css/bootstrap.css'; 
function MyApp({ Component, pageProps }) {
  return <AuthProvider>
  <Component {...pageProps} />
   </AuthProvider>
}

export default MyApp
