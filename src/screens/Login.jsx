import { useNavigate } from "react-router-dom";
import Logo from "../assets/AnnapurnaLogo.svg";
import LoginImage from "../assets/LoginImage.svg"

export default function Login() {
  const navigate = useNavigate();

  const submit = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-16 p-4">
      <div className="flex flex-col w-full h-44 items-center align-middle justify-end">
        <img src={Logo} alt="ANNAPURNAA" className="h-96 w-96 rounded-full" /> </div>
      <div className="fiex gap-4 justify-center items-center text-center">
        <p className="font-cameraObscura text-[#6B8E23] text-3xl">ANNAPURNAA</p>
        <br></br>
        <p className="font-dmSans text-sm text-foreground ">By Axios Error</p>
      </div>

      <button
        onClick={submit}
        className="flex items-center gap-3 p-4 outline outline-[23AA49] rounded-xl text-[23AA49]  font-bold"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </button>
      {/* <div className="flex flex-col w-full h-44 items-center align-end justify-end"> */}
      {/*   <img src={LoginImage} alt="ANNAPURNAA" className="h-96 w-96 rounded-full" /> </div> */}

    </div>
  );
}
