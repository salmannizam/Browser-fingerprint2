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
          version: navigatorInfo.appVersion,
        },
        os: {
          name: navigatorInfo.platform,
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
        plugins: Array.from(navigatorInfo.plugins).map((plugin) => plugin.name),
        mimeTypes: Array.from(navigatorInfo.mimeTypes).map(
          (mimeType) => mimeType.type
        ),
        fonts: Array.from(document.fonts).map((fontFace) => fontFace.family),
        localStorageEnabled: typeof window.localStorage !== "undefined",
        sessionStorageEnabled: typeof window.sessionStorage !== "undefined",
        cookieEnabled: navigatorInfo.cookieEnabled,
        language: navigatorInfo.language || navigatorInfo.userLanguage,
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