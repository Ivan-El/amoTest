import { memo } from 'react';
import cx from 'classnames';
import cls from './Navbar.module.css';
import logoIcon from '../../../shared/assets/icons/logo.svg';
import telegramIcon from '../../../shared/assets/icons/telegram.svg';
import viberIcon from '../../../shared/assets/icons/viber.svg';
import whatsappIcon from '../../../shared/assets/icons/whatsapp.svg';

export const Navbar = memo(() => {
    return (
        <header className={cls.header}>
        <div className={cx(cls.container, 'container')}>
            <a className={cls.logo} href="index.html">
                <img src={logoIcon} alt='logo' />
            </a>
          <nav className={cls.nav}>
            <ul className={cls.navList}>
              <li className={cls.navItem}>
                <a className={cls.navLink} href="##">Услуги</a>
                </li>
              <li className={cls.navItem}>
                <a className={cls.navLink} href="##">Виджеты</a>
                </li>
              <li className={cls.navItem}>
                <a className={cls.navLink} href="##">Интеграции</a>
                </li>
              <li className={cls.navItem}>
                <a className={cls.navLink} href="##">Кейсы</a>
                </li>
              <li className={cx(cls.navItem,  cls.navItemHidden)}>
                <a className={cls.navLink} href="##">Сертификаты</a>
                </li>
            </ul>
          </nav>
          <div className={cls.contacts}>
            <a className={cls.tel} href="tel:+75555555555">+7 555 555-55-55</a>
            <ul className={cls.social}>
                <li className={cls.socialItem}>
                    <a className={cls.socialLink} href="##">
                        <img src={telegramIcon} alt='icon-telegram' />
                    </a>
                </li>
                <li className={cls.socialItem}>
                    <a className={cls.socialLink} href="##">
                        <img src={viberIcon} alt='icon-viber' />
                    </a>
                </li>
                <li className={cls.socialItem}>
                    <a className={cls.socialLink} href="##">
                        <img src={whatsappIcon} alt='icon-whatsapp' />
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </header>
    );
});