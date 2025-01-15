import * as React from "react";

export function EventLogger() {
  React.useEffect(() => {
    function notify(e: any) {
      console.log(e.detail?.count);
    }

    window.addEventListener("app-notify", notify);
  }, []);

  return null;
}
