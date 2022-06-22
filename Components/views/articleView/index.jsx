import React, { useState } from "react";

import ArticleItem from "./components/articleItem";
import { Pagination } from "antd";
import s from "./style.module.scss";

const ArticleView = ({ data }) => {
  const pageSize = 10;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9);

  const handleChange = (page) => {
    setMin((page - 1) * pageSize);
    setMax(page * pageSize);
  };

  return (
    <div className={s.container}>
      <div className={s.articleList}>
        {
          // data.map(()=>())
          data.slice(min, max).map((item) => (
            // <div>{item.id}</div>
            <ArticleItem {...item} key={item.id} />
          ))
        }
      </div>
      <Pagination
        className={s.pagination}
        defaultCurrent={1}
        total={data.length}
        pageSize={pageSize}
        onChange={handleChange}
      />
    </div>
  );
};

export default ArticleView;
