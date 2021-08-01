import React, { useState } from 'react'

import
MUIDataTable, {
  MUIDataTableColumn
} from "mui-datatables";

import { Container, BackgroundProgress } from './styles'
import { CircularProgress } from '@material-ui/core'

interface DataTableProps {
  tableTitle: string;
  columns: MUIDataTableColumn[];
  data: object[];
  loading: boolean;
  onRowClick(rowData: string[]): void;
}

export const DataTable: React.FC<DataTableProps> = ({
  tableTitle,
  columns,
  data,
  loading,
  onRowClick
}) => {

  return (
      <>
        <Container>
        <MUIDataTable
          title={tableTitle}
          data={data}
          columns={columns}
          options={{
            selectableRowsHideCheckboxes: true,
            download: false,
            print: false,
            search: true,
            onRowClick: (rowData) => onRowClick(rowData)
          }}
        />
        {loading &&
          <BackgroundProgress>
            <CircularProgress color="inherit" />
          </BackgroundProgress>
        }
      </Container>
    </>
  )
}
