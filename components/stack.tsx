import { motion } from "framer-motion";

type StackProps = {
  className?: string;
  colorBottom?: string;
  colorMiddle?: string;
  colorTop?: string;
};

export function Stack({
  className,
  colorBottom = "#F9E6E6",
  colorMiddle = "#F3D0D0",
  colorTop = "#DEB0B0",
}: StackProps) {
  return (
    <motion.svg
      className={className}
      style={{ rotateX: 45, rotateZ: -45 }}
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        initial={{ attrX: 9.42307, attrY: 13.2075 } as {}}
        animate={{ attrX: 0, attrY: 23.7736 } as {}}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
        width="47.1154"
        height="46.2264"
        rx="3"
        fill={colorBottom}
      />
      <motion.rect
        x="9.42307"
        y="13.2075"
        width="47.1154"
        height="46.2264"
        rx="3"
        fill={colorMiddle}
      />
      <motion.rect
        initial={{ attrX: 9.42307, attrY: 13.2075 } as {}}
        animate={{ attrX: 22.8846, attrY: 0 } as {}}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
        width="47.1154"
        height="46.2264"
        rx="3"
        fill={colorTop}
      />
    </motion.svg>
  );
}
