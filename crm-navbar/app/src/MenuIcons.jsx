import React from "react";

export const MainLogo = () => {
  return (
    <div>
      <svg
        width="44"
        height="52"
        viewBox="0 0 44 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_72_4630)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.5564 6.43143C33.4305 2.31339 27.8346 0 21.9998 0C16.165 0.000119094 10.5694 2.31384 6.44363 6.43186C2.31788 10.5499 0 16.1351 0 21.9588C0 32.6116 9.14257 40.6043 17.1425 47.598C18.8677 49.1063 20.5398 50.568 22.0556 52C23.5516 50.5888 25.1948 49.1507 26.888 47.6687C34.8856 40.6692 44 32.6922 44 21.9588C44 16.135 41.6822 10.5495 37.5564 6.43143ZM7.13782 31.7784C5.17364 28.853 4.12509 25.4137 4.125 21.8953C4.125 17.1772 6.0083 12.6522 9.36049 9.3159C12.7127 5.97965 17.2593 4.10534 22.0001 4.10522C25.5354 4.10522 28.9912 5.14871 31.9307 7.10342C34.8702 9.05814 37.1613 11.8364 38.5142 15.087C39.8671 18.3376 40.2213 21.9142 39.5316 25.365C38.8419 28.8158 37.1394 31.9858 34.6396 34.4738C32.1398 36.9617 28.9549 38.6559 25.4875 39.3423C22.0202 40.0288 18.426 39.6764 15.1597 38.33C11.8935 36.9836 9.102 34.7038 7.13782 31.7784Z"
            fill="#5280E9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.9886 9.57886C18.434 14.275 13.0625 20.8964 13.0625 24.652C13.0624 27.0009 14.0002 29.2541 15.6703 30.9175C17.3404 32.581 19.6065 33.5192 21.9721 33.5262H22.0001C23.1738 33.5263 24.3359 33.2968 25.4203 32.8508C26.5046 32.4049 27.49 31.7515 28.3199 30.9274C29.1498 30.1034 29.8082 29.1251 30.2573 28.0484C30.7065 26.9717 30.9376 25.8174 30.9375 24.652C30.9379 20.8854 25.5882 14.3219 21.9886 9.57886Z"
            fill="#5280E9"
          />
        </g>
        <defs>
          <clipPath id="clip0_72_4630">
            <rect width="44" height="52" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const Orders = ({ note }) => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.4375 18.75C23.4375 23.9279 20.1779 27.1875 15 27.1875C9.82207 27.1875 6.5625 23.9279 6.5625 18.75C6.5625 13.1936 12.6111 5.69239 14.4662 3.52266C14.5322 3.44557 14.6141 3.38369 14.7063 3.34126C14.7985 3.29883 14.8988 3.27686 15.0003 3.27686C15.1018 3.27686 15.2021 3.29883 15.2943 3.34126C15.3865 3.38369 15.4684 3.44557 15.5344 3.52266C17.3889 5.69239 23.4375 13.1936 23.4375 18.75Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M20.1562 19.2188C20.1562 20.3376 19.7118 21.4107 18.9206 22.2019C18.1294 22.993 17.0564 23.4375 15.9375 23.4375"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Уведомления ниже */}
        {note && (
          <>
            <rect
              x="15.5"
              y="3.5"
              width="14"
              height="14"
              rx="7"
              fill="#FF3257"
            />
            <path
              d="M23.4056 7.9V13.5H22.1096V8.94H20.9896V7.9H23.4056Z"
              fill="white"
            />
            <rect
              x="15.5"
              y="3.5"
              width="14"
              height="14"
              rx="7"
              stroke="white"
            />
          </>
        )}
        {/* Конец уведомлений */}
      </svg>
    </div>
  );
};

