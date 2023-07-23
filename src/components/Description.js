import './Description.css';
function Description() {
    return (
        <div>
            <Objdesc Description="This cake is rarely seen but could be seen in the city of Umukabia; where Raymond Ogaraga came from." />
        </div>
    )
}
export const Objdesc = (props) => {
    return <div className='Descript'>
        {props.Description}
    </div>
}


export default Description