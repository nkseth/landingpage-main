import { styles } from "./phonestyles";
//import video from './video.mp4';
import ReactPlayer from 'react-player'
const phone = () => {
  return (
    <div className="phone-component" style={styles.phone}>
      <div className="phone-bg" style={styles.phoneBg}>
        <div className="phone-holder" style={styles.holder}>
          {" "}

          <ReactPlayer url={"./video.mp4?autoplay=1"}
          width="300px"
          height="500px"
          playing={true}
          loop
          />

         
          {/* <iframe
            width="300"
            height="500"
            src="./video.mp4?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default phone;
