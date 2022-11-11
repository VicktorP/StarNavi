import {useEffect, useState} from 'react'

import getDataFromURL from '../../helpers/getDataFromURL'
import Button from '../button/Button'
import Select from '../select/Select'
import Table from '../table/Table'

import './Playground.css'

const Playground = ({getColorCells}) => {
    const dataURL = 'http://demo7919674.mockable.io'

    const [data, setData] = useState([])
    const [tableData, setTableData] = useState(0)
    const [value, setValue] = useState('');

   function changeSelect(event) {
      setValue(event.target.value);
   }

    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        const ariasData = await getDataFromURL(dataURL)
        setData(ariasData)
    }

    const startApp = () => {
        setTableData(Number(value))
    }

    return (
        <div className="playground">
            <div className="playground-manage">
                <Select data={data} value={value} changeSelect={changeSelect}/>
                <Button text="START" color="#fff" bgc="#3131ff" func={startApp}/>
            </div>
            <div className="squares-field">
                <Table table={tableData} getColorCells={getColorCells}/>
            </div>
        </div>
    )
}

export default Playground