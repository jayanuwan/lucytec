import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import type { CustomCellRendererProps } from "ag-grid-react";

const DeleteButton = (params: CustomCellRendererProps | any) => {
  return (
    <div onClick={() => params.propD(params.data)}>
      <DeleteIcon />
    </div>
  );
};

export default DeleteButton;
