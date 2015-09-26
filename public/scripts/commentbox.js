var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h5 className="commentAuthor">
          {this.props.author}
        </h5>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

React.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);
