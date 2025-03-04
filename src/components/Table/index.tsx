import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

type User = {
  name: string;
  age: number;
  city: string;
};

interface IRow {
  name: string;
  age: number;
  city: boolean;
}

const Table = (data: any) => {
  const [rowData, setRowData] = useState<IRow[]>(
    data.length > 0
      ? data
      : [
          {
            name: "Jay",
            age: 40,
            city: "Colombo",
          },
        ]
  );
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "name" },
    { field: "age" },
    { field: "city" },
  ]);
  const defaultColDef: ColDef = {
    flex: 1,
  };
  return (
    <>
      <div style={{ width: "100%", height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </>
  );
};

export default Table;
