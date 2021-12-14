import Head from "next/head";

export default function SignUpFormForUsers(props) {
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
          <p>Post Your Service</p>
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
        onSubmit={props.event_handler}
        className="bg-white "
        action="#"
        method="POST"
      >
            <div className="login-show">
              <h2>Company Sign Up</h2>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <input type="text" placeholder="Major" name="major" />
              <input
                type="number"
                placeholder="Mobile Number"
                name="phonenumber"
              />
              <div classNameName="flex items-center gap-3">
                <label classNameName="">ID_Card</label>
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
                <label classNameName="">Commerical_Certificate</label>
                <input
                  accept="image/*"
                  id="CommericalCertificate"
                  name="CommericalCertificate"
                  type="file"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button type="submit" value="Sign Up" />
            </div>
            </form>
            {/* <label classNameName="">Password</label> */}
            {/* <div classNameName="inline-flex align-item-baseline">
            <input
              className="pl-2 border-none outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            /></div> */}

            {/* <a href="">Forgot password?</a> */}
          

          <form
            onSubmit={props.event_handler_user}
            className="bg-white "
            action="#"
            method="POST"
          >
            <div className="register-show">
              <h2>User Sign Up</h2>
              {/* <input type="text" placeholder="Full Name" name=""/> */}
              <input type="text" placeholder="Email" name="email" />
              <input
                type="number"
                placeholder="Mobile Number"
                name="phonenumber"
              />
              <input type="password" placeholder="Password" name="password" />
              <input type="text" placeholder="intersts" name="intersts" />

              <button type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
      <script src="/login_form.js"></script>
    </>
  );
}
