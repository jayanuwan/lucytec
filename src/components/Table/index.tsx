import React, { useEffect, useState } from "react";
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
  city: string;
}

const Table = (data: any) => {
  const [gridData, setGridData] = useState<IRow[]>(data || []);
  const [rowData, setRowData] = useState<IRow[]>([
    {
      name: "Jay",
      age: 40,
      city: "Colombo",
    },
  ]);

  useEffect(() => {
    setGridData(data);

    console.log(" Grid data", data);
  }, [data]);

  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "name" },
    { field: "age" },
    { field: "city" },
  ]);

  console.log(gridData);
  return (
    <>
      <div style={{ width: "100%", height: 500 }}>
        <AgGridReact rowData={gridData} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default Table;
