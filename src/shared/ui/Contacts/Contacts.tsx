import React from 'react';
import { Link } from 'react-router-dom';
import cls from './Contacts.module.css';
import telegramIcon from 'shared/assets/icons/telegram.svg';
import viberIcon from 'shared/assets/icons/viber.svg';
import whatsappIcon from 'shared/assets/icons/whatsapp.svg';

export const Contacts = () => {
  return (
    <div className={cls.contacts}>
      <Link className={cls.tel} to="/">
        +7 555 555-55-55
      </Link>
      <ul className={cls.social}>
        <li className={cls.socialItem}>
          <Link className={cls.socialLink} to="/">
            <img src={telegramIcon} alt="icon-telegram" />
          </Link>
        </li>
        <li className={cls.socialItem}>
          <Link className={cls.socialLink} to="/">
            <img src={viberIcon} alt="icon-viber" />
          </Link>
        </li>
        <li className={cls.socialItem}>
          <Link className={cls.socialLink} to="/">
            <img src={whatsappIcon} alt="icon-whatsapp" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
