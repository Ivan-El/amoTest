import React from 'react';
import cls from './MainNav.module.css';
import { Link } from 'react-router-dom';

export const MainNav = () => {
  return (
    <nav className={cls.nav}>
      <ul className={cls.navList}>
        <li>
          <Link className={cls.navLink} to="/">
            Услуги
          </Link>
        </li>
        <li>
          <Link className={cls.navLink} to="/">
            Виджеты
          </Link>
        </li>
        <li>
          <Link className={cls.navLink} to="/">
            Интеграции
          </Link>
        </li>
        <li>
          <Link className={cls.navLink} to="/">
            Кейсы
          </Link>
        </li>
        <li className={cls.navItemHidden}>
          <Link className={cls.navLink} to="/">
            Сертификаты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
