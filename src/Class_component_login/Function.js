
import React from 'react'

function Function(props) {
    const { email , username , password} = props?.loggedInUser || {} ;
    
    return (
        <div>
            <form id="main">
            {/* <h4> {email} <br/>{username} <br/>{password} </h4> */}
            <h4> Welcome {username}</h4>
    </form>
        </div>
    )
}
export default Function
