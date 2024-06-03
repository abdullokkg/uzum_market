import { GrCatalogOption } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "../../i18n"

const Nav = () => {
  let {t} = useTranslation()
  return (
    <>
      <nav className="nav">
        <div className="nav_logo">
          <img src="https://vectorseek.com/wp-content/uploads/2024/04/Uzum-Market-Logo-Vector.svg-.png" alt="" />
        </div>
        <div className="nav_search">
          <button><span><GrCatalogOption /></span> {t("txt6")}</button>
          <div className="input">
            <input type="text" placeholder={t("txt7")}/>
            <button><IoIosSearch /></button>
          </div>
        </div>
        <div className="nav_btn">
          <button><span><CiUser /></span>{t("txt8")}</button>
          <button><span><CiHeart /></span>{t("txt9")}</button>
          <button><span><MdOutlineShoppingBag /></span>{t("txt10")}</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
