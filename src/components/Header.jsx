 // Adjust the path to your image
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
  const [google_pic, setGoogle_pic] = useState("");
  useEffect( () => {
    async function getGooglePic() {
    const user=await axios.get('https://annapurna.arnabbhowmik019.workers.dev/v1/household/user', { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    setGoogle_pic(user.data.google_pic);
    localStorage.setItem("user", JSON.stringify(user.data));
    localStorage.setItem("google_pic", user.data.google_pic);
    const loc = await axios.get('https://annapurna.arnabbhowmik019.workers.dev/v1/ngo/campaigns');
        
        localStorage.setItem("locations", JSON.stringify(loc.data.results));
    }
    getGooglePic();
  }, []);
        

  return (
    <header className="h-16 flex items-center justify-between bg-white p-4">
      <h3 className="text-left font-cameraObscura font-bold text-[#6B8E23]">Annapurnaa</h3>
      <img
        src={google_pic}
        alt="User"
        className="w-12 h-12 object-cover rounded-full"
      />
    </header>
  );
}

export default Header;