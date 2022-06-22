import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./style.module.scss";

const ArticleItem = (props) => {
  const { id, title, summary, image } = props;

  return (
    <div className={s.container}>
      <div className={s.imageBox}>
        <Image
          src={image}
          alt="article box"
          width={300}
          height={250}
          className={s.image}
        />
      </div>
      <div className={s.textBox}>
        <Link href={`/articels/${id}`}>
          <div className={s.title}>
            {title}
            {id}
          </div>
        </Link>
        <div className={s.desc}>{summary}</div>
      </div>
    </div>
  );
};

export default ArticleItem;
