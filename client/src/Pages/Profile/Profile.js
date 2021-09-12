import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {

const user = useSelector(state => state.userReducer.user)


    return (
        <div>
            <h4>Name:{user.name}</h4>
            <h4>Email:{user.email}</h4>
                        
        </div>
    )
}

export default Profile
