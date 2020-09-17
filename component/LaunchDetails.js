import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "../styles/Home.module.css";

export default function LaunchDetails({
  data: { year, launch, land },
  initLaunch,
}) {
  const [details, setDetails] = useState();
  useEffect(() => {
    if (year) {
      Axios.get(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}`
      ).then((Res) => setDetails(Res.data));
    } else if (launch === "True") {
      Axios.get(
        "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"
      ).then((Res) => setDetails(Res.data));
    } else if (launch === "True" && land === "True") {
      Axios.get(
        "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
      ).then((Res) => setDetails(Res.data));
    }
  }, [year, launch, land]);
  return (
    <div>
      <div className={styles.rowData}>
        {initLaunch ? (
          details ? (
            details.map((item) => (
              <div className={styles.dataCard}>
                <div className="card">
                  <div className={styles.maxImage}>
                    <img
                      className="card-img-top"
                      src={item.links.mission_patch}
                      alt=""
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      <div className={styles.textColor}>
                        <b>
                          {item.mission_name} #{item.flight_number}
                        </b>
                      </div>
                      <div>
                        <b>Mission Ids:</b>
                        {item.mission_id.length > 0 ? (
                          <li className={styles.textColor}>item.mission_id</li>
                        ) : (
                          <li className={styles.textColor}>
                            {" "}
                            List Mission Ids
                          </li>
                        )}
                      </div>
                      <div>
                        <b>Launch Year:</b>
                        <span className={styles.textColor}>
                          {item.launch_year}
                        </span>
                      </div>
                      <div>
                        <b>Successful Launch:</b>
                        <span className={styles.textColor}>
                          {item.launch_success ? (
                            item.launch_success.toString()
                          ) : (
                            <>launch_success</>
                          )}
                        </span>
                      </div>
                      <div>
                        <b>Successful Landing:</b>
                        <span className={styles.textColor}>
                          {item.rocket.first_stage.cores.land_success ? (
                            item.rocket.first_stage.cores.land_success
                          ) : (
                            <>launch_landing</>
                          )}
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            initLaunch.map((item) => (
              <div className={styles.dataCard}>
                <div className="card">
                  <div className={styles.maxImage}>
                    <img
                      className="card-img-top"
                      src={item.links.mission_patch}
                      alt=""
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      <div className={styles.textColor}>
                        <b>
                          {item.mission_name} #{item.flight_number}
                        </b>
                      </div>
                      <div>
                        <b>Mission Ids:</b>
                        {item.mission_id.length > 0 ? (
                          <li className={styles.textColor}>item.mission_id</li>
                        ) : (
                          <li className={styles.textColor}>
                            {" "}
                            List Mission Ids
                          </li>
                        )}
                      </div>
                      <div>
                        <b>Launch Year:</b>
                        <span className={styles.textColor}>
                          {item.launch_year}
                        </span>
                      </div>
                      <div>
                        <b>Successful Launch:</b>
                        <span className={styles.textColor}>
                          {item.launch_success ? (
                            item.launch_success.toString()
                          ) : (
                            <>launch_success</>
                          )}
                        </span>
                      </div>
                      <div>
                        <b>Successful Landing:</b>
                        <span className={styles.textColor}>
                          {item.rocket.first_stage.cores.land_success ? (
                            item.rocket.first_stage.cores.land_success
                          ) : (
                            <>launch_landing</>
                          )}
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
