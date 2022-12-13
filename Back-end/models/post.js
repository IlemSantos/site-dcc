import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    id: { type: Number, required: true },
    slug: { type: String, required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
    link: { type: String },
    title: { type: String, required: true },
    content: [{ type: { type: String }, children: [{ text: { type: String } }] }],
    author: { type: String },
}, {
    timestamps: true
});

export default model('post', PostSchema);
