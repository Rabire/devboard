import SwipeArrowIcon from "./svg/SwipeArrow-Icon";

type Props = {
  previous: () => void;
  next: () => void;
};

const Swiper = ({ previous, next }: Props) => (
  <div className="space-x-5">
    <button onClick={previous}>
      <SwipeArrowIcon />
    </button>
    <button className="rotate-180" onClick={next}>
      <SwipeArrowIcon />
    </button>
  </div>
);

export default Swiper;
