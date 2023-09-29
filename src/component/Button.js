const Button = ({ text, color, border, margin }) => {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: color, borderColor:border, marginLeft: margin }}>{text}</button>
    </div>
  )
}


export default Button
