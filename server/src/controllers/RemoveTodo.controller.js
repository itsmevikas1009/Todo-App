import { Todo } from "../models/todo.model.js"
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const RemoveTodo = asyncHandler(async (req, res) => {
    try {
        const result = await Todo.findOneAndDelete(({
            userId: req.userId,
            _id: req.body.todo_id,
        }));
        if (result) {
            const user = await User.findOneAndUpdate(
                { _id: req.userId },
                { $pull: { todos: req.body.todo_id } }
            );
            return res.json({ status: 200, message: 'Todo Deleted.', list: null });
        }
    } catch (err) {
        return res.json({ status: 401, message: 'Could not Deleted!', list: null });

    }
});
