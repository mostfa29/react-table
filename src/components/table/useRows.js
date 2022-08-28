import React, { useMemo } from 'react'

function useRows(data) {
    const datas = data
  const rows =  useMemo(()=>datas,[])  
  return rows
}

export default useRows