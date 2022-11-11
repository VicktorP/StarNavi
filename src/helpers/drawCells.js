const drawCells = (field) => {
    let markup = ''

    for (let i=0; i<field; i++) {
        markup+='<tr>'
        for (let j=0; j<field; j++) {
            if(i===0) {
                markup+=`<th data-row=${i+1} data-column=${j+1}></th>`
            } else {
                markup+=`<td data-row=${i+1} data-column=${j+1}></td>`
            }
        }
        markup+='</tr>'
    }

    return markup
}

export default drawCells