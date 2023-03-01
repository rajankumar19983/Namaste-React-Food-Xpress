import "../styles/ShimmerUI.css"

const ShimmerUI = () => {
  return (
    <div className="shimmer-restaurant-list">
      {
        Array(16).fill("").map((e, index) =>
          <div key={index} className="shimmer-card">
            <div id="shimmer-image"></div>
            <div id="shimmer-rest-name"></div>
            <div id="shimmer-cuisines"></div>
            <div id="shimmer-area"></div>
            <div id="shimmer-last">
              <p id="shimmer-rating"></p>
              <span>•</span>
              <p id="shimmer-distance"></p>
              <span>•</span>
              <p id="shimmer-price"></p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ShimmerUI;