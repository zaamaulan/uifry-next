import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const StarIcon = ({
  className = "text-carnation-400",
  ...props
}: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BellIcon = ({
  className = "text-carnation-400",
  ...props
}: IconProps) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M14 21.4882H10M18 8.48816C18 6.89686 17.3679 5.37074 16.2427 4.24552C15.1174 3.1203 13.5913 2.48816 12 2.48816C10.4087 2.48816 8.8826 3.1203 7.75738 4.24552C6.63216 5.37074 6.00002 6.89686 6.00002 8.48816C6.00002 11.5783 5.22049 13.6941 4.34968 15.0936C3.61515 16.274 3.24788 16.8643 3.26134 17.0289C3.27626 17.2112 3.31488 17.2808 3.46179 17.3897C3.59448 17.4882 4.19261 17.4882 5.38887 17.4882H18.6112C19.8074 17.4882 20.4056 17.4882 20.5382 17.3897C20.6852 17.2808 20.7238 17.2112 20.7387 17.0289C20.7522 16.8643 20.3849 16.274 19.6504 15.0936C18.7795 13.6941 18 11.5783 18 8.48816Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const QuoteIcon = ({
  className = "text-black",
  ...props
}: IconProps) => (
  <svg
    width="36"
    height="28"
    viewBox="0 0 36 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M12.7424 0.878174L14.628 4.35142C13.5694 5.84969 12.577 7.51821 11.6507 9.35699C10.7906 11.1958 10.2944 13.1027 10.162 15.0776L15.6205 16.0992V27.8469H0.436127V19.4703C0.436127 14.635 1.52781 10.7531 3.71118 7.82467C5.96071 4.82814 8.97111 2.51264 12.7424 0.878174ZM32.3927 0.878174L34.2783 4.35142C33.2197 5.84969 32.2273 7.51821 31.301 9.35699C30.4409 11.1958 29.9447 13.1027 29.8124 15.0776L35.2708 16.0992V27.8469H20.0864V19.4703C20.0864 14.635 21.1781 10.7531 23.3615 7.82467C25.611 4.82814 28.6214 2.51264 32.3927 0.878174Z"
      fill="currentColor"
    />
  </svg>
);

export const MailIcon = ({
  className = "text-carnation-400",
  ...props
}: IconProps) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M16.9394 3.70898C18.2804 3.70898 19.5704 4.23898 20.5194 5.18998C21.4694 6.13898 22.0004 7.41898 22.0004 8.75898V16.659C22.0004 19.449 19.7304 21.709 16.9394 21.709H7.06043C4.26943 21.709 2.00043 19.449 2.00043 16.659V8.75898C2.00043 5.96898 4.25943 3.70898 7.06043 3.70898H16.9394ZM18.0704 8.90898C17.8604 8.89798 17.6604 8.96898 17.5094 9.10898L13.0004 12.709C12.4204 13.19 11.5894 13.19 11.0004 12.709L6.50043 9.10898C6.18943 8.87898 5.75943 8.90898 5.50043 9.17898C5.23043 9.44898 5.20043 9.87898 5.42943 10.179L5.56043 10.309L10.1104 13.859C10.6704 14.299 11.3494 14.539 12.0604 14.539C12.7694 14.539 13.4604 14.299 14.0194 13.859L18.5304 10.249L18.6104 10.169C18.8494 9.87898 18.8494 9.45898 18.5994 9.16898C18.4604 9.01998 18.2694 8.92898 18.0704 8.90898Z"
      fill="currentColor"
    />
  </svg>
);

export const TelephoneIcon = ({
  className = "text-carnation-400",
  ...props
}: IconProps) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5317 13.1814C15.5208 17.1693 16.4258 12.5557 18.9656 15.0938C21.4143 17.5417 22.8216 18.0322 19.7192 21.1337C19.3306 21.446 16.8616 25.2032 8.1846 16.5287C-0.493478 7.85298 3.26158 5.38143 3.57397 4.99293C6.68387 1.88283 7.16586 3.29837 9.61449 5.74631C12.1544 8.28548 7.54266 9.1934 11.5317 13.1814Z"
      fill="currentColor"
    />
  </svg>
);

