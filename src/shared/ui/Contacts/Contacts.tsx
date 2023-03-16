import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './Contacts.module.css';
import telegramIcon from 'shared/assets/icons/telegram.svg';
import viberIcon from 'shared/assets/icons/viber.svg';
import whatsappIcon from 'shared/assets/icons/whatsapp.svg';
import cx  from 'classnames';

interface ContactsProps {
  footer?: boolean;
}

export const Contacts = memo((props: ContactsProps) => {
  const { footer = false } = props;

  return (
    <div className={cx(cls.contacts, {[cls.footer]: footer})}>
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
      {footer && (
        <span className={cls.menuAddress}>
          Москва, Путевой проезд 3с1, к 902
        </span>
      )}
    </div>
  );
});
