export const Input = (props) => {
  return (
    
      <input
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        className={props.className}
      ></input>
      
   
  );
};
