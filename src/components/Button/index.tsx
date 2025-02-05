import React from 'react';
import cs from 'classnames';
import { Spin } from '@components/Icon';
import styles from './index.module.less';

export type ButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | unknown;
  disabled?: boolean;
  disabledType?: 'default' | 'gray';
  type?: 'default' | 'primary' | 'text';
  loading?: boolean;
  disableClickWhenDisabled?: boolean;
  size?: 'default' | 'large';
};

const classNamePrefix = 'button';

const Button: React.FC<ButtonProps> = ({
  className,
  style,
  children,
  type = 'default',
  disabledType = 'default',
  onClick,
  disabled,
  loading,
  disableClickWhenDisabled = true,
  size = 'default',
}) => {
  const _disabled = (disabled && disableClickWhenDisabled) || loading;
  return (
    <div
      onClick={_disabled ? undefined : onClick}
      role="button"
      tabIndex={0}
      className={cs(
        styles[`${classNamePrefix}`],
        className,
        styles[`${classNamePrefix}-${type}`],
        styles[`${classNamePrefix}-size-${size}`],
        {
          [styles[`${classNamePrefix}-disabled-${disabledType}`]]: _disabled,
        },
      )}
      style={style}
    >
      {loading ? (
        <Spin viewBox="0 0 100 100" size={14} />
      ) : (
        <span className={styles[`${classNamePrefix}-inner`]}>{children}</span>
      )}
    </div>
  );
};

export default Button;
