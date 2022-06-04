import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min";
import useOnScreen from "../../../hooks/useOnScreen";
import cn from "classnames";

export default function About() {
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
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <section
      className="about-section"
      data-scroll-section
      id="about"
    >
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}
