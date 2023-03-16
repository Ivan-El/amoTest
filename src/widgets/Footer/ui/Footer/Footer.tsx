import React, { memo } from 'react';
import cls from './Footer.module.css';
import cx from 'classnames';
import { Copyright } from '../Copyright/Copyright';
import { FooterMenu } from '../FooterMenu/FooterMenu';

export const Footer = memo(() => {
  return (
    <footer className={cls.footer}>
      <div className={cx(cls.container, 'container')}>
        <FooterMenu />
        <Copyright />
      </div>
    </footer>
  );
});
