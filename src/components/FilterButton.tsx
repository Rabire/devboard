import cn from "classnames";

type Button = {
  label: string; // Should be unique
  onClick: () => void;
  isActive: boolean;
};

type Props = {
  buttons: Button[];
};

const FilterButton = ({ buttons }: Props) => (
  <div className="text-xs">
    {buttons.map((button) => (
      <button
        key={button.label}
        onClick={button.onClick}
        // className={`px-1 ${button.isActive && "txt-active"}`}
        className={cn("px-1", {
          "bg-current-theme font-semibold rounded-full px-2": button.isActive,
        })}
      >
        {button.label}
      </button>
    ))}
  </div>
);

export default FilterButton;
