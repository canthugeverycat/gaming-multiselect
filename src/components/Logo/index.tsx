import Anim from '../../assets/anim.webp';

import './index.scss';

type LogoProps = {
  href?: string;
};

/**
 * Animated logo component
 * @param {LogoProps} props
 *
 * @param {string} props.href A URL that the logo click will lead to
 */
const Logo = ({ href }: LogoProps) => {
  return (
    <a href={href || '#'} className="logo" target="_blank" rel="noreferrer">
      <img src={Anim} alt="Wargaming Logo" />
    </a>
  );
};

export default Logo;
