import style from "./index.module.css";
import ThemeToggle from "../ThemeToggle";
import useThemeStore from '../themeStore';

export const Header = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  return (
    <header className={ isDarkMode ? style.headerDark : style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerBrand}>
            <span className={style.headerLogo}>Альфа-Вместе</span>
        </div>
        <nav className={ style.headerNav}>
            <a href="/" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>Главный</a>
            <a href="/history" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>История</a>
            <a href="/payments" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>Платежи</a>
            <a href="/chats" className={ isDarkMode ? style.headerNavLinkDark : style.headerNavLink}>Чаты</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
