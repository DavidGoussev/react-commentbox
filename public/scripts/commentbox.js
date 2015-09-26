var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello world, I am a comment list!
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world, I am a Comment Form!
      </div>
    );
  }
});


React.render(
  <CommentBox />,
  document.getElementById('content')
);
