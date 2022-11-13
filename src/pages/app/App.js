import { useState } from 'react'

import Playground from '../../components/playground/Playground'
import ActiveSquares from '../../components/active-squares/ActiveSquares'

import './App.css'

function App() {
    const [colorCells, setColorCells] = useState([])

    const getColorCells = (cell) => {
        const existCell = colorCells.findIndex(item=>{
            return item.column===cell.column && item.row===cell.row
        } )
        if(!~existCell) {
            setColorCells([...colorCells, cell])
        } else {
            setColorCells([...colorCells.slice(0,existCell), ...colorCells.slice(existCell+1)])
        }
    }

    return (
        <div className="main-screen">
            <Playground getColorCells={getColorCells}/>
            <ActiveSquares colorCells={colorCells}/>
        </div>
    );
}

export default App
