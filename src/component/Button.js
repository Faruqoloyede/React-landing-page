const Button = ({ text, color, border, margin }) => {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: color, borderColor:border, marginLeft: margin }}>{text}</button>
    </div>
  )
}

// const btn = {
//     background: "#e5145b",
//     color: "#ffffff",
//     fontSize: "18px",
//     border: "none",
//     outline: "none",
//     padding: "20px",
//     borderRadius: "10px",
//     cursor: "pointer",
// }

export default Button
