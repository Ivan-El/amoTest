import React, { memo } from 'react';
import cls from './Copyright.module.css';
import { Link } from 'react-router-dom';

export const Copyright = memo(() => {
  return (
    <div className={cls.copy}>
      <p>
        <span>&#169;</span>WELBEX 2022. Все права защищены.
      </p>
      <Link to="/">Политика конфиденциальности</Link>
    </div>
  );
});
