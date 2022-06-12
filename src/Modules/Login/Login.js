import { UserLogin } from '../../Services/LoginService/Login';

export const UserLoginModule = ({ UserName, Password }) => {
    UserLogin({ UserName: UserName, Password: Password });
    localStorage.setItem("authUser",JSON.stringify({ UserName: UserName, NameSurname: "Berk Çolak", Age: "24", "DateOfBirth": "28.02.1998" }))
}