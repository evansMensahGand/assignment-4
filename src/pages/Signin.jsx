import React from 'react';
import "./Signin.css";

const Signin = () => {
    return (
        <div>
            
            <section className="create-account">
                <img src="./others/Copy.jpg" alt="" />
                <br />
                <div>
                    <form action="" className="account-creation">
                        <h3>Sign-In</h3>
                        <div className="individual-sections">
                            <input type="email" name="" placeholder="user email" />
                            <hr />
                            <br />
                        </div>
                        <div className="individual-sections">
                            <input type="password" name="password" placeholder="Password" />
                            <hr />
                        </div>
                        <div className="individual-sections">
                            <br />
                            <button>Continue</button>
                            <br />
                        </div>
                        <div className="individual-sections">
                            <p>By signing in to your account, you agree to Gandalph's
         <a href="./conditions-of-use.html">Conditions of Use</a> and <a href="./conditions-of-use.html">Privacy Notice.</a></p>
                        </div>
                        <div className="individual-sections last-one">
                            <hr width="100%" className="hr-percent" /><br />
                            <p>Don't have an account? <a href="./create account.html">Create-account</a></p>
                        </div>
                    </form>
                </div>
            </section>
            <hr width="100%" />
            <div className="copyright">
                <div className="copyright-end">
                    <div><a href="./conditions-of-use.html">Conditions of Use</a></div>
                    <div><a href="./conditions-of-use.html">Privacy Notice.</a></div>
                    <div><a href="./conditions-of-use.html">Help</a></div>
                </div>
                <p>2021, Gandalph.com, Inc. or its affiliates </p>
            </div>
        </div>
    );
};

export default Signin;
