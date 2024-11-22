import mongoose, { Document, model, Schema } from "mongoose";

export interface IBlog extends Document {
    title: string;
    description: string;
    tag: string[];
    image: string | null;
    viewCount: number;
    createdAt?: Date,
    updatedAt?: Date
}

const BlogSchema = new Schema<IBlog>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    viewCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const BlogModel = mongoose.models.Blog || model<IBlog>("Blog", BlogSchema)
export default BlogModel