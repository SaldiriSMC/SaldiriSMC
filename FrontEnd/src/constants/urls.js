const URLs = {
  // Auth API's
  loginurl: "api/v1/users/login/",
  signupUrl: "api/v1/users/register/",
  emailVerificationUrl: "api/v1/users/password-reset/send-email/",
  resetPassword: "api/v1/users/password-reset/",
  emailStatus: "api/v1/users/email/verify/",
  course: "courses/all/",
  topics: "courses/topics/",
  courseCategory: "courses/categories/",
  videos: "/courses/videos/",
  Speakers: "api/v1/users/getSpeakers/",
  //mainUrl: "http://192.168.18.11:8000/",
  baseURL: "http://192.168.18.36:8000/",
  mainUrl: "http://ec2-18-191-81-48.us-east-2.compute.amazonaws.com:8000/",
  baseUrl: "http://ec2-18-191-81-48.us-east-2.compute.amazonaws.com:8000/",
  imageBaseUrl: "https://lms-backend-static.s3.amazonaws.com/"
};

export default URLs;
