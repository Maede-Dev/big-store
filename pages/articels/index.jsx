import ArticleView from "../../Components/views/articleView";
import React from "react";
import { articlesListData } from "../../Components/fakeData";

const ArticlesPage = () => {
  //todo=show and sort the articles here

  return (
    <>
      <ArticleView data={articlesListData} />
    </>
  );
};

export default ArticlesPage;
