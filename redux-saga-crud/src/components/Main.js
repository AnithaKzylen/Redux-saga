import {
  ADD_TO_CART,
  EMPTY_CART,
  PRODUCT_LIST,
  REMOVE_FROM_CART,
} from "../Redux-files/type";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();

  let data = useSelector((state) => state.ProductReducer.data);
  console.log("data in main component", data);

  useEffect(() => {
    dispatch({ type: PRODUCT_LIST });
  }, []);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: EMPTY_CART });
          }}
        >
          Empty Cart
        </button>
      </div>

      <div className="product-container">
        {data &&
          data.map((item) => (
            <div className="product-item">
              <img src={item.img} alt="" className="img" />

              <div>Name:{item.name}</div>
              <div>Color:{item.color}</div>
              <div>Price:{item.price}</div>
              <div>Category:{item.category}</div>
              <div>
                <button
                  onClick={() => {
                    console.log("add to cart clicked");
                    dispatch({ type: ADD_TO_CART, payload: item });
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: REMOVE_FROM_CART, payload: item.id });
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
