import React, { memo } from 'react';
import cls from './Logo.module.css';
import { Link } from 'react-router-dom';
import logoIcon from '../../../shared/assets/icons/logo.svg';

export const Logo = memo(() => {
  return (
    <Link className={cls.logo} to="/">
      <img src={logoIcon} alt="logo" />
    </Link>
  );
});
