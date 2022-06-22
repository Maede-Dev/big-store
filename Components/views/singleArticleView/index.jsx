import React from "react";
import { articlesListData } from "../../fakeData";
import s from "./style.module.scss";
import { useRouter } from "next/router";

const SingleArticleView = () => {
  const router = useRouter();
  const data = articlesListData.find((item) => item.id == router.query.id);

  console.log(data);
  return (
    <div className={s.singleArticleView}>
        <div className={s.img}>{data?.image}</div>
      <div className={s.title}>{data?.title}</div>
      <div className={s.description}>{data?.description}</div>
    </div>
  );
};

export default SingleArticleView;
