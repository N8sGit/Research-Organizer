
var exInput1 = <p draggable="true" ondrag="myFunction(event)">Drag me!</p>

//Clipboard and notes functionality should intertwine

export default class Clipboard{
    constructor(){
      this.snippets = [];
      this.data = {};
    }

   copy(highlighted){
     const leng = highlighted.length
     this.snippets.push(highlighted.slice(0,leng))
  }

}
