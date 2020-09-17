import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Filters({
  data: { onclickCounter, onclickLand, onclickLaunch },
}) {
  const [counter] = useState([
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ]);

  const buttons = ["True", "False"];
  return (
    <div className={styles.filters}>
      <h5>Filters</h5>
      <p className={styles.filterInfo}>Launch Year</p>
      <hr className={styles.line} />
      <div className={styles.rowButton}>
        {counter.map((item) => (
          <button
            type="button"
            className="btn btn-success col-6"
            key={item}
            onClick={() => onclickCounter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className={styles.launchLand}>Successful Launch</p>
      <hr className={styles.line} />
      <div className={styles.rowButton}>
        {buttons.map((item) => (
          <button
            type="button"
            className="btn btn-success col-6"
            key={item}
            onClick={() => onclickLaunch(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className={styles.launchLand}>Successful Landing</p>
      <hr className={styles.line} />
      <div className={styles.rowButton}>
        {buttons.map((item) => (
          <button
            type="button"
            className="btn btn-success col-3"
            key={item}
            onClick={() => onclickLand(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
