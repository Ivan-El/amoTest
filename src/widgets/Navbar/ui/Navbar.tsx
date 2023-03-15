import { memo } from 'react';
import cx from 'classnames';
import cls from './Navbar.module.css';
import { Logo } from 'shared/ui/Logo/Logo';
import { Contacts } from 'shared/ui/Contacts/Contacts';
import { Link } from 'react-router-dom';

export const Navbar = memo(() => {
  return (
    <header className={cls.header}>
      <div className={cx(cls.container, 'container')}>
        <Logo />
        <nav className={cls.nav}>
          <ul className={cls.navList}>
            <li className={cls.navItem}>
              <Link className={cls.navLink} to="/">
                Услуги
              </Link>
            </li>
            <li className={cls.navItem}>
              <Link className={cls.navLink} to="/">
                Виджеты
              </Link>
            </li>
            <li className={cls.navItem}>
              <Link className={cls.navLink} to="/">
                Интеграции
              </Link>
            </li>
            <li className={cls.navItem}>
              <Link className={cls.navLink} to="/">
                Кейсы
              </Link>
            </li>
            <li className={cx(cls.navItem, cls.navItemHidden)}>
              <Link className={cls.navLink} to="/">
                Сертификаты
              </Link>
            </li>
          </ul>
        </nav>
        <Contacts />
      </div>
    </header>
  );
});
