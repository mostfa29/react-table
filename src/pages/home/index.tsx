import React, { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef
  
} from '@tanstack/react-table'
import { employee_data } from '../../data/employeeData'
import styled from 'styled-components'


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
      <Container>
          <Table>
        {/* table header columns */}    
        <thead style={{border:'none'}}>
          {table.getHeaderGroups().map(headerGroup => (
            <TableHeader key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHeaderElem key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHeaderElem>
              ))}
            </TableHeader>
          ))}
        </thead>

         <tbody>
          {table.getRowModel().rows.map(row => (
            <TableBody key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableBodyElem key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableBodyElem>
              ))}
            </TableBody>
          ))}
        </tbody>

         <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <TableFooter key={footerGroup.id}>
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
            </TableFooter>
          ))}
        </tfoot>
        

          </Table>
      
      </Container>
  )
}

export default Home

const Container = styled.div`
background-color: white;
width: 70vw;
display: flex;
flex: 1;
align-items: center;
padding: 2vh 2vw;
justify-content: center;
border-radius: 30px;
box-shadow: 1px -1px 26px 4px rgba(0,0,0,0.75);`
const Table = styled.table`
   border-collapse: collapse;
`
  

const TableHeader = styled.tr`
border: none;
`
const TableHeaderElem = styled.th`
padding: 20px;

`

const TableBody = styled.tr`
border-top: 1px solid;
border-bottom: 1px solid;
`
const TableBodyElem = styled.td`
padding: 20px;
text-align: center;

`

const TableFooter = styled.tr`

`