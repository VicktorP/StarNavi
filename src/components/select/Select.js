

import './Select.css'

const Select = ({data, value, changeSelect}) => {

    const dataForSelect = data.map((item, index) => {
        return <option value={item.field} key={index}>{item.name}</option>     
    })

    return (
        <select className="arias-select" value={value} onChange={changeSelect}>
            <option defaultValue>Pick mode</option>
            {dataForSelect}
        </select>
    )
}

export default Select