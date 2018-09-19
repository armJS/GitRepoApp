export function searchBlock(inputId = 'searchInp', placeholder = 'Search', defValue ='Arm ', divClass = 'searchBlock', inputClass='') {
    return (
       `
            <div class=${divClass}>
                <input id=${inputId} placeholder=${placeholder} class=${inputClass}/>
            </div>
       `
    )
}