import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={review.image}
            alt="Placeholderimage"
          />
        </figure>
      </div>
      <div className="card-content">
        <blockquote className="content">{review.review}</blockquote>
        <div className="columns">
          <div className="column">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={review.userImage}
                    alt="Placeholderimage"
                    className="is-rounded"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{review.username}</p>
              </div>
            </div>
          </div>
          <div className="column">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <p>
                {`${review.reviewsCount} reviews at Yelp`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
