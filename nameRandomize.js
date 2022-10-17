export function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());
  export default {makeid};