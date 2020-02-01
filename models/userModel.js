const mongoose = require("mongoose");
const schema = {

    // email: {   type: String,   required: true,   unique: true }, 
    // firstName: String, 
    // lastName: String}, 
    // { timestamps: true}
    firstName: { type: mongoose.SchemaTypes.String, required: true },
    lastName: { type: mongoose.SchemaTypes.String, required: true },
    email: { type: mongoose.SchemaTypes.String, required: true },

};
const collectionName = "user"; // Name of the collection of documents
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName, userSchema);
module.exports = User;