import { styles } from "./footerstyles";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const footer = () => {
  const listData = [
    {
      icon: FaInstagram,
      heading: "Company",
      options: [
        {
          listitem: "contact us",
        },
      ],
    },
    {
      icon: FaTwitter,
      heading: "Support",
      options: [
        {
          listitem: "contact us",
        },
      ],
    },
    {
      icon: FaYoutube,
      heading: "Legal",
      options: [
        {
          listitem: "contact us",
        },
        {
          listitem: "contact us",
        },
      ],
    },
  ];
  return (
    <div className="footer-container" style={styles.footer}>
      <div className="top-container" style={styles.top}>
        {listData.map((item, index) => {
          return (
            <div key={index} className="optin-block" style={styles.option}>
              <h3>{item?.heading}</h3>
              {item.options.map((option, index) => {
                return <p href=""  key={index}>{option.listitem}</p>;
              })}
            </div>
          );
        })}
      </div>

      <div className="bottom-container" style={styles.bottom}>
        <div className="copyright-container">
          <p> &copy; ChatSight. All rights reserved</p>
        </div>

        <div className="social-icons-container" style={styles.socialIcons}>
          {listData.map((item, index) => {
            return (
              <div
                key={index}
                className="social-icon"
                style={styles.iconContainer}
              >
                <item.icon style={styles.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default footer;
