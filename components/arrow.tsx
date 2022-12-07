type ArrowProps = {
  className?: string;
};

export function Arrow({ className }: ArrowProps) {
  return (
    <svg
      className={className}
      width="24"
      height="102"
      viewBox="0 0 24 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9393 101.061C11.5251 101.646 12.4749 101.646 13.0607 101.061L22.6066 91.5147C23.1924 90.9289 23.1924 89.9792 22.6066 89.3934C22.0208 88.8076 21.0711 88.8076 20.4853 89.3934L12 97.8787L3.51472 89.3934C2.92893 88.8076 1.97919 88.8076 1.3934 89.3934C0.807611 89.9792 0.807611 90.9289 1.3934 91.5147L10.9393 101.061ZM10.5 0L10.5 100H13.5L13.5 0L10.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
