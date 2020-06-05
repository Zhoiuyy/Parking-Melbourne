const mongoose = require('mongoose');

// feedback schema stored in the database
const layerSchema = new mongoose.Schema({
    bay_id:Number,
    rd_seg_dsc:String,
});

const Layer = mongoose.model("layer", layerSchema,"layer");

module.exports = Layer;

