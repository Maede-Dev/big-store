import { useRouter } from "next/dist/client/router";
import React from "react";
import style from "./style.module.scss";

const SingleProduct = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className={style.singleProduct_container}>
      here is the single product page
    </div>
  );
};

export default SingleProduct;
