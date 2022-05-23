import React from "react";
import { Link } from "react-router-dom";

const AllPost = ({ post }) => {
  const { caption, image, User } = post;
  // const userImage = User.image;
  // console.log(post.User.image);

  return (
    <div className="flex items-center justify-center drop-shadow-xl rounded-xl mb-10 bg-slate-100 dark:bg-slate-800 mx-auto max-w-[375px] md:max-w-[900px]">
      <div>
        <div className="flex flex-row m-3 w-full">
          <a href="/">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
              src={
                !post.User.image
                  ? "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                  : require(`../../../backend/images/${post.User.image}`)
              }
              //     src={
              //   gallery
              //     ? require(`../../../../backend/images/${gallery}`)
              //     : "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
              // }
              className="rounded-full drop-shadow-lg bg-no-repeat bg-cover w-10 h-9 md:w-14 md:h-14"
              alt="Avatar"
            />
          </a>
          <div className="flex flex-col items-start justify-center ml-5">
            <a href="/" className="text-black dark:text-white mb-0">
              {/* <strong>{post.User.name}</strong> */}
              <strong>{post.User.name}</strong>
            </a>
            <a href="/" className="text-gray-400">
              <small>
                {post.createdAt.substring(14, 19)}{" "}
                {post.createdAt.substring(0, 7)} {/* 10h */}
              </small>
            </a>
          </div>
          <a
            href="/"
            className="text-black font-bold text-lg dark:text-white ml-[177px] md:ml-[555px] lg:ml-[690px]"
          >
            . . .
          </a>
        </div>

        <Link to={`/clicked/${post.id}`}>
          <img
            // src={require(`../images/${image.substring(23)}`)}
            // src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
            src={
              !post.image
                ? "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                : require(`../../../backend/images/${post.image}`)
            }
            className="bg-no-repeat bg-cover"
            alt="..."
          />
        </Link>
        <div className="flex flex-row m-3 p-3 text-gray-800 dark:text-gray-300 text-left text-sm w-full">
          {/* <h3>{caption}</h3> */}
          <h3>{post.caption}</h3>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
