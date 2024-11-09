import { useNavigate } from "react-router-dom";
import Logo from "../assets/AnnapurnaLogo.svg";

export default function Login() {
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-16 p-4">
      <div className="flex flex-col w-full h-44 items-center align-middle justify-end">
        <img src={Logo} alt="theSpaces" className="h-96 w-96 rounded-full" />
      </div>
      <div className="fiex gap-4 justify-center items-center text-center">
        <p className="font-marcellus text-primary text-3xl">Annapurna</p>
        <br></br>
        <p className="text-sm text-foreground ">By Axios Error</p>
      </div>

    </div>
  );
}
