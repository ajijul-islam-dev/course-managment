// Video inside a Module
import  mongoose  from 'mongoose';


const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

// Module inside a Subject
const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videos: [videoSchema],
});

// Course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true }, // frontend sends instructor id
  duration: { type: Number }, // optional
  price: { type: Number, required: true },
  category: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  thumbnail: { type: String }, // frontend thumbnail
  subjects: [{ type: String, required: true }], // ["Math", "English"]
  modules: {
    type: Map,
    of: [moduleSchema],
    required: true,
    // structure: { "Math": [{ title: "Intro", videos: [...] }, ...] }
  },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course;