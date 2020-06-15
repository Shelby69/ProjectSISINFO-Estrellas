var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var EstrellaSchema = Schema(
	{
	tipo:String,
	tamaño: String,
	brillo:String,
	color:String,
	temperatura:String,
	nombre:String,
	edad:String,
	imagen:String
	}
);

module.exports = mongoose.model('Estrella',EstrellaSchema);
