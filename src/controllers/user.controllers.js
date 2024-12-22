import asyncHandler from "../utils/AsyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images and avatar
  // upload them to cloudinary
  // create user obeject - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { username, email, password } = req.body;
  console.log("email:", email);
});

export default registerUser;
