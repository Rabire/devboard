import { motion } from "framer-motion";

type Sizes = "sm" | "md" | "lg";

type Props = {
  size: Sizes;
  pathColor?: "primary" | "secondary";
};

const getWidth = (size: Sizes) => {
  switch (size) {
    case "md":
      return 100;
    case "lg":
      return 200;
    default:
      return 60;
  }
};

const getPathStroke = (size: Sizes) => {
  switch (size) {
    case "md":
      return 8;
    case "lg":
      return 16;
    default:
      return 5;
  }
};

const getPathDraw = (size: Sizes) => {
  switch (size) {
    case "md":
      return "M104 32.9999C99 35.9444 95.8228 46.0204 90.8228 47.2287C85.8228 48.4372 84 39.6866 79 39.0419C74 38.3972 71.6098 49.1015 66.6098 48.4537C61.6098 47.8059 58.5974 32.8845 53.5974 34.696C48.5974 36.5074 44.2672 56.3009 39.2672 60.2326C34.2672 64.1643 31.4195 55.5676 26.4195 59.2903C21.4195 63.0131 21.5 68.8567 16.5 74.1399C11.5 79.4231 9 82.687 4 81.877";
    case "lg":
      return "M209 65.9998C199 71.8887 192.646 92.0408 182.646 94.4574C172.646 96.8744 169 79.3732 159 78.0838C149 76.7944 144.22 98.2031 134.22 96.9074C124.22 95.6118 118.195 65.769 108.195 69.3921C98.1947 73.0148 89.5344 112.602 79.5344 120.465C69.5344 128.329 63.839 111.135 53.839 118.581C43.839 126.026 44 137.713 34 148.28C24 158.846 19 165.374 9 163.754";
    default:
      return "M62.5 19.8C59.5 21.5667 57.5937 27.6123 54.5937 28.3373C51.5937 29.0624 50.5 23.812 47.5 23.4252C44.5 23.0384 43.0659 29.461 40.0659 29.0723C37.0659 28.6836 35.2584 19.7308 32.2584 20.8177C29.2584 21.9045 26.6603 33.7806 23.6603 36.1396C20.6603 38.4986 18.9517 33.3406 15.9517 35.5742C12.9517 37.8079 13 41.3141 10 44.484C7 47.6539 5.5 49.6123 2.5 49.1263";
  }
};

const DevBoardLogo = ({ size, pathColor = "primary" }: Props) => {
  const width = getWidth(size);
  const pathStroke = getPathStroke(size);
  const draw = getPathDraw(size);

  const widthAndPath = Math.abs(width + pathStroke);

  const isSideBar = size === "sm";

  return (
    <svg
      width={widthAndPath}
      height={width}
      viewBox={`0 0 ${widthAndPath} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        width={width}
        height={width}
        rx={width / 2}
        className="fill-current-theme"
      />
      <motion.path
        d={draw}
        className={
          pathColor === "primary"
            ? "stroke-light dark:stroke-dark"
            : "stroke-light-secondary dark:stroke-dark-secondary"
        }
        strokeWidth={pathStroke}
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{
          duration: isSideBar ? 3 : 1,
          repeat: Infinity,
          repeatDelay: 10,
        }}
      />
    </svg>
  );
};

export default DevBoardLogo;
