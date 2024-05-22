"use client";
import { useState } from "react";

const User = () => {
  const [clientdata, setClientData] = useState<string>("");
  function getClientInformation() {
    // Check if the current environment is the browser
    if (typeof window !== "undefined") {
      const navigatorInfo = window.navigator;

      // Gather client information
      const clientInfo = {
        browser: {
          name: navigatorInfo.userAgent,
        },
        device: {
          type: /Mobile|Tablet|iPad|iPhone|iPod/.test(navigatorInfo.userAgent)
            ? "Mobile"
            : "Desktop",
        },
        screen: {
          resolution: `${window.screen.width}x${window.screen.height}`,
          colorDepth: window.screen.colorDepth,
        },
        fonts: Array.from(document.fonts).map((fontFace) => fontFace.family),
        localStorageEnabled: typeof window.localStorage !== "undefined",
        sessionStorageEnabled: typeof window.sessionStorage !== "undefined",
        cookieEnabled: navigatorInfo.cookieEnabled,
        language: navigatorInfo.language ,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      setClientData(JSON.stringify(clientInfo));
      return clientInfo;
    } else {
      return null; // Return null if not in a browser environment
    }
  }

  return (
    <>
      <div onClick={getClientInformation}>get finger print </div>
      <div>{clientdata}</div>
    </>
  );
}

export default User;