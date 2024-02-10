import { Todo } from "../models/todo.model.js"

export const MarkTodo = async (req, res) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            {
                _id: req.body.todo_id,
                userId: req.userId,
            },
            [
                {
                    $set: {
                        isCompleted: {
                            $eq: [false, "$isCompleted"], // If it's already completed, set to false otherwise true
                        }
                    }
                }
            ]);

        if (todo) {
            return res.json({ status: 200, message: "Todo Updated!", list: todo })
        }
    } catch (err) {
        return res.json({ status: 401, message: "Could not Updated!", list: null })

    }
}

