import React, { useCallback, useMemo, useState } from "react";
import CustomButton from "../../button/button";

function DishListing() {
  const [rasagullaPrice, setRasagullaPrice] = useState(100);
  const [litreDrink, setLitreDrink] = useState(100);

  const [biryaniItemsPrice, setBiryaniItems] = useState(200);

  const priceInSweetShop = useMemo(() => {
    console.log("priceInSweetShop calculating");
    return rasagullaPrice + litreDrink;
  }, [rasagullaPrice, litreDrink]);

  const priceInStore = useMemo(() => {
    console.log("priceInStore calculating");
    return biryaniItemsPrice;
  }, [biryaniItemsPrice]);

  const rasagullaHandler = useCallback(() => {
    setRasagullaPrice(rasagullaPrice + 10);
  }, [rasagullaPrice]);

  const drinkHandler = useCallback(() => {
    setLitreDrink(litreDrink + 5);
  }, [litreDrink]);

  const biryaniHandler = useCallback(() => {
    setBiryaniItems(biryaniItemsPrice + 20);
  }, [biryaniItemsPrice]);

  return (
    <div>
      <h3> 1kg rasagulla Price {rasagullaPrice} </h3>
      <CustomButton
        text={"Increase rasagulla price"}
        onPress={rasagullaHandler}
      />
      <h3> 1litre Drink Price {litreDrink} </h3>

      <CustomButton text={"Increase Drink price"} onPress={drinkHandler} />
      <h1>Total Price in the sweet shop {priceInSweetShop}</h1>

      <h3> Biryani iem price {biryaniItemsPrice} </h3>
      <CustomButton
        text={"Increase biryani item price"}
        onPress={biryaniHandler}
      />
      <h1>Total Price in the store {priceInStore}</h1>
    </div>
  );
}

export default DishListing;
