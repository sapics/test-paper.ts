class Rectangle extends Base {
  x: number
  y: number
  width: number
  height: number
  serialize() {
    return [this.x, this.y, this.width, this.height]
  }
  getPoint() {
    return new Point(this.x, this.y)
  }
}

