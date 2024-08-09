import { ADMIN_ROLE } from "../constants.js";
import { ApiError } from "../utils/ApiError.js";

const verifyAdmin = (req, res, next) => {
  const loggedInUserRole = req.user.role;

  if (loggedInUserRole !== ADMIN_ROLE) {
    throw new ApiError(403, "Unauthorized request");
  }

  next();
};

export { verifyAdmin };
