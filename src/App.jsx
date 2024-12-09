import JajouPic from "./assets/images/jajou-pic.png";
import Icons from "./components/SocialsIcons/Icons";
import {
  Menu01Icon,
  YoutubeIcon,
  TwitchIcon,
  Github01Icon,
} from "hugeicons-react";

function App() {
  return (
    <>
      <main>
        <div className="flex items-end justify-end p-5 cursor-pointer">
          <Menu01Icon size={30} color="white" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={JajouPic} alt="Le profil de Jajou" className="w-1/3" />
          <p className="mt-3 text-white font-bold">He/Him 16yo</p>
          <div className="flex gap-2">
            <Icons
              href="https://www.youtube.com/@Jajou64"
              size={35}
              IconComponent={YoutubeIcon}
              color="blue"
            />
            <Icons
              href="https://www.twitch.tv/jajoouuu"
              size={35}
              IconComponent={TwitchIcon}
              color="purple"
            />
            <Icons
              href="https://github.com/jajoudev"
              size={35}
              IconComponent={Github01Icon}
              color="blue"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
