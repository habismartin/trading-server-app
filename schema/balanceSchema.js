const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")

const balanceSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, "User ID is required"] },
    status: {type: String, default: "pending"},
    balance: {type: Number, default: 0},
    demoBalance: {type: Number, default: 0}
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
balanceSchema.plugin(mongoosePaginate)

const Balance = mongoose.model("Balance", balanceSchema);
module.exports = {Balance}