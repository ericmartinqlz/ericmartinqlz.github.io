function PageHeader(props) {
  return(
    <div className="PageHeader">
      <div className="dotline first"></div>
      <h2>{props.page}</h2>
      <div className="dotline second"></div>
    </div>
  );
}

export default PageHeader;