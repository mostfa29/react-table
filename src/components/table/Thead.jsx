import React from 'react'

function Thead({ headerGroups }) {
  console.log(headerGroups)
  return (
      <thead style={{textAlign:'center'}}>
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                 
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "desc"
                        : "asc"
                      : ""
                  }
                >
                  {column.label}
                </th>
              ))}
            </tr>
          ))}
        </thead>
  )
}

export default Thead