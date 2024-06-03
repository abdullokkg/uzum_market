import { useTranslation } from "react-i18next"
import "../../i18n"

const Aside = () => {
    let {t} = useTranslation()
    return (
        <>
            <div className="aside">
                <ul>
                    <li>{t("txt11")}</li>
                    <li>{t("txt12")}</li>
                    <li>{t("txt13")}</li>
                    <li>{t("txt14")}</li>
                    <li className="txt">{t("txt15")}</li>
                    <li className="txt">{t("txt16")}</li>
                    <li className="txt">{t("txt17")}</li>
                    <li className="txt">{t("txt18")}</li>
                    <li className="txt">{t("txt19")}</li>
                    <li className="txt">{t("txt20")}</li>
                    <li className="txt">{t("txt21")}</li>
                    <select>
                        <option value="ru">{t("txt22")}</option>
                    </select>
                </ul>
            </div>
        </>
    )
}

export default Aside
