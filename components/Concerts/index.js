import React, { Component } from "react";
import styles from "./Concerts.scss";
import axios from "axios";
const convert = require("xml-js");
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import classnames from "classnames";
class PageConcerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
    };
  }

  componentDidMount() {
    const url =
      "https://culter.cz/exp_terminy_xml_kname.php?kname=Dusilenka&token=5879545eb7055268eaaab9c5744d7226";
    axios.get(url).then((res) => {
      const data = JSON.parse(convert.xml2json(res.data));
      this.setState({ concerts: data.elements[0].elements });
    });
  }

  render() {
    let dateParser = (date) => {
      var d = new Date(date);

      var dayPrefix = "";
      var monthPrefix = "";

      var displayDay = d.getDate();
      if (displayDay < 10) {
        dayPrefix = "0";
      }
      var displayMonth = d.getMonth();
      if (displayMonth === 0) {
        monthPrefix = "led";
      }
      if (displayMonth === 1) {
        monthPrefix = "úno";
      }

      if (displayMonth === 2) {
        monthPrefix = "bře";
      }

      if (displayMonth === 3) {
        monthPrefix = "dub";
      }

      if (displayMonth === 4) {
        monthPrefix = "kvě";
      }

      if (displayMonth === 5) {
        monthPrefix = "čer";
      }

      if (displayMonth === 6) {
        monthPrefix = "črv";
      }

      if (displayMonth === 7) {
        monthPrefix = "srp";
      }

      if (displayMonth === 8) {
        monthPrefix = "zář";
      }

      if (displayMonth === 9) {
        monthPrefix = "říj";
      }

      if (displayMonth === 10) {
        monthPrefix = "lis";
      }

      if (displayMonth === 11) {
        monthPrefix = "pro";
      }

      var displayYear = d.getFullYear();
      return (
        <>
          <div className={styles["date__day"]}>{dayPrefix + displayDay}.</div>
          <div className={styles["date__monthyear"]}>
            {monthPrefix + " " + displayYear}
          </div>
        </>
      );
    };

    const concerts =
      this.state.concerts.length > 0 ? (
        this.state.concerts.map((concert, index) => (
          <VisibilitySensor offset={{ top: 82 }} partialVisibility={"top"}>
            {({ isVisible }) => (
              <Fade opposite when={isVisible} duration={150}>
                <div className={styles["concert"]} key={index}>
                  <div className={styles["concert__date"]}>
                    {dateParser(concert.elements[3].elements[0].text)}
                  </div>
                  <div className={styles["concert__description"]}>
                    <h2>
                      {concert.elements[4].elements[0].text +
                        ", " +
                        concert.elements[5].elements[0].text}
                    </h2>
                    <p>
                      {concert.elements[1].elements[0].text +
                        " - " +
                        concert.elements[6].elements[0].text}
                    </p>
                  </div>
                  <div className={styles["concert__tickets"]}>
                    {concert.elements[7].elements[0].text !== "" ? (
                      <a
                        href={concert.elements[7].elements[0].text}
                        target="_blank"
                      >
                        Přejít na Web akce
                      </a>
                    ) : null}
                  </div>
                </div>
              </Fade>
            )}
          </VisibilitySensor>
        ))
      ) : (
        <div className={styles["concerts__loading"]}>Načítání koncertů</div>
      );

    return (
      <div className={classnames(styles["page"], styles["page--concerts"])}>
        <div className={styles["page__container"]}>{concerts}</div>
      </div>
    );
  }
}

export default PageConcerts;
