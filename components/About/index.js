import React, { Component } from "react";
import styles from "./About.scss";

class PageAbout extends Component {
  render() {
    return (
      <section className={styles["about"]}>
        <div className={styles["decoration"]}>
          <svg viewBox="0 0 1102 199">
            <path
              d="m216.25 573c15.166742 0 29.166603 2.541641 42 7.625 12.833398 5.083359 23.874954 12.124955 33.125 21.125s16.458308 19.541606 21.625 31.625 7.75 25.12493 7.75 39.125-2.583308 27.041606-7.75 39.125-12.374954 22.624955-21.625 31.625-20.291602 16.041641-33.125 21.125c-12.833397 5.083359-26.833258 7.625-42 7.625-15.33341 0-29.374936-2.541641-42.125-7.625s-23.708287-12.124955-32.875-21.125-16.333307-19.541606-21.5-31.625-7.75-25.12493-7.75-39.125 2.583307-27.041606 7.75-39.125 12.333287-22.624955 21.5-31.625 20.124936-16.041641 32.875-21.125 26.79159-7.625 42.125-7.625zm0 47.5c-7.166703 0-13.958301 1.291654-20.375 3.875s-12.041642 6.20831-16.875 10.875-8.666652 10.166635-11.5 16.5-4.25 13.249963-4.25 20.75 1.416652 14.416635 4.25 20.75 6.666642 11.83331 11.5 16.5 10.458301 8.291654 16.875 10.875 13.208297 3.875 20.375 3.875c7.166702 0 13.958301-1.291654 20.375-3.875s12.083309-6.20831 17-10.875 8.791653-10.166635 11.625-16.5 4.25-13.249963 4.25-20.75-1.416653-14.416635-4.25-20.75-6.708309-11.83331-11.625-16.5-10.583301-8.291654-17-10.875-13.208298-3.875-20.375-3.875zm269.5-42.25v147h58.75v41.5h-107.75v-188.5zm191.25 41.5h-58.25v31.5h55v41.5h-55v32.5h58.25v41.5h-107.25v-188.5h107.25zm35.25 147v-188.5h49l90.5 115.25v-115.25h48.75v188.5h-48.75l-90.5-115.25v115.25zm363.5-125.5c-11.33339-13.833402-25.33325-20.75-42-20.75-7.33337 0-14.12497 1.33332-20.375 4s-11.62498 6.291644-16.125 10.875c-4.500022 4.583356-8.041654 10.041635-10.625 16.375s-3.875 13.16663-3.875 20.5c0 7.500037 1.291654 14.416635 3.875 20.75s6.166644 11.83331 10.75 16.5c4.58336 4.66669 9.9583 8.33332 16.125 11s12.8333 4 20 4c15.66674 0 29.74994-6.6666 42.25-20v58l-5 1.75c-7.50004 2.66668-14.49997 4.624994-21 5.875s-12.91664 1.875-19.25 1.875c-13.00007 0-25.45827-2.458309-37.375-7.375-11.916726-4.916691-22.416621-11.833289-31.5-20.75s-16.374973-19.499939-21.875-31.75-8.25-25.624928-8.25-40.125 2.708306-27.791606 8.125-39.875 12.666621-22.499956 21.75-31.25 19.62494-15.583309 31.625-20.5 24.58327-7.375 37.75-7.375c7.50004 0 14.87496.791659 22.125 2.375s14.87496 4.04165 22.875 7.375zm138.25-21.5h-58.25v31.5h55v41.5h-55v32.5h58.25v41.5h-107.25v-188.5h107.25z"
              fill="#fff"
              transform="translate(-112 -573)"
            />
          </svg>
        </div>
      </section>
    );
  }
}
export default PageAbout;
