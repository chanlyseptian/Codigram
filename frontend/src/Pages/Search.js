import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailPost } from "../features/post/postAction";

const Search = () => {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);

  const { User, caption, image, createdAt, userData } = posts;


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(detailPost(+id));

  }, [user, navigate, dispatch]);

  return (
    <div className="h-screen">
      <div className="">
        <h1 className="text-2xl text-transparent md:text-3xl">
          Codigram Posts
        </h1>
      </div>
      <div className="mt-48"></div>

      <div className="text-center flex justify-center items-center ">
        <div className="flex flex-col space-y-6 w-full h-auto md:w-[550px] lg:w-[650px]  p-2 bg-slate-100 dark:bg-indigo-200 rounded">
          <div className="w-auto ">
            <img
              // src={
              //   image
              //     ? require(`../../../../backend/images/${image}`)
              //     : "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
              // }
              src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
              className=""
              alt="..."
            />
          </div>

          <div className="">
            <div className="flex flex-row justify-between">
              <div className="w-full flex flex-row justify-start items-center space-x-4 ml-3">
                <img
                  // src={
                  //    "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp" ||
                  //     require(`../../../../backend/images/${posts.User.image}`)
                  // }
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                  className="rounded-full drop-shadow-lg w-12 h-12 md:w-14"
                  alt="Avatar"
                />
                <div className="flex space-x-5">
                  <div>
                    <p className="text-black mb-0 flex flex-row">
                      asd
                    </p>
                    <p className="text-xs text-black">
                     asd
                    </p>
                  </div>
                  <p className="text-black">cat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
