import React from "react";
import clsx from "clsx";
import SvgIcon from "@material-ui/core/SvgIcon";

interface Props {
  className?: string;
}

export default function IconWelcome(props: Props): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 98.4 34.9" className={clsx(props.className)}>
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 768h1366V0H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(.35278 0 0 -.35278 -311.1 262.2)">
        <path d="M921.8 688.6l3.3 4.3c5 6.2-.6-15.4-.6-15.5-1.6-6-5.2-18.5-5.5-26.1-.2-2.3-.5-6.6 3-4.5 11.5 6.7 34.5 51 39.2 62.6 2 4.8 10 25-.6 25-1 0-1 1.4 0 1.4 12.5 0 4.3-21 1.9-27-4.7-11.8-27.8-56.4-39.7-63.3-4.6-2.6-7.2.3-7 5.1.3 6.3 3 16.8 5.3 25.6 1.6 6.1 2.9 11.3 3.3 13.5l-1.5-2c-6.5-8.6-28-37.8-35.9-42.3-8.3-5-4.4 7.8-3.2 11.1a1816 1816 0 0115.4 51.5 449 449 0 016.8 26.6c.3 1.9 3.4.6 3.2-.4-1-5.5-4-16.2-7.5-28.7a2717 2717 0 00-16.2-53.7c-.5-1.6-2.7-7.2.9-5.2 8.2 4.8 28.6 33 35.4 42M967.3 684.2c1.1 2.3-2-.3-2.5-.7-1.5-1.3-2.9-3-4-5 3.7 2.2 5.8 4.3 6.5 5.7m-7.8-8c-1.4-2.8-3.3-8-2.4-11 1-3.5 5.2-2 7.5-1 8.5 4 17 11.4 24.2 17.6.7.6 1.7-.4 1-1-7.4-6.3-16-13.8-24.7-17.8-4-1.9-10-3-11 2.8-1 6.6 5.6 19.6 11.6 21 2.4.5 4.1-.8 2.9-3.2-1-1.9-3.8-4.7-9-7.4" />
        <path d="M1045.7 720.1c15.1 16.6 10 26.6-5.8 18.6-21.5-11-44.6-45.8-50-69.9 20.3 16.2 38.2 32 55.8 51.3M1034 681c-8.6-10-19.7-22.5-30.5-29.7-6.8-4.8-16-7.7-18.3 3-5.4 26 29.5 75 51.8 85.9 17.5 8.4 27.6-1.2 9.6-21a501 501 0 00-57.2-52.5c-.7-4-1.1-8.3-.6-11.7.9-5.8 4.5-9 14-2.6a174 174 0 0130 29.5c.7.6 1.8-.2 1.2-1" />
        <path d="M1043 683c-1.4 2.5-3.3 1.3-5.2-.9-3.1-3.5-7.3-11.5-6.8-16.8.3-3.4 3-4.4 8.5-1.7 8.6 4 18 12 25.3 18.2.7.6 1.7-.4 1-1a129 129 0 00-25.7-18.5c-7-3.6-11.8-1.7-12.4 3.8-.5 6 3.7 13.8 8.3 17.7 2.8 2.3 6.2 3.7 8.1-.1.5-.8-.7-1.5-1.1-.6" />
        <path d="M1073.7 677.3c1.2 3.6 1.4 5.6 1 6.4-.5 1-1.8-.2-2.3-.6-3-2.8-4.4-9.6-1-11.3 1 1.7 1.7 3.6 2.3 5.5m-5.2 5c-5-2.9-9-11.8-8.2-17.4.5-3.8 2.5-3.3 4.5-1.9a26 26 0 016 7.6c-4.4 2.2-2.8 9.5-.2 12.6-.8-.2-1.5-.5-2.1-.9m4.2 2.8c1.2.7 2.7.7 3.2-.9.5-1.1.4-3.4-.8-7.3-.7-2-1.4-3.7-2.2-5.4 4.5.1 11 7.3 13.6 10.3.6.7 1.7-.2 1-1-2.9-3.3-10.1-11.3-15.4-10.6-1.4-2.8-4-6.5-6.6-8.3-3.7-2.8-8-2.2-8.5 3.2-.7 6.4 4.3 17.3 10.8 19.3.7.1 3.4.5 3.7-.3.3.4.7.8 1.2 1" />
        <path d="M1087 669.3c1.6 3.6 4 8.2 6.1 12 2.2 3.9 4.2 7 5.4 8 1.6 1.9 3.7 1.4 4.3-1.2.6-3.8-1.2-9.1-2-13-.3-2.5 3.5 5 3.8 5.5 1.2 2.2 4 7.3 5.6 8.8 4.4 4 3.5-2.3 2.6-6.2-.6-2.2-4.4-19.5.8-16 5.2 3.6 11.1 10.2 15.7 14.7.7.6 1.7-.3 1-1-4.3-4.2-11-11.5-15.9-14.8-8.4-5.5-6.6 11.7-5.3 15.2 0 .2 3.1 8.8 1.4 6.3a135 135 0 01-4.7-7.7c-4.4-7.6-8-13-7.8-5.6.3 4 2 9.4 2 13 0 1 0 1.8-1 .6a42.9 42.9 0 01-5-8.2c-2.8-5-6.6-13.3-8.5-16.6-.8-1.3-2.6-3-2.8 0-.3 4.2 4.1 18.8 6.4 22 1.4 2 4.4 1 3.2-.5a52.8 52.8 0 01-5.4-15.3" />
        <path d="M1138 684.2c1.2 2.3-2-.3-2.5-.7-1.5-1.3-2.8-3-4-5 3.7 2.2 5.8 4.3 6.5 5.7m-7.7-8c-1.5-2.8-3.4-8-2.5-11 1-3.5 5.2-2 7.5-1 8.5 4 17 11.4 24.2 17.6.8.6 1.7-.4 1-1-7.4-6.3-16-13.8-24.7-17.8-4-1.9-10-3-11 2.8-1 6.6 5.7 19.6 11.7 21 2.4.5 4-.8 2.8-3.2-1-1.9-3.8-4.7-9-7.4" />
      </g>
    </SvgIcon>
  );
}