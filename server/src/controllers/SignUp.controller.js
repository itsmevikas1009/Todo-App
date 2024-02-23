import { User } from "../models/user.model.js";

const SignUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!email || !password || !firstName) {
        return res.json({ status: 401, message: "Missing fields" })
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        return res.json({ status: 403, message: "Email has been used." });
    }
    // Create a new user from the request data and save it to the database
    const user = await User.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password
    })
    return res.json({ status: 200, message: "Registerd Successfully!" });
}

export default SignUp;