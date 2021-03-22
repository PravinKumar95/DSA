
/* Note this is not the efficient way to manipulate arrays, its done this way
   to demonstrate how arrays work
*/
export default class MyArray {
    data: any[];
    constructor() {
        this.data = []
    }
    getData(index:number): any{
        if(index > this.data.length)
        throw new Error("Invalid location specified or not data exist at given location");
        return this.data[index]
    }

    insert(value:any,index:number) {
        let offset = this.data.length - index;
        // allowing to insert into an empty array
        if(offset < 0 || this.data.length == index && index !== 0)
        throw new Error("Invalid location specified");

        let copyRightPart = [];
        // make a copy of items after insert location
        for(; offset < this.data.length; offset++){
            copyRightPart.push(this.data[offset]);
            // clean it in original array
            this.data[offset] = null;
        }
        // insert given value in correct index
        this.data[index] = value;
        // add the right part back
        this.data = [...this.data, ...copyRightPart];

    }
    search(value:any ): number {
        return 0;
    }
    delete() {

    }
}