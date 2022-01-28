import React from "react";
import { Button } from "react-bootstrap";
function CustomBtn({ className, btnName, btnType, disabled }) {
  return (
    <div className="d-grid gap-2 mt-4">
      <Button type={btnType} disabled={disabled} className={className}>
        {btnName}
      </Button>
    </div>
  );
}

export default CustomBtn;
