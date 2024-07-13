"use client";
import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import "./style.css";

export function TimelineComponent() {
  const Timeline = ({
    setObserver,
    callback,
    className,
  }: {
    setObserver: Function;
    callback: () => void;
    className: string;
  }) => {
    const [message1, setMessage1] = useState({ header: "", body: "" });
    const [message2, setMessage2] = useState({ header: "", body: "" });
    const [message3, setMessage3] = useState({ header: "", body: "" });

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);

    const someCallback = () => {
      setMessage1({
        header: "2019 - 2020 ",
        body: `Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.`,
      });
    };

    const someCallback2 = () => {
      setMessage2({
        header: "2021 - 2023 ",
        body: `Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.`,
      });
    };

    const someCallback3 = () => {
      setMessage3({
        header: "2023 - 2024",
        body: `Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.`,
      });
      // fireConfetti();
    };

    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
    }, []);

    return (
      <div className={`${className} wrapper`}>
        {}
        <div id="timeline1" ref={timeline1} className="timeline" />
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            1
          </div>
          <div className="message odd flex flex-col gap-2 text-wrap w-max">
            <div className="font-bold">{message1.header}</div>
            <p className="text-balance">{message1.body}</p>
          </div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            2
          </div>
          <div className="message even flex flex-col gap-2 text-wrap w-max">
            <div className="font-bold">{message2.header}</div>
            <p className="text-balance">{message2.body}</p>
          </div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
            3
          </div>
          <div className="message odd flex flex-col gap-2 text-wrap w-max">
            <div className="font-bold">{message3.header}</div>
            <p className="text-balance">{message3.body}</p>
          </div>
        </div>
      </div>
    );
  };

  const [message, setMessage] = useState("");
  const onCallback = () => {
    alert("callback fired");
  };
  return (
    <>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#53b374"
        hasReverse
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </>
  );
}
