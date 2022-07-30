// TODO: eventually we'll add an array of move subdocuments

const mongoose = require('mongoose')

// const moveSchema = require('./move')

const { Schema, model } = mongoose

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        },
        age: {
            type: Number,
        },
        origin: {
            type: String,
            required: true
        },
		eyeColor: {
            type: String,
            required: true
        },
		bloodType: {
            type: String,
            required: true
        },
		height: {
            type: Number,
            required: true
        },
		weight: {
            type: Number,
            required: true
        },
		isADandy: {
			type: Boolean,
			default: false,
		},
        //moves: [moveSchema],
        // owner: {
		// 	type: Schema.Types.ObjectId,
		// 	ref: 'User'
		// }
    }
	, {
        timestamps: true,
        // we're going to be adding virtuals to our model, the following lines will make sure that those virtuals are included whenever we return JSON or an Object
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
)

// virtuals go here
// these are virtual properties, that use existing data(saved in the database), to add a property whenever we retieve a document and convert it to JSON or an object.
characterSchema.virtual('fullStats').get(function () {
    // in here, we can do whatever javascripty things we want, to make sure we return some value that will be assigned to this virtual
    // fullTitle is going to combine the name and type to build a title
    return `${this.name} is ${this.height} cm and ${this.weight} kg.`
})


module.exports = model('Character', characterSchema)