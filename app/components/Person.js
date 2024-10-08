import React from "react";
import Avatar from "components/Avatar";
import Icon from "components/Icon";

export default (props) => (
  <div className="Person">
    <div className="Person__Wrapper">
      <div className="Person__Social">
        {props.twitter && (
          <Icon href={`https://twitter.com/${props.twitter}`} type="twitter" />
        )}
        {props.github && (
          <Icon href={`https://github.com/${props.github}`} type="github" />
        )}
      </div>
      <Avatar url={props.avatar} name={props.name} size={200} />
      <b>{props.name}</b>
      <em>{props.title}</em>
    </div>
  </div>
);