export const PathLists = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.375 12.9639V24.375C24.375 25.1209 24.0787 25.8363 23.5512 26.3637C23.0238 26.8912 22.3084 27.1875 21.5625 27.1875H8.4375C7.69158 27.1875 6.97621 26.8912 6.44876 26.3637C5.92132 25.8363 5.625 25.1209 5.625 24.375V5.625C5.625 4.87908 5.92132 4.16371 6.44876 3.63626C6.97621 3.10882 7.69158 2.8125 8.4375 2.8125H14.2236C14.7207 2.81258 15.1975 3.01005 15.549 3.36152L23.826 11.6385C24.1774 11.99 24.3749 12.4668 24.375 12.9639Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M15 3.28125V10.3125C15 10.8098 15.1975 11.2867 15.5492 11.6383C15.9008 11.99 16.3777 12.1875 16.875 12.1875H23.9062M10.3125 16.875H19.6875M10.3125 21.5625H19.6875"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Clients = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5548 9.84375C23.3832 12.2268 21.6154 14.0625 19.6876 14.0625C17.7599 14.0625 15.9892 12.2273 15.8205 9.84375C15.6447 7.36465 17.3656 5.625 19.6876 5.625C22.0097 5.625 23.7306 7.40977 23.5548 9.84375Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.6873 17.8125C15.8687 17.8125 12.1966 19.7092 11.2767 23.4029C11.1548 23.8916 11.4613 24.375 11.9634 24.375H27.4117C27.9138 24.375 28.2185 23.8916 28.0984 23.4029C27.1785 19.65 23.5064 17.8125 19.6873 17.8125Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M11.7187 10.8949C11.5816 12.798 10.1531 14.2969 8.61323 14.2969C7.07339 14.2969 5.64253 12.7986 5.50776 10.8949C5.36772 8.91504 6.75815 7.5 8.61323 7.5C10.4683 7.5 11.8587 8.95137 11.7187 10.8949Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0699 17.9297C11.0123 17.4451 9.84745 17.2588 8.61288 17.2588C5.566 17.2588 2.63046 18.7734 1.8951 21.7236C1.79842 22.1139 2.04335 22.5 2.44413 22.5H9.02303"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const Drivers = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5219 13.7461C27.0924 13.176 25.4969 12.7834 24.8219 11.7574C24.1469 10.7314 23.5944 8.50957 21.8764 7.65586C20.1584 6.80215 16.8749 6.5625 14.9999 6.5625C13.1249 6.5625 9.8436 6.79688 8.12329 7.6541C6.40298 8.51133 5.85278 10.7314 5.17778 11.7557C4.50278 12.7799 2.90728 13.176 2.47778 13.7461C2.04829 14.3162 1.74595 17.9203 1.92993 19.6875C2.11392 21.4547 2.45727 22.5 2.45727 22.5H7.49634C8.32134 22.5 8.5897 22.19 10.2772 22.0312C12.1288 21.8555 13.9452 21.7969 14.9999 21.7969C16.0545 21.7969 17.9295 21.8555 19.7799 22.0312C21.4674 22.1912 21.7446 22.5 22.5608 22.5H27.5413C27.5413 22.5 27.8846 21.4547 28.0686 19.6875C28.2526 17.9203 27.9491 14.3162 27.5219 13.7461ZM23.4374 22.5H26.7186V23.4375H23.4374V22.5ZM3.2811 22.5H6.56235V23.4375H3.2811V22.5Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3558 18.1148C21.0095 17.7146 19.881 17.3806 18.3869 17.1568C16.8927 16.933 16.3478 16.875 15.0119 16.875C13.6759 16.875 13.0683 16.9711 11.6363 17.1568C10.2043 17.3425 9.12906 17.673 8.66792 18.1148C7.97593 18.7851 8.9896 19.5375 9.78531 19.6289C10.5564 19.7168 12.098 19.6845 15.0183 19.6845C17.9386 19.6845 19.4802 19.7168 20.2513 19.6289C21.0459 19.5322 21.9869 18.832 21.3558 18.1148ZM25.2875 14.2412C25.2842 14.1946 25.2638 14.151 25.2303 14.1185C25.1968 14.0861 25.1524 14.0671 25.1058 14.0654C24.4138 14.0408 23.7113 14.09 22.465 14.4574C21.8292 14.643 21.2321 14.9419 20.7025 15.3398C20.5689 15.4441 20.6164 15.7259 20.7839 15.7558C21.8112 15.8763 22.8446 15.937 23.8789 15.9375C24.4994 15.9375 25.1398 15.7617 25.2587 15.2086C25.3194 14.8896 25.3291 14.5631 25.2875 14.2412ZM4.71285 14.2412C4.71613 14.1946 4.73649 14.151 4.77002 14.1185C4.80354 14.0861 4.84787 14.0671 4.89449 14.0654C5.58648 14.0408 6.28902 14.09 7.53531 14.4574C8.17114 14.643 8.76823 14.9419 9.29781 15.3398C9.4314 15.4441 9.38394 15.7259 9.21636 15.7558C8.18911 15.8763 7.15573 15.937 6.12144 15.9375C5.50093 15.9375 4.8605 15.7617 4.74156 15.2086C4.68091 14.8896 4.67122 14.5631 4.71285 14.2412Z"
          fill="#507DE3"
        />
        <path
          d="M25.3125 11.25H26.25M3.75 11.25H4.6875M4.57031 12.3633C4.57031 12.3633 7.28613 11.6602 15 11.6602C22.7139 11.6602 25.4297 12.3633 25.4297 12.3633"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Chat = ({ note }) => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.12642 22.2656C5.19615 22.009 5.04205 21.6521 4.89498 21.3949C4.84919 21.3182 4.79951 21.2439 4.74615 21.1723C3.48478 19.2593 2.81248 17.0183 2.81256 14.727C2.79205 8.1498 8.24596 2.8125 14.9901 2.8125C20.8717 2.8125 25.7813 6.88711 26.9286 12.2959C27.1005 13.0978 27.1873 13.9156 27.1876 14.7357C27.1876 21.3223 21.944 26.7434 15.1999 26.7434C14.1276 26.7434 12.6803 26.4738 11.8911 26.2529C11.1018 26.032 10.3137 25.7391 10.1104 25.6605C9.90247 25.5806 9.68162 25.5395 9.45885 25.5393C9.21552 25.5383 8.97452 25.5868 8.75045 25.6816L4.77603 27.116C4.68896 27.1535 4.5967 27.1776 4.5024 27.1875C4.42799 27.1873 4.35435 27.1723 4.28577 27.1434C4.21719 27.1145 4.15502 27.0723 4.10287 27.0192C4.05071 26.9662 4.00961 26.9032 3.98194 26.8342C3.95426 26.7651 3.94057 26.6912 3.94166 26.6168C3.94655 26.5515 3.95833 26.4869 3.97682 26.424L5.12642 22.2656Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        {/* Уведомления ниже */}
        {note && (
          <>
            <rect
              x="15.5"
              y="2.5"
              width="14"
              height="14"
              rx="7"
              fill="#FF3257"
            />
            <path
              d="M23.4056 6.9V12.5H22.1096V7.94H20.9896V6.9H23.4056Z"
              fill="white"
            />
            <rect
              x="15.5"
              y="2.5"
              width="14"
              height="14"
              rx="7"
              stroke="white"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export const Feedback = ({ note }) => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.875 10.0553L15.6369 5.00219C15.4388 4.90447 15.2209 4.85364 15 4.85364C14.7791 4.85364 14.5612 4.90447 14.3631 5.00219L4.125 10.0553C3.73251 10.2476 3.40161 10.5459 3.16968 10.9163C2.93775 11.2868 2.81403 11.7147 2.8125 12.1518V22.9688C2.8125 24.2631 3.87539 25.3125 5.18672 25.3125H24.8156C26.127 25.3125 27.1898 24.2631 27.1898 22.9688V12.1518C27.1881 11.7145 27.064 11.2864 26.8317 10.9159C26.5993 10.5454 26.2679 10.2473 25.875 10.0553Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.2812 21.5625L15.7074 15.6715C15.4606 15.4795 15.1568 15.3752 14.844 15.3752C14.5313 15.3752 14.2275 15.4795 13.9807 15.6715L6.40625 21.5625M18.125 17.2852L26.0938 11.25M3.59375 11.25L11.7383 17.4023"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Уведомления ниже */}
        {note && (
          <>
            <rect
              x="15.5"
              y="4.5"
              width="14"
              height="14"
              rx="7"
              fill="#FF3257"
            />
            <path
              d="M23.4056 8.9V14.5H22.1096V9.94H20.9896V8.9H23.4056Z"
              fill="white"
            />
            <rect
              x="15.5"
              y="4.5"
              width="14"
              height="14"
              rx="7"
              stroke="white"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export const OnlinePay = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.9062 5.625H6.09375C4.28157 5.625 2.8125 7.09407 2.8125 8.90625V21.0938C2.8125 22.9059 4.28157 24.375 6.09375 24.375H23.9062C25.7184 24.375 27.1875 22.9059 27.1875 21.0938V8.90625C27.1875 7.09407 25.7184 5.625 23.9062 5.625Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.8125 11.25H27.1875M7.5 17.5781H10.3125V18.75H7.5V17.5781Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Cashback = () => {
  return (
    <div>
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.98428 12.125V13.65H10.6093V14.75H4.98428V18H3.13428V14.75H0.509277V13.65H3.13428V0.499999H9.68428C11.9343 0.499999 13.6843 1.00833 14.9343 2.025C16.2009 3.025 16.8343 4.45 16.8343 6.3C16.8343 8.16667 16.2009 9.60833 14.9343 10.625C13.6843 11.625 11.9343 12.125 9.68428 12.125H4.98428ZM4.98428 2.1V10.55H9.70928C11.4093 10.55 12.7093 10.1833 13.6093 9.45C14.5259 8.71667 14.9843 7.675 14.9843 6.325C14.9843 4.975 14.5259 3.93333 13.6093 3.2C12.7093 2.46667 11.4093 2.1 9.70928 2.1H4.98428Z"
          fill="#507DE3"
        />
      </svg>
    </div>
  );
};

export const ClientReturn = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 8.55469C18.75 8.55469 20.1773 7.85156 15 7.85156C13.1458 7.85156 11.3332 8.4014 9.79153 9.43153C8.24982 10.4617 7.04821 11.9258 6.33863 13.6389C5.62906 15.352 5.44341 17.237 5.80514 19.0555C6.16688 20.8741 7.05976 22.5446 8.37088 23.8557C9.682 25.1668 11.3525 26.0597 13.171 26.4214C14.9896 26.7832 16.8746 26.5975 18.5877 25.8879C20.3007 25.1784 21.7649 23.9767 22.795 22.435C23.8252 20.8933 24.375 19.0808 24.375 17.2266"
          stroke="#507DE3"
          strokeWidth="1.875"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M15 3.39844L19.6875 8.08594L15 12.7734"
          stroke="#507DE3"
          strokeWidth="1.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Debts = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.6875 8.90625V23.9062C4.68935 24.5273 4.93688 25.1223 5.37602 25.5615C5.81515 26.0006 6.41022 26.2481 7.03125 26.25H22.9688C23.5898 26.2481 24.1848 26.0006 24.624 25.5615C25.0631 25.1223 25.3106 24.5273 25.3125 23.9062V8.90625"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5469 3.75H4.45312C3.54703 3.75 2.8125 4.48453 2.8125 5.39062V6.79688C2.8125 7.70297 3.54703 8.4375 4.45312 8.4375H25.5469C26.453 8.4375 27.1875 7.70297 27.1875 6.79688V5.39062C27.1875 4.48453 26.453 3.75 25.5469 3.75Z"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Logout = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 10.3125V7.96875C18.75 7.34715 18.5031 6.75101 18.0635 6.31147C17.624 5.87193 17.0279 5.625 16.4062 5.625H5.15625C4.53465 5.625 3.93851 5.87193 3.49897 6.31147C3.05943 6.75101 2.8125 7.34715 2.8125 7.96875V22.0312C2.8125 22.6529 3.05943 23.249 3.49897 23.6885C3.93851 24.1281 4.53465 24.375 5.15625 24.375H16.4062C17.0279 24.375 17.624 24.1281 18.0635 23.6885C18.5031 23.249 18.75 22.6529 18.75 22.0312V19.6875M22.5 10.3125L27.1875 15M27.1875 15L22.5 19.6875M27.1875 15H11.1914"
          stroke="#507DE3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};