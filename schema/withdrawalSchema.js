const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")


const withdrawalSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, "User ID is required"] },
    type: {type: String, default: "Withdrawal"},
    amount: { type: Number},
    number: { type: String},
    account: { type: String},
    name: { type: String},
    status: { type: String, default: "pending"},
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
})
//pagination
withdrawalSchema.plugin(mongoosePaginate)

const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);
module.exports = {Withdrawal}