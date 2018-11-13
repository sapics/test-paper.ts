class Point extends Base {
	x: number
	y: number
	
	constructor(x?: number, y?: number);
	constructor(arr: number[]);
	constructor(arg1?: any, arg2?: any){
		super()
		if(typeof arg1 === 'number'){
			this._set(arg1, arg2 == null ? arg1 : arg2)
		} else if(!arg1){
			this._set(0, 0)
		} else {
			this._set(arg1[0], arg1[1])
		}
	}
	
	_set(x: number, y: number){
		this.x = x
		this.y = y
	}

	serialize(){
		return [this.x, this.y]
	}
}
