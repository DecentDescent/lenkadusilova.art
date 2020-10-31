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
                        <svg
                          height="21"
                          viewBox="0 0 21 21"
                          width="21"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m9 1.75c.41421356 0 .75.33578644.75.75 0 .37969577-.28215388.69349096-.64822944.74315338l-.10177056.00684662h-5c-1.19100367 0-2.16565656.92502773-2.24480991 2.09593446l-.00519009.15406554v10c0 1.1910037.92502773 2.1656566 2.09593446 2.2448099l.15406554.0051901h10c1.1910037 0 2.1656566-.9250277 2.2448099-2.0959345l.0051901-.1540655v-5c0-.4142136.3357864-.75.75-.75.3796958 0 .693491.2821539.7431534.6482294l.0068466.1017706v5c0 2.0044002-1.5722246 3.6412828-3.5508282 3.7448024l-.1991718.0051976h-10c-2.00440022 0-3.64128284-1.5722246-3.74480243-3.5508282l-.00519757-.1991718v-10c0-2.00440022 1.57222455-3.64128284 3.55082822-3.74480243l.19917178-.00519757z" />
                          <path d="m17.9696699.46966991c.2928932-.29289321.767767-.29289321 1.0606602 0 .2662665.26626657.2904726.68293025.0726181.97654174l-.0726181.08411844-9 9.00000001c-.29289323.2928932-.76776697.2928932-1.06066019 0-.26626656-.2662666-.29047261-.68293026-.07261815-.97654175l.07261815-.08411844z" />
                          <path d="m18.5.25c.3796958 0 .693491.28215388.7431534.64822944l.0068466.10177056v7c0 .41421356-.3357864.75-.75.75-.3796958 0-.693491-.28215388-.7431534-.64822944l-.0068466-.10177056v-6.25h-6.25c-.3796958 0-.693491-.28215388-.7431534-.64822944l-.0068466-.10177056c0-.37969577.2821539-.69349096.6482294-.74315338l.1017706-.00684662z" />
                        </svg>
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
