import JajouPic from "../../../assets/images/jajou-pic.png";
import Icons from "../../Media/SocialsIcons";
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
          <img src={JajouPic} alt="Le profil de Jajou" className="w-44 rounded-full" />
          <p className="mt-3 text-white font-bold">He/Him 16yo</p>
          <div className="flex gap-2 mt-5">
            <Icons
              href="https://www.youtube.com/@Jajou64"
              size={35}
              IconComponent={YoutubeIcon}
              color="#3b82f6"
            />
            <Icons
              href="https://www.twitch.tv/jajoouuu"
              size={35}
              IconComponent={TwitchIcon}
              color="#3b82f6"
            />
            <Icons
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
