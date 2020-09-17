import React, { useState } from "react";
import Filters from "./Filters";
import LaunchDetails from "./LaunchDetails";
import styles from "../styles/Home.module.css";

export default function Programs({ initLaunch }) {
  const [year, setYear] = useState("");
  const [launch, setLaunch] = useState("");
  const [land, setLand] = useState("");

  const onclickCounter = (id) => {
    setYear(id);
    setLaunch("");
    setLand("");
  };
  const onclickLaunch = (value) => {
    setLaunch(value);
    setYear("");
  };
  const onclickLand = (value) => {
    setLand(value);
    setYear("");
  };
  const dataMethods = {
    onclickCounter,
    onclickLand,
    onclickLaunch,
  };
  const data = {
    year,
    launch,
    land,
  };
  return (
    <>
      <div className={styles.rowType}>
        <div className="col-md-2" style={{ padding: "0px", margin: "0px" }}>
          <Filters data={dataMethods} />
        </div>
        <div className="col-md-10" style={{ padding: "0px", margin: "0px" }}>
          <LaunchDetails data={data} initLaunch={initLaunch} />
        </div>
      </div>
    </>
  );
}
