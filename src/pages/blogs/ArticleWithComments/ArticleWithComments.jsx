import React from "react";
import "./articleWithComments.css";
import AvatarImage from "../../../assets/images/avatar.png";

const ArticleWithComments = ({ title, text, image }) => {
  const comments = [
    {
      id: 1,
      userName: "JoJo_45",
      dateOfPublication: "22-10-2025",
      userAvatar: AvatarImage,
      text: "Gallery, with its treasury of priceless crown jewels, then used power tools to break through a window.",
      likesAmount: 2,
    },
    {
      id: 2,
      userName: "Lili_789",
      dateOfPublication: "20-10-2025",
      userAvatar: AvatarImage,
      text: "To anyone strolling along the banks of the Seine :)",
      likesAmount: 3,
    },
    {
      id: 3,
      userName: "JoJo_45",
      dateOfPublication: "22-10-2025",
      userAvatar: AvatarImage,
      text: "Gallery, with its treasury of priceless crown jewels, then used power tools to break through a window.",
      likesAmount: 2,
    },
    {
      id: 4,
      userName: "Lili_789",
      dateOfPublication: "20-10-2025",
      userAvatar: AvatarImage,
      text: "To anyone strolling along the banks of the Seine :)",
      likesAmount: 3,
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: text.replace(/<[^>]+>/g, ""),
          url: window.location.href,
        })
        .then(() => console.log("Успешно поделились"))
        .catch((error) => console.log("Ошибка при шаринге:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Ссылка скопирована! 📋");
    }
  };

  return (
    <div className="modal-blog__content">
      <div className="article-content">
        <h2 className="article-content__title">{title}</h2>
        <div
          className="article-text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <img className="article-text-img" src={image} />
        <div className="article-actions">
          <button className="like-btn">❤️ 0</button>
          <button className="comments-btn">💬 0</button>
          <button className="share-btn" onClick={handleShare}>
            🔗 Share
          </button>
        </div>
        <p className="article-date">date of publication 20-10-2025</p>
        <p className="article-date">author Admin F.</p>
      </div>
      <div className="comment-block">
        <h3 className="comment-base__title">Comments to the post</h3>
        <div className="comment-base">
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="single-comment">
                <div className="base-info">
                  <img
                    className="comment-avatar"
                    src={comment.userAvatar}
                    alt=""
                  />
                  <div className="user-info">
                    <h4 className="user-info-name-comment">
                      {comment.userName}
                    </h4>
                    <div className="subtitle">{comment.dateOfPublication}</div>
                  </div>
                </div>
                <div className="comment-user-text">
                  <p>{comment.text}</p>
                </div>
                <button className="comment-like-btn">
                  ❤️ {comment.likesAmount}{" "}
                </button>
              </div>
            );
          })}
        </div>
        <div className="write-comment">
          <h3 className="write-comment__title">Write your comment</h3>
          <form className="comment-text">
            <textarea
              className="comment-text__textarea"
              name=""
              id=""
              placeholder="type your comment here..."
            ></textarea>
            <button className="comment-text__button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleWithComments;
