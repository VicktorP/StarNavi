import { useRef } from 'react'

const Cell = ({row, column, key, getColorCells}) => {
    const cellRef = useRef(null);
    const toggleHandleMouseEnter = (event) => {
        if(cellRef.current.style.backgroundColor === 'rgb(63, 164, 237)') {
            cellRef.current.style.backgroundColor = 'rgb(255, 255, 255)'
        } else {
            cellRef.current.style.backgroundColor = 'rgb(63, 164, 237)'
        }
        const colorCell = {
            row: cellRef.current.dataset.row,
            column: cellRef.current.dataset.column
        }
        getColorCells(colorCell)
    }

    return(
        <td 
            data-row={row} 
            data-column={column} 
            key={key} 
            ref={cellRef} 
            onMouseEnter={toggleHandleMouseEnter}>
        </td>
    )
}

const Row = ({row, key}) => {
    return(
        <tr key={key}>{row}</tr>
    )
}

const Table = ({table, getColorCells}) => {
    const tableMarkup = []
    const workArr = Array.from(Array(table).keys())
    
    for(let i=1; i<=table; i++) {
        const row = [...workArr].map((item,index) => {
            return <Cell row={i} column={index+1} key={`${i}${index+1}`} getColorCells={getColorCells}/>
        })
        tableMarkup.push(<Row row={[...row]} key={i}/>)
    }

    return(
        <table className="hovering-table" key={'table'}>
            <tbody>
                {tableMarkup}
            </tbody>            
        </table>
    )
}

export default Table