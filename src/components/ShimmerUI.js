import { ShimmerPostList } from "react-shimmer-effects";

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      <span>
        <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={4} gap={30} />
      </span>
    </div>
  );
};

export default ShimmerUI;