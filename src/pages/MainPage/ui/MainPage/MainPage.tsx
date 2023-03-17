import React, { memo } from 'react';
import cls from './MainPage.module.css';
import cx from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import { MainPageTitle } from '../MainPageTitle/MainPageTitle';
import { Advantages } from '../Advantages/Advantages';

export const MainPage = memo(() => {
  return (
    <div className={cls.page}>
      <div className={cx(cls.container, 'container')}>
        <MainPageTitle />
        <div className={cls.right}>
          <Advantages />
          <Button className={cls.btn} variant="primary" type="button">
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  );
});
