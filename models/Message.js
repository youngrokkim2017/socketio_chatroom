const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'chat',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
