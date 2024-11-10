import axios from "axios";
import { useEffect } from "react";

const Callback = () => {
    //get token from the params
    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get('token');
        //validate token
        async function validateToken(token) {
            try {
                const response = await axios.post('https://annapurna.arnabbhowmik019.workers.dev/v1/household/auth/google', { "googleToken": token });
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                window.location.href = "/";
            } catch (error) {
                console.error("Error validating token:", error);
            }
        }
        if (token) {
            validateToken(token);
            
        }
        
    }, []);

    return (
        <div>Processing please wait</div>
    );
}

export default Callback;