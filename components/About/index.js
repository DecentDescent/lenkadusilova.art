import React, { Component, useState } from "react";
import styles from "./About.scss";
import classnames from "classnames";

function PageAbout(props) {
  const [projects, setProjects] = useState(false);

  return (
    <div className={classnames(styles["page"], styles["page--about"])}>
      <div className={styles["about__container"]}>
        <div
          className={classnames({
            [styles["content"]]: true,
            [styles["content--projects"]]: projects,
          })}
        >
          {projects ? (
            <div
              className={styles["content__switch"]}
              onClick={() => setProjects(false)}
            >
              <div className={styles["switch__label"]}>O Lence</div>
            </div>
          ) : null}
          <div className={styles["content__text"]}>
            {projects ? (
              <>
                <h2>Lenka Dusilová Sólo</h2>
                <p>
                  Lenka se stala ikonou odvážného, novátorského popu, která však
                  neztrácí většinové publikum, jež si za léta svého působení
                  vybudovala. V samostatných sólových vystoupeních experimentuje
                  s loop machine, stylovou otevřeností, hráčskou erudicí a
                  rozšířenými nezaměnitelnými vokálními technikami.
                </p>

                <h2>Lenka Dusilová &amp; Kapela</h2>
                <p>
                  V současné době je možné na koncertech vídat Lenku také se
                  svojí novou koncertní kapelou, se kterou v následujících
                  dobách bude Lenka vystupovat mimo svůj sólový projekt.
                </p>

                <p>
                  Na koncertech zazní jak starší repertoár, tak písně z nové
                  desky Řeka, kterou Lenka natočila s producentem Petrem
                  Ostrouchovem, jenž stojí mimo jiné za posledním úspěšným albem
                  Vladimíra Mišíka.
                </p>

                <h2>Monument/Um</h2>
                <p>
                  Lenka se stala ikonou odvážného, novátorského popu, která však
                  neztrácí většinové publikum, jež si za léta svého působení
                  vybudovala. V samostatných sólových vystoupeních experimentuje
                  s loop machine, stylovou otevřeností, hráčskou erudicí a
                  rozšířenými nezaměnitelnými vokálními technikami.
                </p>
              </>
            ) : (
              <>
                <p>
                  Lenka Dusilová, šestinásobná držitelka výročních hudebních cen
                  Anděl, není zvyklá stagnovat a opakovat se. Stal se z ní
                  mimořádný úkaz české hudební scény, z pozice rockové a popové
                  hvězdy putuje k osobnímu vyjádření, jež svobodně přijímá
                  impulzy z nejrůznějších stylů a mimohudebních zážitků.
                </p>
                <p>
                  Narodila se 28. 12. 1975 v Karlových Varech. V šestnácti
                  letech se stala ústřední tváří pražské rockové skupiny
                  Sluníčko. Poté následovala spolupráce s populární Lucií, s
                  Davidem Kollerem pak i v příbuzné kapele Pusa.
                </p>
                <p>
                  Hned první kroky na sólové kariéře jí vynesly titul Zpěvačka
                  roku ve výročních cenách Akademie populární hudby Anděl, poté
                  přišla další úspěšná alba a spolupráce s Čechomorem (m.j. duet
                  Proměny). Třetí sólovou desku Mezi Světy natočila Dusilová v
                  San Francisku s americkými renomovanými hudebníky a
                  producentem Benem Yonasem. Cen Anděl (2005) tentokrát album
                  vyneslo hned několik.
                </p>
                <p>
                  Setkání se zástupci nově se rodící české jazzové komunity
                  (Vertigo Quintet) nebo osudový souzvuk s hudební osobností,
                  klavíristkou Beatou Hlavenkovou (a Clarinet Factory) vyústily
                  ve spolupráci na velmi respektovaném a nevšedním eklektickém
                  albu Eternal Seekers, za něž Lenka získala čtvrtou cenu
                  Akademie populární hudby Anděl v kategorii Zpěvačka roku
                  (2008).
                </p>
                <p>
                  Své čtvrté sóĺové album s názvem Baromantika, natočila
                  zpěvačka ve spolupráci se silným producentským tandemem Beata
                  Hlavenková + Tin Soldiers (producentské duo Patrik
                  Karpentski-Viliam Béreš). Zrodil se unikátní výsledek s
                  vlastním hudebním jazykem, který se pohybuje ve vřelých i
                  chladných akusticko-elektronických krajinách.
                </p>
                <p>
                  I za Baromantiku získala Dusilová (pátou) cenu Akademie
                  populární hudby Anděl (2011), opět jako Zpěvačka roku. Album
                  Baromntika bylo také nominováno mezi nejlepší hudební počiny
                  roku 2012 v nových hudebních Cenách Apollo.
                </p>
                <p>
                  Deska V hodině smrti byla již natočena jako Lenka Dusilová &
                  Baromantika v roce 2014 a opět patřila mezi desky, o kterých
                  se nejvíce mluvilo a bylo nominováno na cenu Anděl ve dvou
                  kategoriích a také na cenu Apollo.
                </p>
                <p>Nové řadové album se jmenuje ŘEKA a vychází 6.11.2020</p>
                <p>
                  Album je plavbou skrze různobarevné hudební imaginace, které
                  jsou z části inspirovány mikropříběhy a nekonkrétními ozvěnami
                  mé rodové linie a mou současnou realitou, ve které se učím víc
                  věřit svým schopnostem a přírodním zákonitostem.
                </p>
                <p>
                  Některé skladby vznikly z empatie a obdivu k síle a umanutosti
                  žen, které se snažily ochraňovat svoje rodiny a naději v toku
                  různorodých událostí, jež nemohly ovlivnit. Nemalá část
                  materiálu vznikla též při putování po ohrožených památkách
                  bývalých Sudet, které jsme navštívili v rámci projektu
                  Monument/um. I jejich příběhy často rezonují s mým tématem.
                </p>
                <p>
                  Album se jmenuje jednoduše ŘEKA, protože metaforicky odráží
                  různorodou dynamiku a vlastnosti systému, který je ovlivňován
                  svým okolím – terénem, počasím a přirozenými i nepřirozenými
                  ději v krajině. Tímto je každá „řeka“ jedinečná.“
                </p>
              </>
            )}
          </div>
          {!projects ? (
            <div
              className={styles["content__switch"]}
              onClick={() => setProjects(true)}
            >
              <div className={styles["switch__label"]}>Projekty</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default PageAbout;
