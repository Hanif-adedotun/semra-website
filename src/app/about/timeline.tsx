"use client"
import React, { useEffect, useRef } from "react";
import styles from "./timeline.module.css";

interface TimelineItem {
  year: string;
  content: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(
      `.${styles.timelineItem}`
    );
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.timeline} ref={timelineRef}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineLine}></div>
          <div className={styles.timelineIcon}></div>
          <div className={styles.timelineContent}>
            <h3 className="font-bold">{item.year}</h3>
            <p className="text-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
