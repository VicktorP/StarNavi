import { useState } from 'react'

const color1 = 'rgb(63, 164, 237)'
const color2 = 'rgb(255, 255, 255)'

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
        const row = [...workArr].map((item,index) => {
            return <Cell row={i} column={index+1} key={`${i}-${index+1}`} getColorCells={getColorCells}/>
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