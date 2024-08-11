/* eslint-disable react/prop-types */
function CommentCard({ comment }) {
  return (
    <div className="w-full bg-white">
      {comment?.length === 0 && <div> No comment are availavail</div>}
      {comment?.map((item, i) => (
        <div key={i}>{item.comment} </div>
      ))}
    </div>
  );
}

export default CommentCard;
