import "./Logo.scss";

const Logo = props => {
  return (
    <div className="logo">
      <img src={props.logoName} alt={props.title} />
    </div>
  )
}

export default Logo;