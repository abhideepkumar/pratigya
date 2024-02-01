import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faEllipsis, faUpLong, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import posts from "../data/posts.json";
import React from "react";

const Post = () => {
  return (
    <div className="max-w-xl mx-auto px-4 md:px-0">
      <p className="pt-5 text-2xl">
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <span className="px-5">Community</span>
      </p>
      {posts.map((post, index) => (
        <div className="p-6" key={index}>
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-4">
              {/* u can also use src url from post json data */}
              <img
                src={encodeURI(`https://source.unsplash.com/500x500/?indian-girl?${index}`)}
                alt="profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{post.author}</h3>
                <p className="text-sm text-gray-500">{post.position}</p>
              </div>
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faShare} className="p-2" />
              <FontAwesomeIcon icon={faEllipsis} className="p-2" />
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <div className="mb-4">
              <p className="text-lg text-gray-600">Recently posted an incident near you</p>
            </div>
            <div className="mb-4 flex justify-center items-center">
              {/* u can also use src url from post json data */}
              <img
                src={encodeURI(`https://source.unsplash.com/1024x800/?${post.incident}?${index}`)}
                alt="post"
                className="h-64 rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{post.incident}</h4>
              <p className="text-gray-600 line-clamp-2">{post.description}</p>
              <div className="flex justify-between">
                <button className="text-gray-500 font-bold mt-2 bg-white rounded-full shadow-md max-w-max p-1 px-3">
                  Upvote <FontAwesomeIcon icon={faUpLong} /> {post.upvotes}
                </button>
                <p className="text-white mt-2 bg-blue-500 rounded-full shadow-md max-w-max p-1 px-3">
                  {post.emojis} 👍🤔💯
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">{post.time}</span>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-4">
            <img src={post.profile_img} alt="profile" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.position}</p>
            </div>
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon={faShare} className="p-2" />
            <FontAwesomeIcon icon={faEllipsis} className="p-2" />
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="mb-4">
            <p className="text-lg text-gray-600">Recently posted an incident near Canteen</p>
          </div>
          <div className="mb-4 flex justify-center items-center">
            <img src={post.image} alt="post" className="h-64 rounded-lg" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800">{post.incident}</h4>
            <p className="text-gray-600 line-clamp-2">{post.description}</p>
            <div className="flex justify-between">
              <button className="text-gray-500 font-bold mt-2 bg-white rounded-full shadow-md max-w-max p-1 px-3">
                Upvote <FontAwesomeIcon icon={faUpLong} /> {post.upvotes}
              </button>
              <p className="text-white mt-2 bg-blue-500 rounded-full shadow-md max-w-max p-1 px-3">
                {post.emojis} 👍🤔💯
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">{post.time}</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Post;