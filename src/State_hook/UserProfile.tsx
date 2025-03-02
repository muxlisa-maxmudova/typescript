import {useState} from "react";
import {User} from "./types.ts";
const UserProfile = () => {
    const [profile, setProfile] = useState<User>({
        name:'',
        age:0,
        email:''
    });
    const updateName = (name: string) => {
        setProfile((prevProfile)=>({...prevProfile, name}));
    }
    const updateAge = (age: string) => {
        setProfile((prevProfile)=>({...prevProfile, age: Number(age)}));
    }
    const updateEmail = (email: string) => {
        setProfile((prevProfile)=>({...prevProfile, email}));
    }
    return (
        <div>
            <h2>User Profile</h2>
            <input
                placeholder='name'
                type="text"
                value={profile.name}
                onChange={(e) => updateName(e.target.value)}/>
            <input
                placeholder='age'
                type="number"
                value={profile.age > 0 ? profile.age : ''}
                onChange={(e) => updateAge(e.target.value)}/>
            <input
                placeholder='email'
                type="email"
                value={profile.email}
                onChange={(e) => updateEmail(e.target.value)}/>
            <h3>Profile Summary:</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Email: {profile.email}</p>
        </div>
    )
}
export default UserProfile
