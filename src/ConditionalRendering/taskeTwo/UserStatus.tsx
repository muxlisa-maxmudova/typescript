type checkIn = {
    isAdmin: boolean;
    loggedIn: boolean;
}
const UserStatus = (props:checkIn) => {
    if (props.isAdmin && props.loggedIn){
        return <h1>Welcome, Admin 😊</h1>
    }else if(props.loggedIn){
        return <h1>Hello, User 😐</h1>
    }else{
        return <h1>Go and log in, immediately😡!</h1>;
    }

}
export default UserStatus
