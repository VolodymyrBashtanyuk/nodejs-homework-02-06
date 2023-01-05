const { Schema, model } = require('mongoose');

const handleMongooseError = require('../helpers/mongooseError');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            match: emailRegexp,
            unique: true,
        },
        subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter"
        },
        // token: {
        //     type: String,
        //     default: null,
        // },
        //     owner: {
        //     type: SchemaTypes.ObjectId,
        //     ref: 'user',
        // }
    }, {versionKey: false}
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = User;