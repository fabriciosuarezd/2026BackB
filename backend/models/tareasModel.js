const mongoose = require ('mongoose')

const TareasSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Por favor teclea una descripcion']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', TareasSchema)