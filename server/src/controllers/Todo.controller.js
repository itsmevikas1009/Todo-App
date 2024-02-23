import { Todo } from "../models/todo.model.js"
import { User } from "../models/user.model.js";

const createTodo = async (req, res) => {
    const { todoTitle } = req.body;
    try {
        if (!todoTitle) {
            return res.json({ status: 401, message: "Missing fields" })
        }
        const result = await Todo.create({
            userId: req.userId,
            todoTitle,
        })
        if (result) {
            const user = await User.findOneAndUpdate(
                { _id: req.userId },
                {
                    $push: { todos: result }
                });
            return res.json({ status: 200, message: "Todo added Successfully!!" });
        }
    } catch (err) {
        return res.json({ status: 403, message: "Something went wrong!!" });

    }
}

export default createTodo;