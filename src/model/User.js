import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    institution: {
      type: String,
      required: false,
    },
    upazilla: {
      type: String,
      required: false,
    },
    batchYear: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    classlevel: {
      type: String,
      enum: [
        "class 8",
        "ssc",
        "hsc",
      ],
      required: false,
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "student",
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);  