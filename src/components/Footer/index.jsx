import { useTranslation } from "react-i18next";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  let {t} = useTranslation()
  return (
    <>
      <div className="footer">
        <ul className="txt">
          <strong>{t("txt23")}</strong>
          <br />
          <br />
          <li>{t("txt24")}</li>
          <br />
          <li>{t("txt25")}</li>
        </ul>
        <ul className="txt">
          <strong>{t("txt26")}</strong>
          <br />
          <br />
          <li>{t("txt27")}</li>
          <br />
          <li>{t("txt28")}</li>
        </ul>
        <ul className="txt">
          <strong>{t("txt29")}</strong>
          <br />
          <br />
          <li>{t("txt30")}</li>
          <br />
          <li>{t("txt31")}</li>
        </ul>
        <ul className="txt">
          <strong>{t("txt32")}</strong>
          <br />
          <br />
          <div>
            <li><span><FaApple /></span> AppStore</li>
            <li><span><FaGooglePlay /></span> Google Play</li>
          </div>
        </ul>
      </div>
      <div className="end">
        <strong>{t("txt35")}</strong>
        <li>{t("txt36")}</li>
      </div>
    </>
  )
}

export default Footer
