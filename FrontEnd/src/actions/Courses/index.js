import {
    COURSE_CATEGORY,
    COURSE_CATEGORY_SUCCESS,
    COURSE_CATEGORY_FAILURE,
    COURSE,
    COURSE_SUCCESS,
    COURSE_FAILURE,
    TOPICS,
    TOPICS_SUCCESS,
    TOPICS_FAILURE,
    VIDEOS,
    VIDEOS_SUCCESS,
    VIDEOS_FAILURE,
    SPEAKERS,
    SPEAKERS_SUCCESS,
    SPEAKERS_FAILURE,
  } from "./actionTypes";

  // Course Category action functions
  export const courseCategory = (data) => ({
    type: COURSE_CATEGORY,
    payload: data,
  });
  
  export const courseCategorySuccess = (data) => ({
    type: COURSE_CATEGORY_SUCCESS,
    payload: data,
  });
  
  export const courseCategoryFailure = () => ({
    type: COURSE_CATEGORY_FAILURE,
  });
  
    // Course action functions
    export const course = (data) => ({
      type: COURSE,
      payload: data,
    });
    
    export const courseSuccess = (data) => ({
      type: COURSE_SUCCESS,
      payload: data,
    });
    
    export const courseFailure = () => ({
      type: COURSE_FAILURE,
    });

     // Topics action functions

    export const topics = (data) => ({
      type: TOPICS,
      payload: data,
    });
    
    export const topicsSuccess = (data) => ({
      type: TOPICS_SUCCESS,
      payload: data,
    });
    
    export const topicsFailure = () => ({
      type: TOPICS_FAILURE,
    });

    // Course action functions

    export const videos = (data) => ({
      type: VIDEOS,
      payload: data,
    });
    
    export const videosSuccess = (data) => ({
      type: VIDEOS_SUCCESS,
      payload: data,
    });
    
    export const videoFailure = () => ({
      type: VIDEOS_FAILURE,
});
    
    // Speakers action functions

    export const Speakers = (data) => ({
      type: SPEAKERS,
      payload: data,
    });
    
    export const SpeakersSuccess = (data) => ({
      type: SPEAKERS_SUCCESS,
      payload: data,
    });
    
    export const SpeakersFailure = () => ({
      type: SPEAKERS_FAILURE,
    });
