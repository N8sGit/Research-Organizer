
var exInput1 = <p draggable="true" ondrag="myFunction(event)">Drag me!</p>

//Clipboard and notes functionality should intertwine

export default class Clipboard{
    constructor(){
      this.snippets = [];
    }

  function copy(highlighted){
     const leng = highlighted.length
     this.snippets.push(highlighted.slice(0,leng))
  }





  const data = {
  }
}
