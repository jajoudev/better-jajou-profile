import JajouPic from "../../../assets/images/jajou-pic.png";
import SocialsIcons from "../../Media/SocialsIcons";
import {
  YoutubeIcon,
  TwitchIcon,
  Github01Icon,
} from "hugeicons-react";

function Contact() {
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center pt-10">
          <img src={JajouPic} alt="Le profil de Jajou" className="w-44 rounded-full md:w-52" />
          <p className="mt-3 text-white font-bold md:text-xl">He/Him 16yo</p>
          <div className="flex gap-2 mt-5">
            <SocialsIcons
              href="https://www.youtube.com/@Jajou64"
              size={35}
              IconComponent={YoutubeIcon}
              color="#3b82f6"
              css="md:size{40}"
              
            />
            <SocialsIcons
              href="https://www.twitch.tv/jajoouuu"
              size={35}
              IconComponent={TwitchIcon}
              color="#3b82f6"
            />
            <SocialsIcons
              href="https://github.com/jajoudev"
              size={35}
              IconComponent={Github01Icon}
              color="#3b82f6"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
