import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Profile() {
    const{user}=useContext(Usercontext)


    if(!user) return<h2>Not logged in</h2>
  return (
    <div>Profile : {user.username}

    <h1>More component</h1>
    </div>
  )
}

export default Profile