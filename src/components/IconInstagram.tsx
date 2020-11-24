import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

interface Props {
  className?: string;
}

export default function IconInstagram(props: Props): JSX.Element {
  const onClick = () => window.open("https://www.instagram.com/zahra_restaurant_terrace/", "_blank");
  return (
    <SvgIcon viewBox="0 0 512 512" className={props.className} onClick={onClick}>
      <path d="M376 91H136a45 45 0 00-45 45v240a45 45 0 0045 45h240a45 45 0 0045-45V136a45 45 0 00-45-45zM256 361a105.1 105.1 0 11105-105c0 57.9-47.1 105-105 105zm105-180a30 30 0 110-60 30 30 0 010 60zm0 0" />
      <path d="M256 181a75 75 0 000 150 75 75 0 000-150zm0 0" />
      <path d="M436 0H76C34.6 0 0 34.6 0 76v360c0 41.4 34.6 76 76 76h360c41.4 0 76-34.6 76-76V76c0-41.4-34.6-76-76-76zm15 376a75 75 0 01-75 75H136a75 75 0 01-75-75V136a75 75 0 0175-75h240a75 75 0 0175 75zm0 0" />
    </SvgIcon>
  );
}

IconInstagram.defaultProps = {
  className: "",
};
