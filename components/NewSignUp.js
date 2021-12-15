import Head from "next/head";
import axios from "axios";
export default function SignUpFormForUsers(props) {
  async function event_handler_company(e){
    e.preventDefault();
   
    let company_data={
      
      email : e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      is_company: true,
      phone_number:e.target.phone_number.value
    }
  
   try{await axios.post(process.env.NEXT_PUBLIC_API_URL_REGISTER,company_data)}
   catch{
    
   }
    
   
    
    // send_user_data = axios.post('https://reqres.in/api/articles',user_data)
  }
  async function event_handler_user(e){
    e.preventDefault();
    let user_data={
      username: e.target.username.value,
      email:e.target.email.value,
      is_company:false,
      password:e.target.password.value,
      phone_number:e.target.phone_number.value
    }
  
    
    try{await axios.post(process.env.NEXT_PUBLIC_API_URL_REGISTER,user_data);
      
    }catch(err){
      console.log("the email is already registered",err)
    }
    
    // send_user_data = axios.post('https://reqres.in/api/articles',user_data)
  }
  return (
    <>
      <Head>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </Head>
      {/* <!------ Include the above in your HEAD tag ----------> */}
      
      <div className="login-reg-panel">
      
        <div className="login-info-box">
          <h2>Create Your Account To Connect</h2>
          <p>Post a Service</p>
          <label id="label-register" htmlFor="log-reg-show">
            Company
          </label>
          <input
            type="radio"
            name="active-log-panel"
            id="log-reg-show"
            checked="checked"
          />
        </div>

        <div className="register-info-box">
          <h2>Create Your Account To Connect</h2>
          <p>Make an Offer</p>
          <label id="label-login" htmlFor="log-login-show">
            User
          </label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>

        <div className="white-panel">
        <form
        onSubmit={(e)=>{event_handler_company(e)}}
        className="bg-white "
        action="#"
        method="POST"
      >
            <div className="login-show">
              <h2>Company Sign Up</h2>
              <input type="text" name="username" placeholder="Full Name" />
              <input type="text" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <input
                type="number"
                placeholder="Mobile Number"
                name="phone_number"
              />
              <div classNameName="flex items-center gap-3">
                <label classNameName="">ID Card</label>
                <input
                  id="ID_Card"
                  accept="image/*"
                  name="ID_Card"
                  type="file"
                  autoComplete="ID_Card"
                  required
                  placeholder="ID Card"
                />
              </div>
              <div classNameName="flex items-center gap-3">
                <label classNameName="">Commerical Certificate</label>
                <input
                  accept="image/*"
                  id="CommericalCertificate"
                  name="CommericalCertificate"
                  type="file"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button type="submit" value="Sign Up">Sign Up</button>
            </div>
            </form>
          
          

          <form
            onSubmit={(e)=>{event_handler_user(e)}}
            className="bg-white "
            action="#"
            method="POST"
          >
            <div className="register-show">
              <h2>User Sign Up</h2>
              {/* <input type="text" placeholder="Full Name" name=""/> */}
              <input type="text" name="username" placeholder="Full Name" />
              <input type="text" placeholder="Email" name="email" />
              <input
                type="number"
                placeholder="Mobile Number"
                name="phone_number"
              />
              <input type="password" placeholder="Password" name="password" />

              
              <button type="submit" value="Sign Up">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <script src="/login_form.js"></script>
      
    </>
  );
}
