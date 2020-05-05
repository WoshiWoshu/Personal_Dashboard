const mongoose = require('mongoose');

const weatherSchema = mongoose.Schema({
    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    condition: { type: String, required: true},
    wind: { type: Number, required: false },
    humidity: { type: Number, required: false },
    pressure: { type: Number, required: false },
    forecast: { type: Array, required: false }
});

module.exports = mongoose.model('Weather', weatherSchema);
