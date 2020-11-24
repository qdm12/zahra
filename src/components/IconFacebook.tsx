import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

interface Props {
  className?: string;
}

export default function IconFacebook(props: Props): JSX.Element {
  const onClick = () => window.open("https://www.facebook.com/zahrarestaurantbucharest/", "_blank");
  return (
    <SvgIcon viewBox="0 0 167.7 167.7" className={props.className} onClick={onClick}>
      <path d="M83.8.3a83.8 83.8 0 00-14 166.4v-65H49.6V78.2h20.2V61c0-20 12.3-31 30.2-31 8.5 0 15.9.7 18 1v20.9h-12.4C96 51.9 94 56.5 94 63.3v15h23.2l-3 23.4H94v65.6A83.8 83.8 0 0083.8.3z" />
    </SvgIcon>
  );
}

IconFacebook.defaultProps = {
  className: "",
};
