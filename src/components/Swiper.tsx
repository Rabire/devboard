import SwipeArrowIcon from "./svg/SwipeArrow-Icon";

type Props = {
  previous: () => void;
  next: () => void;
};

const Swiper = ({ previous, next }: Props) => (
  <div className="">
    <button onClick={previous} className="swiper-btn">
      <SwipeArrowIcon />
    </button>
    <button className="rotate-180 swiper-btn" onClick={next}>
      <SwipeArrowIcon />
    </button>
  </div>
);

export default Swiper;
