import React from "react";

const RightPanel = ({ children, title, subTitle }) => (
  <div className="login-right">
    <div className="login-form">
        <div className="login-header">
            <h2 className="right-title mb-3">{title}</h2>
            <small className="right-subtitle">{subTitle}</small>
        </div>
        {children}
    </div>
</div>

);

export default RightPanel;