/**
 * Family.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	firstName:{
  		type:'string',
  		minLength:2,
  		required:true
  	},
  	lastName:{
  		type:'string',
  		minLength:2,
  		required:true
  	},
  	phoneNumber:{
  		type:'string',
  		minLength:10,
  		defaultsTo:'000-000-0000',
  		regex:/^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/
  		
  	},
  	cellPhone:{
  		type:'string',
  		minLength:10,
  		regex:/^\(?([0-9{3}])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  	},
  	emailAddress:{
  		type:'string',
  		email:true
  	},
  	homeAddress:{
  		type:'string'
  	},
  	birthDate:{
  		type:'string'
  	},
  	active:{
  		type:'integer',
  		enum:[1,0],
  		defaultsTo:1,
  		required:true
  	}
  	
  	

  }
};

