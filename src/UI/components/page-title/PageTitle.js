import "./PageTitle.scss";

const PageTitle = props => {
  return (
    <h1 className="title">
      {props.children}
    </h1>
  );
}

export default PageTitle;