import React, { memo } from 'react';
import cls from './MainPageTitle.module.css';

export const MainPageTitle = memo(() => {
  return (
    <div>
      <h1 className={cls.title}>
        Зарабатывайте <br /> больше <br />
        <span className={cls.titleGradient}>с WELBEX</span>
      </h1>
      <p className={cls.subtitle}>
        Развиваем и контролируем <br /> продажи за вас
      </p>
    </div>
  );
});
