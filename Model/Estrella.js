var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var EstrellaSchema = Schema(
	{
	tipo:String,
	tamaño: Number,
	brillo:String,
	color:String,
	temperatura:Number,
	nombre:String,
	edad:Number,
	imagen:String
	}
);

module.exports = mongoose.model('Estrella',EstrellaSchema);
