class Base {
	serialize(): any[]{
		var arr = this._serialize()
		arr.unshift(this.constructor.name)
		return arr
	}
	_serialize(): any[]{
		return []
	}
}
