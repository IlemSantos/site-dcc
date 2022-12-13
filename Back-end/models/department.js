import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const DepartmentSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    author: { type: String },
    body: [{ type: String, required: true }],
    status: { type: String },
}, {
    timestamps: true
});

export default model('department', DepartmentSchema);
