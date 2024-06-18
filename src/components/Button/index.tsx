import './index.scss';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * A simple button component
 *
 * @param {ButtonProps} props
 * @param {string} props.className Additional className to use
 * @param {JSX} props.children  JSX Element(s) passed inside the component
 * @param {Function} props.onClick A function that triggers on click
 */
const Button = ({ className = '', children, onClick }: ButtonProps) => (
  <button onClick={onClick} className={`${className} button`}>
    {children}
  </button>
);

export default Button;
