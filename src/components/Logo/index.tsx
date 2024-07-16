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
    <a href={href || '#'} className="logo" rel="noreferrer">
      <img src={Anim} alt="Logo" />
    </a>
  );
};

export default Logo;
