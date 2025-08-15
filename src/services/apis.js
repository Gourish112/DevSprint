const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/getAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/createCourse",
  CREATE_SECTION_API: BASE_URL + "/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/createRating",
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/getReviews",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/showAllCategories",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
