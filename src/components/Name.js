import './Name.css';
function Name() {
    return (
        <div className="Name">
            <Objname name="Cake" />
        </div>
    )
}
export const Objname = (props) => {
    return <div>
        {props.name}
    </div>
}

export default Name;