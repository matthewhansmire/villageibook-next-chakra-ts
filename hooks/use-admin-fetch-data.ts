import { useSelector } from "react-redux";
import { OurStore } from "rdx/store";

const useAdminFetchData = () => {
  const { posts, stories, personalities, institutions, videos, users, pmusers, error } = useSelector(
    (state: OurStore) => state.adminReducer
  );

  return {
    posts,
    stories,
    personalities,
    institutions,
    videos,
    users,
    pmusers,
    error,
  };
};

export default useAdminFetchData;
