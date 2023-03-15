import React, { memo } from 'react';
import cx from 'classnames';
import cls from './Advantages.module.css';

export const Advantages = memo(() => {
    return (
        <div className={cls.advantages}>
            <p className={cls.advantagesTitle}>
              Вместе с{' '}
              <span className={cls.advantagesTitleGradient}>
                бесплатной <br /> консультацией{' '}
              </span>{' '}
              мы дарим:
            </p>
            <ul className={cx(cls.advantagesList, cls.advantagesListDesktop)}>
              <li className={cls.advantagesItem}>
                <span className={cls.advantagesItemName}>Виджеты</span>
                <span className={cls.advantagesItemText}>
                  30 готовых <br /> решений
                </span>
              </li>
              <li className={cls.advantagesItem}>
                <span className={cls.advantagesItemName}>Dashboard</span>
                <span className={cls.advantagesItemText}>
                  с показателями <br /> вашего бизнеса
                </span>
              </li>
              <li className={cls.advantagesItem}>
                <span className={cls.advantagesItemName}>Skype Аудит</span>
                <span className={cls.advantagesItemText}>
                  отдела продаж <br /> и CRM системы
                </span>
              </li>
              <li className={cls.advantagesItem}>
                <span className={cls.advantagesItemName}>35 дней</span>
                <span className={cls.advantagesItemText}>
                  использования <br /> CRM
                </span>
              </li>
            </ul>
            
            <ul className={cx(cls.advantagesList, cls.advantagesListMobile)}>
              <li className={cls.advantagesItem}>Skype аудит</li>
              <li className={cls.advantagesItem}>30 виджетов</li>
              <li className={cls.advantagesItem}>Dashboard</li>
              <li className={cls.advantagesItem}>Месяц аmoCRM</li>
            </ul>
          </div>
    );
});
