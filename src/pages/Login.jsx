import React from 'react'

export default function Login() {
    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Log in</h3>
                    <div className="card-text">
                        <form className="authentication">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-auth btn-primary btn-block">Sign in</button>

                            <div className="sign-up">
                                Don't have an account? <a href="#">Create One</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
