import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT: number = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElem = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llego al valor máximo",
      "color:red;background-color:black;"
    );

    const tl = gsap.timeline();

    tl.to(counterElem.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    }).to(counterElem.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElem}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleClick}>+5</button>
    </>
  );
};
