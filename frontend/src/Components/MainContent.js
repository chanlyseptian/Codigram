import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import { getPosts } from "../features/post/postAction";
import Loading from "./Loading";
import { resetPost } from "../features/post/postSlice";
import AllPost from "./AllPost";

const MainContent = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  // posts.map(post=> {
  //   console.log(post)
  // })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getPosts());
    // dispatch(reset());
    // dispatch(resetPost());
  }, [user, navigate, dispatch, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="h-full dark:bg-neutral-900">
      <div className="text-center">
        <h1 className="text-2xl text-transparent md:text-3xl">
          Codigram Posts
        </h1>
      </div>
      <div className="mt-20"></div>

      {posts.length > 0 ? (
        posts.map((post) => {
          return <AllPost key={post.id} post={post} />;
        })
      ) :
      (
        <div className="mt-64">
          <h1 className="text-5xl">Loading data...</h1>
        </div>
      )}

      {/* <AllPost /> */}

    </section>
  );
};

export default MainContent;
