import mongoose, { Document, model, Schema } from "mongoose";
// interface of schema
interface ICourse extends Document {
    image: string | null;
    title: string;
    price: number;
    tag: string;
    description: string;
    longDescription: string;
    viewCount: number;
    createdAt?: Date,
    updatedAt?: Date
}
const CourseSchema = new Schema<ICourse>({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    longDescription: {
        type: String,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

});

const CourseModel = mongoose.models.Course || model<ICourse>("Course", CourseSchema);

export default CourseModel