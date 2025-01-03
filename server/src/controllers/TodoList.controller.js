import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";

export const GetTodos = asyncHandler(async (req, res) => {
    try {
        const list = await User.findById({ _id: req.userId })
            .select("-password")
            .populate('todos')
            .exec();
        return res.json({ status: 200, message: "All todo list", todoList: list });
    } catch (err) {
        return res.json({ status: 403, Error: err });
    }
});
