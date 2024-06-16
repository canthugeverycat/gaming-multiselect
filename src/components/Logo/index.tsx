import NetworkGif from '../../assets/logo-anim.webp';

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
    <a href={href || '#'} className="logo">
      <img src={NetworkGif} alt="Wargaming Logo" />
    </a>
  );
};

export default Logo;
