declare class Base {
    serialize(): any[];
    _serialize(): any[];
}
declare class Point extends Base {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    constructor(arr: number[]);
    _set(x: number, y: number): void;
    serialize(): number[];
}
declare class Rectangle extends Base {
    x: number;
    y: number;
    width: number;
    height: number;
    serialize(): number[];
    getPoint(): Point;
}
//# sourceMappingURL=paper.d.ts.map