import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "../SectionHeader";
import "./style.scss";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min";
import useOnScreen from "../../../hooks/useOnScreen";
import cn from 'classnames'

export default function Footer() {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        Rio de Janeiro
      </h1>
    </section>
  );
}
