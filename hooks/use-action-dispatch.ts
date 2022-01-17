import { useSelector, useDispatch } from "react-redux";

import { MyThunkDispatch, OurStore } from "rdx/store";

import {
  fetchCountries,
  fetchRegions,
  fetchDistricts,
  fetchSubDistricts,
  fetchVillages,
  fetchUniversities,
  fetchProfessions,
  fetchDegrees,
} from "rdx/slices/common";
import { reset as authResetFunc, login, signup } from "rdx/slices/auth";
import {
  reset as accountResetFunc,
  fetchMe,
  submitStepOne,
  submitStepTwo,
} from "rdx/slices/account";
import {
  reset as viewResetFunc,
  fetchUser,
  fetchPersonality,
  fetchInstitution,
} from "rdx/slices/view";
import { reset as postResetFunc, submitPost } from "rdx/slices/post";
import {
  init as postsResetFunc,
  fetchPosts,
  fetchRecentVillages,
  fetchRecentUsers,
} from "rdx/slices/feedPage";
import {
  fetchVillage,
  fetchVillageUsers,
  fetchVillageGraduates,
  fetchVillageStories,
  fetchVillagePersonalities,
  fetchVillageInstitutions,
  fetchVillageVideos,
  fetchVillagePhotos,
} from "rdx/slices/villagePage";
import {
  fetchGraduateStats
} from "rdx/slices/graduatePage";

const useActionDispatch = () => {
  const dispatch: MyThunkDispatch = useDispatch();

  const {
    addPost
  } = useSelector(
    (state: OurStore) => state.postReducer
  );
     
  const authReset = async () => {
    await dispatch(authResetFunc());
  };

  const accountReset = async () => {
    await dispatch(accountResetFunc());
  };

  const doLogin = async (params) => {
    await dispatch(login(params));
  };

  const doSignup = async (params) => {
    await dispatch(signup(params));
  };

  const fetchCountriesData = async () => {
    await dispatch(fetchCountries());
  };
  const fetchRegionsData = async (params) => {
    await dispatch(fetchRegions(params));
  };
  const fetchDistrictsData = async (params) => {
    await dispatch(fetchDistricts(params));
  };
  const fetchSubDistrictsData = async (params) => {
    await dispatch(fetchSubDistricts(params));
  };
  const fetchVillagesData = async (params) => {
    await dispatch(fetchVillages(params));
  };
  const fetchUniversitiesData = async () => {
    await dispatch(fetchUniversities());
  };
  const fetchProfessionsData = async () => {
    await dispatch(fetchProfessions());
  };
  const fetchDegreesData = async () => {
    await dispatch(fetchDegrees());
  };

  const fetchCommonData = () => {
    fetchCountriesData();
    fetchUniversitiesData();
    fetchProfessionsData();
    fetchDegreesData();
  };

  const fetchMeData = async () => {
    await dispatch(fetchMe());
  };

  const fetchUserData = async (params) => {
    await dispatch(fetchUser(params));
  };

  const fetchPersonalityData = async (params) => {
    await dispatch(fetchPersonality(params));
  };

  const fetchInstitutionData = async (params) => {
    await dispatch(fetchInstitution(params));
  };

  const fetchFeedPageData = async (params) => {
    await dispatch(fetchPosts(params));
    await dispatch(fetchRecentVillages());
    await dispatch(fetchRecentUsers());
  };

  const fetchVillageData = async (params) => {
    await dispatch(fetchVillage(params));
  };
  const fetchVillageUsersData = async (params) => {
    await dispatch(fetchVillageUsers(params));
  };
  const fetchVillageGraduatesData = async (params) => {
    await dispatch(fetchVillageGraduates(params));
  };
  const fetchVillageStoriesData = async (params) => {
    await dispatch(fetchVillageStories(params));
  };
  const fetchVillagePersonalitiesData = async (params) => {
    await dispatch(fetchVillagePersonalities(params));
  };
  const fetchVillageInstitutionsData = async (params) => {
    await dispatch(fetchVillageInstitutions(params));
  };
  const fetchVillageVideosData = async (params) => {
    await dispatch(fetchVillageVideos(params));
  };
  const fetchVillagePhotosData = async (params) => {
    await dispatch(fetchVillagePhotos(params));
  };

  const fetchVillagePageData = (params) => {
    fetchVillageUsersData(params);
    fetchVillageGraduatesData(params);
    fetchVillageStoriesData(params);
    fetchVillagePersonalitiesData(params);
    fetchVillageInstitutionsData(params);
    fetchVillageVideosData(params);
    fetchVillagePhotosData(params);
  };

  const fetchGraduateStatsData = async (params) => {
    await dispatch(fetchGraduateStats(params))
  }

  const submitPostData = async (params) => {
    await dispatch(submitPost(params));
  };

  const submitStepOneData = async (params) => {
    await dispatch(submitStepOne(params));
  };

  const submitStepTwoData = async (params) => {
    await dispatch(submitStepTwo(params));
  };

  const submitPremiumUser = async (params) => {
    await dispatch(submitPremiumUser(params));
  };

  const resetPost = async () => {
    await dispatch(postResetFunc());
  };

  const resetPosts = async () => {
    await dispatch(postsResetFunc());
  };

  return {
    authReset,
    accountReset,
    doLogin,
    doSignup,
    submitPostData,
    submitStepOneData,
    submitStepTwoData,
    submitPremiumUser,
    resetPost,
    resetPosts,
    fetchCountriesData,
    fetchRegionsData,
    fetchDistrictsData,
    fetchSubDistrictsData,
    fetchVillagesData,
    fetchCommonData,
    fetchMeData,
    fetchUserData,
    fetchPersonalityData,
    fetchInstitutionData,
    fetchFeedPageData,
    fetchVillageData,
    fetchVillagePageData,
    // fetchVillageUsersData,
    // fetchVillageGraduatesData,
    // fetchVillageStoriesData,
    // fetchVillagePersonalitiesData,
    // fetchVillageInstitutionsData,
    // fetchVillageVideosData,    
    fetchGraduateStatsData,
    addPost
  };
};

export default useActionDispatch;
