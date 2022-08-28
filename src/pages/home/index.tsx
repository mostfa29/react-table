import React, { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef
  
} from '@tanstack/react-table'
import { employee_data } from '../../data/employeeData'


const fetchedData = employee_data

type Person = {
  id:Number,
  first_name: string,
  last_name: string,
  gender: string,
  email: String,
  salary: string
}


//crate column definition type
const columnHelper = createColumnHelper<Person>  ()

//define column
const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    footer:info=>info.column.id
  }),
  
columnHelper.accessor(row => row.first_name, {
    id: 'first_name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>First Name</span>,
    footer: info => info.column.id,
}),
  
columnHelper.accessor(row => row.last_name, {
    id: 'last_name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
}),



columnHelper.accessor(row => row.gender, {
    id: 'gender',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Gender</span>,
    footer: info => info.column.id,
}),
  
columnHelper.accessor(row => row.email, {
    id: 'email',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
    footer: info => info.column.id,
}),
  
columnHelper.accessor(row => row.salary, {
    id: 'salary',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Salary</span>,
    footer: info => info.column.id,
  }),
]

// const defaultColumns: ColumnDef<Person>[] = [
//   //

// ]
    
function Home() {
    const [data, setData] = useState(() => fetchedData)
    
  //table init
  const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
      })
  return (
      <div>
          <table>
        {/* table header columns */}    
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

         <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

         <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
        

          </table>
      
      </div>
  )
}

export default Home