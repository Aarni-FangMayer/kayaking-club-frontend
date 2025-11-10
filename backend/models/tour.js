const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;
// const url = `mongodb+srv://river_pulse_project:${password}@cluster0.gdspmhq.mongodb.net/tourListApp?retryWrites=true&w=majority&appName=Cluster0`; /* modificate this */
console.log('connecting to', url)

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

  const tourSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  description: String,
  difficulty: String,
  dateOfTrip: String,
  included: String,
  forBeginners: String,
  duration: String,
  price: Number,
  image: String,
  accountId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

tourSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;