import { FC, memo } from 'react';
import cx from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.css';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cx(cls.PageError, className)}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
});
