import style from "./index.module.css";
import ThemeToggle from "../ThemeToggle";
import useThemeStore from '../themeStore';
import useStore from "../../pages/store";


export const Header = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  const { isMobile } = useStore();

  // console.log(isMobile)
  return (
    <header className={ isDarkMode ? style.headerDark : style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerBrand}>
            <span className={style.headerLogo}>Альфа-Вместе</span>
        </div>
          { !isMobile &&
            <nav className={ style.headerNav}>
              <a href="https://alfabank.ru" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>Главный</a>
              <a href="https://private.auth.alfabank.ru/passport/cerberus-mini-blue/dashboard-blue/username?response_type=code&client_id=newclick-web&scope=openid%20newclick-web&acr_values=username&non_authorized_user=true" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>История</a>
              <a href="https://private.auth.alfabank.ru/passport/cerberus-mini-blue/dashboard-blue/username?response_type=code&client_id=newclick-web&scope=openid%20newclick-web&acr_values=username&non_authorized_user=true" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>Платежи</a>
              <a href="https://private.auth.alfabank.ru/passport/cerberus-mini-blue/dashboard-blue/username?response_type=code&client_id=newclick-web&scope=openid%20newclick-web&acr_values=username&non_authorized_user=true" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>Чаты</a>
          </nav>}
        <ThemeToggle />
      </div>
    </header>
  );
};
