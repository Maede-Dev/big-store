import React from "react";
import s from "./style.module.scss";
const SectionHeader = (props) => {
  const { children } = props;
  return (
    <h2 className={s.title}>
      <span className={s.text}>{children}</span>
    </h2>
  );
};

export default SectionHeader;
