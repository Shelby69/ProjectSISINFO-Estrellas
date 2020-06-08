var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var EstrellaSchema = Schema(
{
	Tipo:String,
	Tamaño:String,
	Brillo:String,
	Color:String,
	Temperatura:String,
	Nombre:String,
	Edad:String
});

module.exports = mongoose.model('Estrellas', EstrellaSchema);