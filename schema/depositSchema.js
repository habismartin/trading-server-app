const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")

const depositSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, "User ID is required"] },
    type: {type: String, default: "Deposit"},
    method: { type: String},
    amount: { type: Number},
    status: {type: String,}
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});
//pagination
depositSchema.plugin(mongoosePaginate)

const Deposit = mongoose.model("Deposit", depositSchema);
module.exports = {Deposit}