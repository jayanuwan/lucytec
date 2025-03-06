import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import type { CustomCellRendererProps } from "ag-grid-react";

export default (
  params: CustomCellRendererProps,
  deleteData: (data: any) => void
) => {
  console.log(params);

  return (
    <div onClick={() => deleteData(params.value)}>
      <DeleteIcon />
    </div>
  );
};
