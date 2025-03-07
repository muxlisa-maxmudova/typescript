const ValidPassword = () => <h1>Correct Password</h1>
const InvalidPassword = () => <h1>Wrong Password</h1>
type prop = {
    isValid: boolean;
}
const Password = ({isValid}:prop) => {
    if(isValid) {
        return <ValidPassword/>
    } return <InvalidPassword/>


}
export default Password
