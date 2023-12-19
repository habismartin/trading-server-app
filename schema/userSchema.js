const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const mongoosePaginate = require("mongoose-paginate-v2")

const userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    currency: String,
    balance: {type:Number, default: 0},
    demoBalance: {type:Number, default: 0},
    status: {type:String, default: "Pending"},
    image: {type: Buffer},
    firstName: { type: String},
    lastName: { type: String},
    country: { type: String},
    phone: { type: Number},
    address: {type: String,},
    dob: {type: String,},
    verification: {type: Buffer},
    isAdmin : {type : Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

//virtual 
userSchema.virtual('deposit', {
  ref: 'Deposit',
  foreignField: 'user',
  localField: '_id'
})
userSchema.virtual('withdrawal', {
  ref: 'Withdrawal',
  foreignField: 'user',
  localField: '_id'
})

//pagination
userSchema.plugin(mongoosePaginate)

  //hash password
  userSchema.pre("save", async function(next){
    if (!this.isModified("password")){
      next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  })

  //verify password
  userSchema.methods.isPasswordMatch = async function(password){
    return await bcrypt.compare(password, this.password);
  }
  const User = mongoose.model("User", userSchema);
  module.exports = {User};