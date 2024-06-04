import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // ); Inspect those numbers in order to understand how the scroll and height is calculated below

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  return (
    <div className="scroll-bar-content">
      <div className="scroll-progress-container">
        <div
          className="current-scroll-progress-bar"
          style={{
            width: `${scrollPercentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
