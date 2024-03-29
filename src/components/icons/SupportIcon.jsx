import React from "react";

const SupportIcon = ({ color = "black" }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rtl:ml-2 ltr:mr-2 inline"
    >
      <g clipPath="url(#clip0_55_33)">
        <path
          d="M3.3125 12.25H2.84375C2.34647 12.25 1.86956 12.0525 1.51792 11.7008C1.16629 11.3492 0.96875 10.8723 0.96875 10.375V8.5C0.96875 8.00272 1.16629 7.52581 1.51792 7.17417C1.86956 6.82254 2.34647 6.625 2.84375 6.625H3.3125C3.43682 6.625 3.55605 6.67439 3.64396 6.76229C3.73186 6.8502 3.78125 6.96943 3.78125 7.09375V11.7813C3.78125 11.9056 3.73186 12.0248 3.64396 12.1127C3.55605 12.2006 3.43682 12.25 3.3125 12.25Z"
          stroke={color}
          className={`group-hover:stroke-white`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1563 12.25H12.6875C12.5632 12.25 12.444 12.2006 12.356 12.1127C12.2681 12.0248 12.2188 11.9056 12.2188 11.7813V7.09375C12.2188 6.96943 12.2681 6.8502 12.356 6.76229C12.444 6.67439 12.5632 6.625 12.6875 6.625H13.1563C13.6535 6.625 14.1304 6.82254 14.4821 7.17417C14.8337 7.52581 15.0313 8.00272 15.0313 8.5V10.375C15.0313 10.8723 14.8337 11.3492 14.4821 11.7008C14.1304 12.0525 13.6535 12.25 13.1563 12.25Z"
          stroke={color}
          className={`group-hover:stroke-white`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.84375 6.625C2.84375 5.25748 3.387 3.94597 4.35398 2.97898C5.32097 2.012 6.63248 1.46875 8 1.46875C9.36752 1.46875 10.679 2.012 11.646 2.97898C12.613 3.94597 13.1563 5.25748 13.1563 6.625"
          stroke={color}
          className={`group-hover:stroke-white`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.875 14.5938H11.2813C11.7785 14.5938 12.2554 14.3962 12.6071 14.0446C12.9587 13.6929 13.1563 13.216 13.1563 12.7188V12.25"
          stroke={color}
          className={`group-hover:stroke-white`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.9375 15.5313H8C7.75136 15.5313 7.5129 15.4325 7.33709 15.2567C7.16127 15.0808 7.0625 14.8424 7.0625 14.5938C7.0625 14.3451 7.16127 14.1067 7.33709 13.9308C7.5129 13.755 7.75136 13.6562 8 13.6562H8.9375C9.18614 13.6562 9.4246 13.755 9.60041 13.9308C9.77623 14.1067 9.875 14.3451 9.875 14.5938C9.875 14.8424 9.77623 15.0808 9.60041 15.2567C9.4246 15.4325 9.18614 15.5313 8.9375 15.5313Z"
          stroke={color}
          className={`group-hover:stroke-white`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_55_33">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SupportIcon;
