import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import "../../i18n"
import { useEffect, useState } from "react";


const Hero = () => {
  let {t, i18n} = useTranslation()
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "uz")
  useEffect(() => {
    i18n.changeLanguage(lang)
  })
  return (
    <>
      <div className="hero">
        <ul className="hero_items">
          <ul className="hero_item">
            <li className="item0"><CiLocationOn /></li>
            <li className="item">{t("country")}:</li>
            <li className="item"><a href="https://maps.app.goo.gl/r7tpx7RRWaJoEqi69">{t("tashkent")}</a></li>
          </ul>
          <ul className="hero_item">
            <li className="item">{t("Pickup_points")}</li>
          </ul>
        </ul>
        <ul className="hero_items">
          <ul className="hero_item">
            <li className="item1">{t("txt1")}</li>
          </ul>
        </ul>
        <ul className="hero_items">
          <ul className="hero_item">
            <li className="item2">{t("txt2")}</li>
          </ul>
          <ul className="hero_item">
            <li className="item">{t("txt3")}</li>
          </ul>
          <ul className="hero_item">
            <li className="item">{t("txt4")}</li>
          </ul>
          <ul className="hero_item">
            <select value={lang} onChange={e => setLang(e.target.value)}>
              <option value="ru">Русский</option>
              <option value="uz">Ozbekcha</option>
            </select>
          </ul>
        </ul>
      </div>
    </>
  )
}

export default Hero
