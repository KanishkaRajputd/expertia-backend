const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    skills: [{ type: String, required: true }],
    ctc: { type: Number, required: true },
    careerGrowth: { type: String, required: true },
    jobTitle: { type: String, required: true },
    stage: {
        type: String,
        enum: ['stageFirst', 'stageSecond','finalStage','Qualified', 'Disqualified'],
        default: 'stageFirst',
        required: false
    },
    location: { type: String, required: true },
    Category:{type:String,required:true,default:"Company"}
    
}, {
    versionKey: false,
    timestamps:true
}
)
module.exports = mongoose.model("jobs-description", jobSchema);
