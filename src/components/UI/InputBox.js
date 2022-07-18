const InputBox = props => {
    let attributes = {};
    attributes = {
        name : props.name ? props.name : '',
        onChange : props.onChange ? props.onChange : '',
        onclick : props.onclick ? props.onclick : '',
        className : props.className ? props.className : '', 
        id : props.id ? props.id : '', 
        type : props.type ? props.type : '',
        placeholder : props.placeholder ? props.placeholder : '', 
        minlength : props.minlength ? props.minlength : '', 
        maxlength : props.maxlength ? props.maxlength : '', 
        required : props.required ? props.required : '', 
    }
    return (
        <input {...attributes}/>
    );
}
export default InputBox;