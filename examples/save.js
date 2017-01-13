import mongooseAsync from './index'
import mongoose from 'mongoose'

class Holiday {
	kitty = null

	constructor () {
		mongoose.connect('mongodb://localhost/test');
		let Cat = mongoose.model('Cat', { name: String });
		let kitty = new Cat({ name: 'Zildjian' });

		this.kitty = kitty
	}
	async destinations () {
		let status = await mongooseAsync(this.kitty)('save')
	}
}

let hl = new Holiday()
hl.destinations()
