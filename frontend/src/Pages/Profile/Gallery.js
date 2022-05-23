import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import { resetPost } from "../../features/post/postSlice";

const Gallery = ({ gallery, imageId }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }


    // dispatch(reset());
    // dispatch(resetPost());
  }, [user, navigate, dispatch]);

  return (
    <div className="">
      <Link to={`/detail/${imageId}`}>
        <img
          src={
            gallery
              ? require(`../../../../backend/images/${gallery}`)
              : "https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
          }
          // src={require(`../../../../backend/images/${gallery}`)}
          className="bg-slate-200 p-0.5 dark:border-none dark:bg-indigo-200  w-full h-28 md:w-[300px] md:h-[200px]"
          alt="..."
        />
      </Link>
    </div>
  );
};

export default Gallery;
