import React, { useState } from 'react'
import { getTableColumn } from './getTableColumns';
import Tbody from './Tbody'
import Tfooter from './Tfooter'
import Thead from './Thead'
import {useTable,useSortBy} from 'react-table'
import useRowsFn from './useRows';
import { employee_data } from '../../data/employeeData';
import './index.styles.css'

const data = employee_data

const label = [
  'id',
  'First Name',
  'last Name',
  'gender',
  'email',
  'salary'
]

const columns = getTableColumn(label, data)
 


    
function Table() {
    
    const [tableData,setTableData] = useState(data)
    // const columns = getTableColumn(label, data)
   
    // const table = useTable({ columns, useRows }, useSortBy);
    const useRows = useRowsFn(data)

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
    } = useTable({ columns, data:useRows }, useSortBy);

    
  return (
      <div className='table__container'>
          <table className='table__custom_table' {...getTableProps()}>
              
              <Thead className='table__custom_table_head' headerGroups={headerGroups } />
              <Tbody className='table__custom_table_body' getTableBodyProps={()=>getTableBodyProps} prepareRow={prepareRow} rows={rows} />
          </table>
      </div>
  )
}

export default Table