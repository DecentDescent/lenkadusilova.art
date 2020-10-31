import React, { Component } from "react";
import styles from "./Discography.scss";
import classnames from "classnames";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

class PageDiscography extends Component {
  render() {
    const albums = [
      {
        name: "Řeka",
        author: "Lenka Dusilová",
        label: "Animal Music",
        year: "2020",
        image: "album_reka.jpg",
        shop: [
          {
            vendor: "animal",
            link: "https://animalmusic.cz/album/lenka-dusilova-reka-0",
          },
          {
            vendor: "supraphon",
            link: "https://www.supraphonline.cz/album/591283-reka",
          },
        ],
      },
      {
        name: "V hodině smrti",
        author: "Lenka Dusilová & Baromantika",
        label: "Supraphon a.s.",
        year: "2014",
        image: "album_v-hodine-smrti.jpg",
        shop: [
          {
            vendor: "itunes",
            link:
              "https://itunes.apple.com/cz/album/v-hodine-smrti/id917270767",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/83901-v-hodine-smrti",
          },
        ],
      },
      {
        name: "Live at Café v Lese",
        author: "Lenka Dusilová & Baromantika",
        label: "Supraphon a.s.",
        year: "2013",
        image: "album_live-at-cafe-v-lese.jpg",
        shop: [
          {
            vendor: "itunes",
            link:
              "https://itunes.apple.com/cz/album/live-at-cafe-v-lese/id726651476",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/27932-live-at-cafe-v-lese",
          },
        ],
      },
      {
        name: "Baromantika",
        author: "Lenka Dusilová & Baromantika",
        label: "100PROmotion",
        year: "2011",
        image: "album_baromantika.jpg",
        shop: [
          {
            vendor: "itunes",
            link: "https://itunes.apple.com/cz/album/baromantika/id492579052",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/2654-baromantika",
          },
        ],
      },
      {
        name: "Eternal Seekers",
        author: "Lenka Dusilová s Clarinet Factory a Beatou Hlavenkovou",
        label: "Animal Music",
        year: "2008",
        image: "album_eternal-seekers.jpg",
        shop: [
          {
            vendor: "animal",
            link:
              "https://animalmusic.cz/album/clarinet-factorylenka-dusilovabeata-hlavenkova-eternal-seekers",
          },
          {
            vendor: "itunes",
            link:
              "https://itunes.apple.com/cz/album/eternal-seekers/id522122871",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/2917-eternal-seekers",
          },
        ],
      },
      {
        name: "Mezi světy (US edice)",
        author: "Lenka Dusilová",
        label: "Universal Music",
        year: "2006",
        image: "album_mezi-svety.jpg",
        shop: [
          {
            vendor: "itunes",
            link: "https://itunes.apple.com/cz/album/mezi-svety/id457168248",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/3558-mezi-svety",
          },
        ],
      },
      {
        name: "Mezi světy",
        author: "Lenka Dusilová",
        label: "Universal Music",
        year: "2005",
        image: "album_mezi-svety.jpg",
        shop: [
          {
            vendor: "itunes",
            link: "https://itunes.apple.com/cz/album/mezi-svety/id457168248",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/3558-mezi-svety",
          },
        ],
      },
      {
        name: "UnEarthEd",
        author: "Lenka Dusilová",
        label: "Playing Fields Records",
        year: "2004",
        image: "album_unearthed.jpg",
        shop: [],
      },
      {
        name: "Spatřit světlo světa",
        author: "Lenka Dusilová",
        label: "Universal Music",
        year: "2002",
        image: "album_spatrit-svetlo-sveta.jpg",
        shop: [
          {
            vendor: "itunes",
            link:
              "https://itunes.apple.com/cz/album/spatrit-svetlo-sveta/id321225869",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/3718-spatrit-svetlo-sveta",
          },
        ],
      },
      {
        name: "Lenka Dusilová",
        author: "Lenka Dusilová",
        label: "B&M Music",
        year: "2000",
        image: "album_lenka-dusilova.jpg",
        shop: [
          {
            vendor: "itunes",
            link:
              "https://itunes.apple.com/cz/album/lenka-dusilova/id319778718",
          },
          {
            vendor: "supraphon",
            link: "http://www.supraphonline.cz/album/3744-lenka-dusilova",
          },
        ],
      },
      {
        name: "Pusa",
        author: "Pusa",
        label: "BMG Music Ariola",
        year: "1996",
        image: "album_pusa.jpg",
        shop: [],
      },
      {
        name: "Sluníčko",
        author: "Sluníčko",
        label: "BMG Music Ariola",
        year: "1994",
        image: "album_slunicko.jpg",
        shop: [],
      },
    ];
    const albumsRender =
      albums.length > 0 ? (
        albums.map((album, index) => (
          <VisibilitySensor offset={{ top: 64 }} partialVisibility={"top"}>
            {({ isVisible }) => (
              <Fade opposite when={isVisible} duration={150}>
                <div className={styles["album"]}>
                  <div className={styles["album__cover"]}>
                    <img src={"/static/graphics/albums/" + album.image} />
                  </div>
                  <div className={styles["album__info"]}>
                    <h2>{album.name}</h2>
                    <h4>{album.author}</h4>
                    <div className={styles["info__shop"]}>
                      {album.shop.length > 0
                        ? album.shop.map((vendor) => (
                            <>
                              {vendor.vendor === "supraphon" ? (
                                <a href={vendor.link}>
                                  <svg viewBox="0 0 426.667 426.667">
                                    <path d="m213.333 192c-11.733 0-21.333 9.6-21.333 21.333s9.6 21.333 21.333 21.333 21.333-9.6 21.333-21.333-9.599-21.333-21.333-21.333z" />
                                    <path d="m213.333 0c-117.866 0-213.333 95.467-213.333 213.333s95.467 213.333 213.333 213.333 213.334-95.466 213.334-213.333-95.467-213.333-213.334-213.333zm0 309.333c-53.013 0-96-42.987-96-96s42.987-96 96-96 96 42.987 96 96-42.986 96-96 96z" />
                                  </svg>
                                </a>
                              ) : null}

                              {vendor.vendor === "itunes" ? (
                                <a href={vendor.link}>
                                  <svg viewBox="0 0 512.003 512.003">
                                    <path d="m351.98 0c-27.296 1.888-59.2 19.36-77.792 42.112-16.96 20.64-30.912 51.296-25.472 81.088 29.824.928 60.64-16.96 78.496-40.096 16.704-21.536 29.344-52 24.768-83.104z" />
                                    <path d="m459.852 171.776c-26.208-32.864-63.04-51.936-97.824-51.936-45.92 0-65.344 21.984-97.248 21.984-32.896 0-57.888-21.92-97.6-21.92-39.008 0-80.544 23.84-106.88 64.608-37.024 57.408-30.688 165.344 29.312 257.28 21.472 32.896 50.144 69.888 87.648 70.208 33.376.32 42.784-21.408 88-21.632 45.216-.256 53.792 21.92 87.104 21.568 37.536-.288 67.776-41.28 89.248-74.176 15.392-23.584 21.12-35.456 33.056-62.08-86.816-33.056-100.736-156.512-14.816-203.904z" />
                                  </svg>
                                </a>
                              ) : null}

                              {vendor.vendor === "animal" ? (
                                <a href={vendor.link}>
                                  <svg viewBox="0 0 22 22">
                                    <path d="m9.12719298 22 .30701755-3.5599534h3.19298247l.368421 3.5599534h5.004386l-2.5175439-22h-8.93421049l-2.54824561 22zm3.03947372-7h-2.33333337l.95726497-11h.2393162z" />
                                  </svg>
                                </a>
                              ) : null}
                            </>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </Fade>
            )}
          </VisibilitySensor>
        ))
      ) : (
        <div className={styles["discography__loading"]}>Načítání alb</div>
      );
    return (
      <div className={classnames(styles["page"], styles["page--discography"])}>
        <div className={styles["page__container"]}>
          <div className={styles["albums"]}>{albumsRender}</div>
        </div>
      </div>
    );
  }
}

export default PageDiscography;
