import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { styles } from "./supportedstyles";

const label = { inputProps: { "aria-label": "Switch demo" } };

const supPlatforms = ({ platformData, changeSwitch, state, platformRows }) => {
  return (
    <div className="supported-platforms" style={styles.supportedPlatforms}>
      <h1 style={styles.h1}>Supported Platforms</h1>
      {platformRows.map((item, index) => {
        return (
          <div className="supPlatforms-container" style={styles.supPlatforms} key={index}>
            {platformData.map((item, index) => {
              return (
                <div className="platform-container" key={index} style={styles.platform}>
                  <div className="switch-container" style={styles.switch}>
                    <Switch {...label} size="small" onClick={changeSwitch} />
                  </div>
                  <div
                    className="platform-content-container"
                    style={styles.platformContent}
                  >
                    <div
                      className="platform-logo-container"
                      style={{
                        width: "3rem",
                        height: "3rem",
                        backgroundColor: `${item.color}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        marginRight: "5px",
                      }}
                    >
                      <item.icon style={styles.icon} />
                    </div>
                    <div
                      className="platform-name-container"
                      style={styles.platformName}
                    >
                      <p>
                        <span style={styles.onOff}>{state ? "on" : "off"}</span>{" "}
                        <br />
                        <b>{item.name}</b>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default supPlatforms;
