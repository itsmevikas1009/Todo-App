import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    todoTitle: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true,
    },
}, {
    timestamps: true //creates createdAt and updatedAt fields
}
);

export const Todo = mongoose.model("Todo", todoSchema);