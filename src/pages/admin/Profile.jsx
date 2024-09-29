import React from 'react'

export default function Profile() {
    return (
        <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Profile</li>
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    Name
                </div>
                <div>
                    Shalini Singh
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    Profile Image
                </div>
                <div>
                    <img style={{
                        height: "100px"
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" />
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    Contact Number
                </div>
                <div>
                    11111111111
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    Address
                </div>
                <div>
                   Lucknow
                </div>
            </li>
        </ul>
    )
}
