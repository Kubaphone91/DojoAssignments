const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const UserSchema = Schema({
  name: {
    first: { type: String, required: [true, "First name is required"], minlength: 2, maxlength: 25, trim: true},
    last: { type: String, required: [true, "Last name is required"], minlength: 2, maxlength: 25, trim: true}
  },
  email: { type: String, required: [true, "Email is required"], unique: true,
    validate: {
      validator: function(email){
        return /^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$/.test(email);
      },
      message: "Please enter a valid email"
      }
    },
  password: { type: String, required: [true, "You must enter a valid password"], minlength: 8, maxlength: 255,
   
    },
  birthday: { type: Date, required: [true, "You must enter a valid birthdate"]},
  quotes: [{ type: Schema.Types.ObjectId, ref: 'Quote'}]
  },
  { timestamps: true 
});

UserSchema.methods.bcryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.pre('save', function(done){
  if(!this.isNew){
    console.log('Presave, document is not new');
    return done();
  }
  this.password = this.bcryptPassword(this.password);
  done();
});

UserSchema.plugin(uniqueValidator);

UserSchema.virtual('fullName').get(function() {
  return this.name.first_name + ' ' + this.name.last_name;
});

const User = mongoose.model('User', UserSchema);