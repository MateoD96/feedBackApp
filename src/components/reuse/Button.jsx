import buttons from "../../styles/Buttons.module.css";

function Button({ children, onClick, styleBtn, type = "button", valueBtn }) {
  return (
    <button className={styleBtn} onClick={onClick} type={type} value={valueBtn}>
      {children}
    </button>
  );
}

export default Button;
