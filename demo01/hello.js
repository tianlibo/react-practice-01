var Hello = React.createClass({
  edit: function() {
      alert('editing note')
  },
  remove: function() {
      alert('removing note')
  },
  render: function() {
    return(
        <div className = "hello">
          <p>{this.props.children}</p>
          <span>
            <button onClick={this.edit}
                    className="btn btn-primary glyphicon glyphicon-pencil"/>
            <button onClick={this.remove}
                    className="btn btn-primary glyphicon glyphicon-trash"/>
          </span>
        </div>
      );
  }
});

ReactDOM.render(
  <Hello>Hello, world!</Hello>,
  document.getElementById('example')
);
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );