const {Model} = require('../models/user');
const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const commonMethod = require('../services/commonMethod');
module.exports = {
	post(req, res){
		commonMethod.postModel(Model, req, res);
	},
	get(req, res) {
		//filter should come from request
		const filter = {
			//write filter
		}
		commonMethod.getByFilter(Model, filter, req, res);
	},

	getById(req, res) {
		commonMethod.getById(Model, req, res);
	},

	patchById(req, res){
		//pickArray should come from request
		let pickArray = ['UserName', 'Email','Phone','UserPsw'];
		commonMethod.patchById(Model, pickArray, req, res);
	},

	deleteById(req, res){
		commonMethod.deleteById(Model, req, res);
	}
}