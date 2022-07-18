const Button = props => {
    const btnValue = props.value;
    let attributes = {};
    attributes = {
        name : props.name ? props.name : '',
        onclick : props.onclick ? props.onclick : '',
        className : props.className ? props.className : '', 
        id : props.id ? props.id : '', 
        type : props.type ? props.type : ''
    }
    return (
        <button {...attributes}>{btnValue}</button>
    );
}
export default Button;