import {ReactNode} from "react";
type children = {
    children: ReactNode;
}
const User = ({children}: children) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default User
