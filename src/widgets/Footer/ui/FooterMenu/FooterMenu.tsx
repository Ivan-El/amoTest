import React from 'react';
import cls from './FooterMenu.module.css';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Contacts } from 'shared/ui/Contacts/Contacts';

export const FooterMenu = () => {
  return (
    <div className={cls.menu}>
      <div>
        <div className={cls.menuTitle}>О компании</div>
        <ul className={cls.menuList}>
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
      </div>

      <div className={cls.menuWrapper}>
        <div>
          <div className={cls.menuTitle}>Меню</div>
          <ul className={cls.menuList}>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Расчёт стоимости
              </Link>
            </li>

            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Услуги
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Виджеты
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Интеграции
              </Link>
            </li>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Наши клиенты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={cls.menuTitle}>
            <span className={cx('visually-hidden')}>Дополнительно</span>
          </div>
          <ul className={cls.menuList}>
            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Кейсы
              </Link>
            </li>
            <li className={cx(cls.menuItem, cls.gratitude)}>
              <Link className={cls.menuLink} to="/">
                <span className={cls.linkText}>Благодарственные письма</span>
                <span className={cls.linkTextMobile}>
                  Благодарность клиентов
                </span>
              </Link>
            </li>

            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Сертификаты
              </Link>
            </li>

            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Блог на Youtube
              </Link>
            </li>

            <li className={cls.menuItem}>
              <Link className={cls.menuLink} to="/">
                Вопрос / Ответ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={cls.menuTitle}>Контакты</div>
        <Contacts footer />
      </div>
    </div>
  );
};
