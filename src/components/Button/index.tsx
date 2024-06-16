import './index.scss';

type ButtonProps = {
  type?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * A simple button component
 * @param {ButtonProps} props
 */
const Button = ({
  type = 'primary',
  className = '',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button button--${type}`}>
      {children}
    </button>
  );
};

export default Button;
