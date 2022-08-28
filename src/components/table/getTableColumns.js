export const getTableColumn = (label,data) => {
    if (data.length < 0) return {}
    
    const columns=[]
    const dataItem = data[0]
    const dataKeys = Object.keys(dataItem)
    
    if (dataKeys.length < 0) return {}
    
    for (let i = 0; i < dataKeys.length; i++){
        if (label.length >= i) {
           columns.push(
            {'label':label[i],'accessor':dataKeys[i]}
           )
        }

    }
    

    return columns;

    

}