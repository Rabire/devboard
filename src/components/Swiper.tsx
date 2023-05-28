import SwipeArrowIcon from "./svg/SwipeArrow-Icon";

type Props = {
  previous: () => void;
  next: () => void;
};

const Swiper = ({ previous, next }: Props) => (
  <div className="">
    <button onClick={previous} className="swiper-btn" aria-label="previous">
      <SwipeArrowIcon />
    </button>
    <button className="rotate-180 swiper-btn" onClick={next} aria-label="next">
      <SwipeArrowIcon />
    </button>
  </div>
);

export default Swiper;
