import { memo } from 'react';
import cx from 'classnames';
import cls from './Navbar.module.css';
import { Logo } from 'shared/ui/Logo/Logo';
import { Contacts } from 'shared/ui/Contacts/Contacts';

import { MainNav } from '../MainNav/MainNav';

export const Navbar = memo(() => {
  return (
    <header className={cls.header}>
      <div className={cx(cls.container, 'container')}>
        <Logo />
        <MainNav/>
        <Contacts />
      </div>
    </header>
  );
});
