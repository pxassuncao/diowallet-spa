export default function Input(props){
    
    return(
        <input
                type={props.type}
                placeholder={props.placeholder}
                className="rounded p-2 w-full"
                />
    );
}