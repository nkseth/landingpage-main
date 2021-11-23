/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
import { styles } from "./navbarstyles";
const navbar = () => {
  return (
    <div className="navbar" style={styles.div}>
      <img src="/Group.png" alt="" style={styles.img} alt="logo" />
    </div>
  );
};

export default navbar;
