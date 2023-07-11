const URLs = {
  // Auth API's
  loginurl: "/auth/login",
  signupUrl: "/auth/register",
  emailVerificationUrl: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
  logOut: "/auth/logout",
  emailStatus: "api/v1/users/email/verify/",
  attendanceAdjustment:"/attendance",
  getAttendanceByHours:"/attendance/by-hours",
  getAllUsers:'users/by/department-and-designation',
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
