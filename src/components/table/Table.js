import { useState } from 'react'

const color1 = '#3fa4ed'
const color2 = '#fff'

const Cell = ({row, column, key, getColorCells}) => {
    const [color, setColor] = useState(color1)

    const toggleHandleMouseEnter = (event) => {
        if(color === color1) {
            setColor(color2)
        } else {
            setColor(color1)
        }
        event.target.style.backgroundColor = color
        getColorCells({
            row,
            column
        })
    }

    return(
        <td 
            data-row={row} 
            data-column={column} 
            key={key} 
            onMouseEnter={toggleHandleMouseEnter}>
        </td>
    )
}

const Row = ({row, key}) => {
    return(
        <tr key={key}>{row}</tr>
    )
}

const Table = ({tableSize, getColorCells}) => {
    const tableMarkup = []
    const workArr = Array.from(Array(tableSize).keys())
    
    for(let i=1; i<=tableSize; i++) {
        const row = [...workArr].map((item) => {
            return <Cell row={i} column={item+1} key={`${i}-${item+1}`} getColorCells={getColorCells}/>
        })
        tableMarkup.push(<Row row={[...row]} key={`row${i}`}/>)
    }

    return(
        <table className="hovering-table">
            <tbody>
                {tableMarkup}
            </tbody>            
        </table>
    )
}

export default Table