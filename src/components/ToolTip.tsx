import { ReactElement } from "react";
import Tippy from "@tippyjs/react";

type Props = {
  children: ReactElement;
  text: string;
  right?: boolean;
  left?: boolean;
  bottom?: boolean;
};

// TODO: remove if used nowhere

const ToolTip = ({ children, text, right, left, bottom }: Props) => (
  <Tippy
    // eslint-disable-next-line no-nested-ternary
    placement={right ? "right" : left ? "left" : bottom ? "bottom" : "top"}
    content={
      <span className="bg-secondary border-[1px] py-1 px-2 rounded-md">
        {text}
      </span>
    }
  >
    {children}
  </Tippy>
);

export default ToolTip;
