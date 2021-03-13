import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    <div className={classes.AnswersList}>
      {props.answers.map((item, index) => {
        return <AnswerItem key={index} answer={item} />;
      })}
    </div>
  );
};

export default AnswersList;
