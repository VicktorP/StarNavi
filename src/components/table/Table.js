import { useRef } from 'react'

const Cell = ({row, column, key}) => {
    const cellRef = useRef(null);
    const toggleHandleMouseEnter = (event) => {
        if(cellRef.current.style.backgroundColor === 'rgb(63, 164, 237)') {
            cellRef.current.style.backgroundColor = 'rgb(255, 255, 255)'
        } else {
            cellRef.current.style.backgroundColor = 'rgb(63, 164, 237)'
        }
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

const Table = ({table}) => {
    const tableMarkup = []
    const workArr = Array.from(Array(table).keys())
    
    for(let i=1; i<=table; i++) {
        const row = [...workArr].map((item,index) => <Cell row={i} column={index+1} key={`${i}${index+1}`}/>)
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