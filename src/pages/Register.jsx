import React from 'react'

export default function Register() {
    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Register</h3>
                    <div className="card-text">
                        <form className="authentication">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control form-control-sm" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="form-control form-control-sm" id="confirm_password" />
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
