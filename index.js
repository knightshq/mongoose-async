import mongoose from 'mongoose'

export default function mongooseAsync(model) {
	return function() {
		save: () => {
				return new Promise((resolve, reject) => {
					model.save((err) => {
						if(err) reject(err)

						resolve()
					})
				})
		}
	}
}
