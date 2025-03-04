import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GridApi } from "ag-grid-community";

let gridApi: GridApi;

interface IRow {
  name: string;
  age: number;
  city: string;
}

const Table = ({ data }: any) => {
  const [gridData, setGridData] = useState<Array<IRow>>(data || []);
  const [rowData, setRowData] = useState<IRow[]>([
    {
      name: "Jay",
      age: 40,
      city: "Colombo",
    },
  ]);
  const gridOptions = {
    pagination: true,
  };

  useEffect(() => {
    setGridData(data);
    console.log(" Grid data", data);
  }, [data]);

  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "name", filter: true },
    { field: "age", filter: true },
    { field: "city", filter: true },
  ]);

  console.log("fffff", gridData);
  return (
    <>
      <div style={{ width: "100%", height: 500 }}>
        <AgGridReact
          rowData={data ? data : rowData}
          columnDefs={colDefs}
          gridOptions={gridOptions}
          deltaSort={true}
        />
      </div>
    </>
  );
};

export default Table;
