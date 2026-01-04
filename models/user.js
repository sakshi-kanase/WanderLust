const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Force default if object
let passportLocalMongoose = require("passport-local-mongoose");
if (passportLocalMongoose && typeof passportLocalMongoose === "object" && passportLocalMongoose.default) {
    passportLocalMongoose = passportLocalMongoose.default;
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
});

// plugin must be a function
if (typeof passportLocalMongoose !== "function") {
    throw new Error("passport-local-mongoose did not export a function");
}

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);