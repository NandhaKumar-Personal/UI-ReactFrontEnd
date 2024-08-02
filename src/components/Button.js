export const Button = (props) => {
  return (
    <div>
      <button className={props.style}>
        <span className="mr-2 material-symbols-outlined">{props.name}</span>
        {props.buttonname}
      </button>
    </div>
  );
};
