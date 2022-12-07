import clsx from "clsx";

type LogoProps = {
  className?: string;
  firstColor?: string;
  secondColor?: string;
};

export function Logo({
  className,
  firstColor = "#FECDD3",
  secondColor = "#FFF1F2",
}: LogoProps) {
  return (
    <svg
      className={clsx(className, "-translate-x-1/2")}
      width="428"
      height="210"
      viewBox="0 0 428 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6348 93.3489L21.5929 74.9458H24.0247L47.1689 48.9625H64.9044L36.4353 80.7994H33.2907L21.6348 93.3489ZM7.79858 113.647V27.4011H22.9765V113.647H7.79858ZM48.2171 113.647L27.2531 84.2105L37.4835 73.4719L66.3719 113.647H48.2171Z"
        fill={firstColor}
      />
      <path
        d="M107.639 48.9625V60.754H69.5689V48.9625H107.639ZM79.0865 98.4105V42.8563C79.0865 38.5047 79.981 34.883 81.7699 31.9913C83.5868 29.0996 86.0186 26.9378 89.0653 25.506C92.1121 24.0742 95.4943 23.3583 99.2119 23.3583C101.839 23.3583 104.173 23.5688 106.214 23.99C108.254 24.4111 109.764 24.7901 110.742 25.127L107.723 36.9184C107.08 36.7219 106.27 36.5254 105.291 36.3289C104.313 36.1043 103.223 35.992 102.021 35.992C99.1979 35.992 97.1993 36.6798 96.0254 38.0555C94.8793 39.4031 94.3063 41.3402 94.3063 43.867V88.0242C85.9739 89.5691 82.7135 92.0697 79.0865 98.4105Z"
        fill={firstColor}
      />
      <path
        d="M154.589 97.5882V48.9625H169.305V59.7433H169.976C171.15 56.0093 173.163 53.1317 176.014 51.1103C178.893 49.0608 182.177 48.0361 185.867 48.0361C186.706 48.0361 187.642 48.0782 188.676 48.1624C189.738 48.2186 190.619 48.3168 191.318 48.4572V62.4806C190.675 62.256 189.654 62.0595 188.257 61.891C186.887 61.6945 185.56 61.5962 184.274 61.5962C181.507 61.5962 179.019 62.1998 176.811 63.4071C174.63 64.5862 172.911 66.2286 171.653 68.3342C170.396 70.4398 169.767 72.8683 169.767 75.6196V97.5882H154.589Z"
        fill={firstColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.526 106.115V113.18H134.704V106.235C130.143 109.935 123.991 109.915 119.526 106.115ZM134.704 90.2633V48.9625H119.526V90.3514C123.931 86.5342 130.073 86.4562 134.704 90.2633ZM120.952 37.3817C122.685 38.9819 124.753 39.7821 127.157 39.7821C129.589 39.7821 131.657 38.9819 133.362 37.3817C135.095 35.7533 135.962 33.8021 135.962 31.5281C135.962 29.2259 135.095 27.2747 133.362 25.6744C131.657 24.0461 129.589 23.2319 127.157 23.2319C124.753 23.2319 122.685 24.0461 120.952 25.6744C119.218 27.2747 118.352 29.2259 118.352 31.5281C118.352 33.8021 119.218 35.7533 120.952 37.3817Z"
        fill={firstColor}
      />
      <path
        d="M107.639 115.668V127.46H69.5689V115.668H107.639ZM79.0865 180.353V109.562C79.0865 105.211 79.981 101.589 81.7699 98.6972C83.5868 95.8055 86.0186 93.6437 89.0653 92.2119C92.1121 90.7801 95.4943 90.0642 99.2119 90.0642C101.839 90.0642 104.173 90.2747 106.214 90.6959C108.254 91.117 109.764 91.496 110.742 91.8329L107.723 103.624C107.08 103.428 106.27 103.231 105.291 103.035C104.313 102.81 103.223 102.698 102.021 102.698C99.1979 102.698 97.1993 103.386 96.0254 104.761C94.8793 106.109 94.3063 108.046 94.3063 110.573V180.353H79.0865Z"
        fill={secondColor}
      />
      <path
        d="M119.526 180.353V115.668H134.704V180.353H119.526ZM127.157 106.488C124.753 106.488 122.685 105.688 120.951 104.088C119.218 102.459 118.352 100.508 118.352 98.234C118.352 95.9318 119.218 93.9806 120.951 92.3803C122.685 90.752 124.753 89.9378 127.157 89.9378C129.589 89.9378 131.657 90.752 133.362 92.3803C135.095 93.9806 135.962 95.9318 135.962 98.234C135.962 100.508 135.095 102.459 133.362 104.088C131.657 105.688 129.589 106.488 127.157 106.488Z"
        fill={secondColor}
      />
      <path
        d="M182.47 115.668V127.46H145.448V115.668H182.47ZM154.588 100.171H169.766V160.897C169.766 162.947 170.074 164.519 170.688 165.614C171.331 166.68 172.17 167.41 173.204 167.803C174.238 168.197 175.384 168.393 176.642 168.393C177.593 168.393 178.459 168.323 179.242 168.182C180.052 168.042 180.667 167.916 181.087 167.803L183.644 179.721C182.834 180.002 181.674 180.311 180.164 180.648C178.683 180.985 176.866 181.181 174.714 181.237C170.912 181.35 167.488 180.774 164.441 179.511C161.394 178.219 158.977 176.226 157.188 173.531C155.427 170.836 154.56 167.467 154.588 163.424V100.171Z"
        fill={secondColor}
      />
      <path
        d="M222.564 181.616C216.275 181.616 210.824 180.227 206.212 177.447C201.6 174.668 198.022 170.779 195.478 165.782C192.963 160.785 191.705 154.945 191.705 148.263C191.705 141.582 192.963 135.728 195.478 130.703C198.022 125.677 201.6 121.775 206.212 118.995C210.824 116.216 216.275 114.826 222.564 114.826C228.853 114.826 234.304 116.216 238.916 118.995C243.528 121.775 247.092 125.677 249.607 130.703C252.151 135.728 253.423 141.582 253.423 148.263C253.423 154.945 252.151 160.785 249.607 165.782C247.092 170.779 243.528 174.668 238.916 177.447C234.304 180.227 228.853 181.616 222.564 181.616ZM222.648 169.404C226.058 169.404 228.909 168.463 231.201 166.582C233.493 164.673 235.198 162.118 236.316 158.918C237.462 155.717 238.035 152.152 238.035 148.221C238.035 144.263 237.462 140.683 236.316 137.483C235.198 134.254 233.493 131.685 231.201 129.776C228.909 127.867 226.058 126.912 222.648 126.912C219.154 126.912 216.247 127.867 213.927 129.776C211.635 131.685 209.916 134.254 208.77 137.483C207.651 140.683 207.092 144.263 207.092 148.221C207.092 152.152 207.651 155.717 208.77 158.918C209.916 162.118 211.635 164.673 213.927 166.582C216.247 168.463 219.154 169.404 222.648 169.404Z"
        fill={secondColor}
      />
      <path
        d="M307.352 153.148V115.668H322.53V180.353H307.814V168.856H307.143C305.689 172.478 303.299 175.44 299.973 177.742C296.675 180.044 292.608 181.195 287.772 181.195C283.551 181.195 279.82 180.255 276.577 178.374C273.363 176.465 270.847 173.699 269.03 170.078C267.214 166.428 266.305 162.02 266.305 156.854V115.668H281.483V154.496C281.483 158.595 282.601 161.852 284.837 164.266C287.073 166.68 290.008 167.888 293.642 167.888C295.878 167.888 298.044 167.34 300.141 166.245C302.237 165.15 303.956 163.522 305.298 161.36C306.668 159.17 307.352 156.433 307.352 153.148Z"
        fill={secondColor}
      />
      <path
        d="M389.038 132.766L375.202 134.282C374.811 132.878 374.126 131.559 373.148 130.324C372.197 129.088 370.912 128.092 369.291 127.334C367.669 126.576 365.685 126.197 363.337 126.197C360.178 126.197 357.523 126.884 355.37 128.26C353.246 129.636 352.198 131.418 352.226 133.608C352.198 135.489 352.883 137.019 354.28 138.199C355.706 139.378 358.054 140.346 361.324 141.104L372.309 143.463C378.403 144.782 382.931 146.874 385.894 149.737C388.885 152.601 390.394 156.349 390.422 160.981C390.394 165.052 389.206 168.646 386.858 171.762C384.538 174.85 381.31 177.265 377.173 179.005C373.036 180.746 368.284 181.616 362.917 181.616C355.035 181.616 348.69 179.96 343.882 176.647C339.074 173.306 336.209 168.66 335.287 162.708L350.087 161.276C350.758 164.196 352.184 166.4 354.364 167.888C356.544 169.376 359.382 170.12 362.876 170.12C366.481 170.12 369.374 169.376 371.555 167.888C373.763 166.4 374.867 164.561 374.867 162.371C374.867 160.518 374.154 158.988 372.729 157.781C371.331 156.574 369.151 155.647 366.188 155.001L355.203 152.685C349.025 151.394 344.455 149.218 341.492 146.158C338.529 143.07 337.062 139.167 337.09 134.451C337.062 130.464 338.138 127.011 340.318 124.091C342.527 121.143 345.587 118.869 349.501 117.269C353.442 115.64 357.984 114.826 363.127 114.826C370.674 114.826 376.614 116.441 380.946 119.669C385.307 122.898 388.004 127.263 389.038 132.766Z"
        fill={secondColor}
      />
      <path
        d="M402.938 180.353V115.668H418.116V180.353H402.938ZM410.569 106.488C408.165 106.488 406.096 105.688 404.363 104.088C402.63 102.459 401.764 100.508 401.764 98.234C401.764 95.9318 402.63 93.9806 404.363 92.3803C406.096 90.752 408.165 89.9378 410.569 89.9378C413 89.9378 415.069 90.752 416.774 92.3803C418.507 93.9806 419.373 95.9318 419.373 98.234C419.373 100.508 418.507 102.459 416.774 104.088C415.069 105.688 413 106.488 410.569 106.488Z"
        fill={secondColor}
      />
    </svg>
  );
}
