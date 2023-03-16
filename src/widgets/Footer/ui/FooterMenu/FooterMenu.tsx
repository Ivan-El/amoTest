import React from 'react';
import cls from './FooterMenu.module.css';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Contacts } from 'shared/ui/Contacts/Contacts';


export const FooterMenu = () => {
    return (
        <div className={cls.menu}>
          <ul className={cls.menuList}>
            <li className={cls.menuItem}>
              <span className={cls.menuTitle}>О компании</span>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Партнёрская программа
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Вакансии
              </Link>
            </li>
          </ul>
          <ul className={cx(cls.menuList, cls.menuListMenu)}>
            <li className={cx(cls.menuItem, cls.menuItemTitle)}>
              <span className={cls.menuTitle}>Меню</span>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Расчёт стоимости
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Кейсы
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Услуги
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Благодарственные письма
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Виджеты
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Сертификаты
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Интеграции
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Блог на Youtube
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Наши клиенты
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Вопрос / Ответ
              </Link>
            </li>
          </ul>
          <div>
            <span className={cls.menuTitle}>Контакты</span>
            <Contacts footer />
          </div>
        </div>
    );
};