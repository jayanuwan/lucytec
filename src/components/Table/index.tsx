import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GridApi, IsFullWidthRowParams } from "ag-grid-community";
import DeleteButton from "./DeleteButton";

let gridApi: GridApi;

interface IRow {
  name: string;
  age: number;
  city: string;
}

const Table = ({ data, removeData }: any) => {
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
    onGridReady: (event: any) => event.api.sizeColumnsToFit(),
  };

  useEffect(() => {
    setGridData(data);
    console.log(" Grid data", data);
  }, [data]);

  const [colDefs, setColDefs] = useState<ColDef<IRow | any>[] | any>([
    { field: "name", filter: true },
    { field: "age", filter: true },
    { field: "city", filter: true },
    {
      cellRenderer: (params: any) => (
        <DeleteButton {...params} propD={removeData} />
      ),
    },
  ]);

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
