

import './ActiveSquares.css'

const ActiveSquares = ({colorCells}) => {
    return (
        <div >
            <h2>Active squares</h2>
            <ul className="color-cells-list">
                {colorCells.map(cell=><li className="color-cell" key={`${cell.row}-${cell.column}`}>row {cell.row} col {cell.column}</li>)}
            </ul>
        </div>
    )
}

export default ActiveSquares