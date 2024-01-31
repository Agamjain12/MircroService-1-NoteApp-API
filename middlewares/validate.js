import axios from "axios";

export default async function validate(req, res, next) {
  try {
    const userId = req.headers["auth"];

    console.log("Going to Validate User...");
    console.log("userId: ", userId);

    const response = await axios.get("http://localhost:3001/user/validate", {
      headers: {
        auth: userId,
      },
    });

    return next();
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(500).json({ error: error.message });
  }
}