export const EllipseIcon = ({
  className = "text-black",
  ...props
}: IconProps) => (
  <svg
    width="713"
    height="714"
    viewBox="0 0 713 714"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M457.53 256.179C510.382 309.03 543.33 371.744 553.896 430.393C564.462 489.045 552.64 543.574 516.041 580.173C479.442 616.771 424.913 628.594 366.262 618.027C307.613 607.462 244.899 574.513 192.047 521.662C139.195 468.81 106.247 406.096 95.6813 347.447C85.1152 288.796 96.9374 234.266 133.536 197.668C170.135 161.069 224.664 149.247 283.315 159.813C341.964 170.379 404.678 203.327 457.53 256.179Z"
      stroke="currentColor"
      strokeWidth="1.1237"
    />
    <path
      d="M489.241 224.467C542.093 277.319 575.041 340.033 585.607 398.682C596.173 457.334 584.351 511.863 547.752 548.461C511.154 585.06 456.625 596.882 397.973 586.316C339.324 575.751 276.61 542.802 223.758 489.95C170.907 437.099 137.958 374.385 127.393 315.736C116.827 257.084 128.649 202.555 165.247 165.956C201.846 129.358 256.375 117.536 315.027 128.102C373.676 138.667 436.39 171.616 489.241 224.467Z"
      stroke="currentColor"
      strokeWidth="1.1237"
    />
    <path
      d="M520.953 192.756C573.805 245.608 606.753 308.322 617.319 366.971C627.885 425.622 616.063 480.151 579.464 516.75C542.865 553.349 488.336 565.171 429.685 554.605C371.036 544.039 308.322 511.091 255.47 458.239C202.618 405.387 169.67 342.673 159.104 284.024C148.538 225.373 160.36 170.844 196.959 134.245C233.558 97.6463 288.087 85.8241 346.738 96.3902C405.387 106.956 468.101 139.904 520.953 192.756Z"
      stroke="currentColor"
      strokeWidth="1.1237"
    />
  </svg>
);

export const Star02Icon = ({
  className = "text-black",
  ...props
}: IconProps) => (
  <svg
    width="62"
    height="58"
    viewBox="0 0 62 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M31 0L32.5047 29.9289L61.4338 22.1115L33.4347 32.7911L49.8091 57.8885L31 34.56L12.1909 57.8885L28.5653 32.7911L0.566191 22.1115L29.4953 29.9289L31 0Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowRightIcon = ({
  className = "text-black",
  ...props
}: IconProps) => (
  <svg
    width="25"
    height="8"
    viewBox="0 0 25 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
      fill="currentColor"
    />
  </svg>
);

export const PlayCircleIcon = ({
  className = "text-black",
  ...props
}: IconProps) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="14.5" cy="14.5" r="14" stroke="currentColor" />
    <path
      d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);
export const EllipseGradient = ({
  className = "text-black",
  ...props
}: IconProps) => (
  <svg
    width="620"
    height="507"
    viewBox="0 0 620 507"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g filter="url(#filter0_f_266_174)">
      <ellipse cx="292.5" cy="303.55" rx="188.5" ry="99.45" fill="#FDE598" />
    </g>
    <g filter="url(#filter1_f_266_174)">
      <ellipse cx="331.5" cy="203.45" rx="184.6" ry="99.45" fill="#FF5555" />
    </g>
    <defs>
      <filter
        id="filter0_f_266_174"
        x="0.845436"
        y="100.945"
        width="583.309"
        height="405.209"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="51.5773"
          result="effect1_foregroundBlur_266_174"
        />
      </filter>
      <filter
        id="filter1_f_266_174"
        x="43.7451"
        y="0.845436"
        width="575.509"
        height="405.209"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="51.5773"
          result="effect1_foregroundBlur_266_174"
        />
      </filter>
    </defs>
  </svg>
);
