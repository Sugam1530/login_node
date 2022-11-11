const mongoose = require("mongoose");
const {Schema} = mongoose;
const uniqueValidtor = require("mongoose-unique-validator");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,        
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = requiredObject._id.toString(),
        delete returnedObject._id;
        delete returnedObject._v;
        delete returnedObject.password;
    },
});

userSchema.plugin(uniqueValidtor, {message: "Email already in use."});

const User = mongoose.model("user", userSchema);
module.exports = User;