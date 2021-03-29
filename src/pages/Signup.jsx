import React from 'react';
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <section className="cr-account">
        <img src="./others/Copy.jpg" alt="" />
        <br />
        <div>
          <form action="" className="acc-creation">
            <h3>Create Account</h3>
            <div className="indi-sections">
              <label for="">Your Name</label><br />
              <input type="text" name="Your Name" placeholder="Fullname" />
              <br />
            </div>
            <div className="indi-sections">
              <label for="">Email</label><br />
              <input type="email" name="" placeholder="" />
              <br />
            </div>
            <div className="indi-sections">
              <label for="">Password</label><br />
              <input type="password" name="password" placeholder="At least 6 characters" />
              <p className="all-pes"> Password must be at least 6 Characters.</p>
            </div>
            <div className="indi-sections">
              <label for="">Re-enter password</label><br />
              <input type="password" name="Re-enter password" placeholder="" />
              <br />
            </div>
            <div className="indi-sections">
              <br />
              <button>Create your account</button>
              <br />
            </div>
            <div className="indi-sections">
              <p> By creating an account, you agree to Gandalph's <br/>
                  <a href="./conditions-of-use.html">Conditions of Use</a> and <a href="./conditions-of-use.html">Privacy Notice.</a>
              </p>
            </div>
           <div className="indi-sections">
              <hr width="100%" className="hr-percent"/><br/>
                <p>Already have an account? <a href="./sign in.html">Sign-In</a></p>
            </div>
          </form>
        </div>
      </section>
      <hr width="100%" />
      <div className="copy-right">
        <div className="copy-right-end">
          <div><a href="./conditions-of-use.html">Conditions of Use</a></div>
          <div><a href="./conditions-of-use.html">Privacy Notice </a></div>
          <div><a href="./conditions-of-use.html">Help</a></div>
        </div>
        <p className="all-pes">2021, Gandalph.com, Inc. or its affiliates </p>
      </div>
    </div>

  );
};

export default Signup;
