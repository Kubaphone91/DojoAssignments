const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  created_at: { type: Date, default: Date.now },
  topics: [{ type: mongoose.Schema.Types.Mixed, ref: "Topics" }],
  posts: [{ type: mongoose.Schema.Types.Mixed, ref: "Posts" }],
  comments: [{ type: mongoose.Schema.Types.Mixed, ref: "Comments" }]
});

var topicSchema = mongoose.Schema({
  name: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  category: { type: String },
  title: { type: String },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  posts: { type: Number }
});

var postsSchema = mongoose.Schema({
  name: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  topic_id: { type: mongoose.Schema.Types.ObjectId, ref: "Topics" },
  comments: { type: mongoose.Schema.Types.Mixed, ref: "Comments" },
  post: { type: String },
  like: { type: Number },
  dislike: { type: Number },
  created_at: { type: Date, default: Date.now }
});

var commentsSchema = mongoose.Schema({
  name: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  topic_id: { type: mongoose.Schema.Types.ObjectId, ref: "Topics" },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Posts" },
  comment: { type: String },
  created_at: { type: Date, default: Date.now }
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(done){
  this.email = this.email.toLowerCase();
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  done();
});

mongoose.model("Users", userSchema);
mongoose.model("Topics", topicSchema);
mongoose.model("Posts", postsSchema);
mongoose.model("Comments", commentsSchema);