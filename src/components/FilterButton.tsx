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
  <div className="text-xs flex items-end">
    {buttons.map((button) => (
      <button
        key={button.label}
        onClick={button.onClick}
        className={cn(
          "py-1 px-2 rounded-full",
          button.isActive
            ? "bg-current-theme font-semibold text-black"
            : "hover:bg-white/20"
        )}
      >
        {button.label}
      </button>
    ))}
  </div>
);

export default FilterButton;
