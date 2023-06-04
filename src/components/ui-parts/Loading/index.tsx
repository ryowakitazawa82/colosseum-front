import * as React from "react";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <React.Fragment>
      <div className="loader-wrap">
        <p className="loader-txt">ローディング中です</p>
        <span className="loader"></span>
      </div>
    </React.Fragment>
  );
};

export default Loading;
