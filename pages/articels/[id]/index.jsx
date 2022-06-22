import Head from 'next/head'
import React from "react";
import SingleArticleView from "../../../Components/views/singleArticleView";

const SingleArticle = () => {
  return (
    <>
      <Head>
        <title>single article</title>
        <meta name="description" content="big store officlial shop website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SingleArticleView />
    </>
  );
};

export default SingleArticle;
