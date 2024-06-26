import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetails } from "../ApiRequest/ApiRequest.js";
import Layout from "../Layout/Layout";
import Loader from "../Component/Loader.jsx";
import BlogDetails from "../Component/BlogDetails.jsx";

const DetailsPage = () => {
  let { postID } = useParams();

  let [list, SetList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      SetList(res);
    })();
  }, [postID]);

  return (
    <Layout>{list === null ? <Loader /> : <BlogDetails list={list} />}</Layout>
  );
};

export default DetailsPage;
