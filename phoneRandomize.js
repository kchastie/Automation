export function makePhone() {
    var text = "";
    var possible = "1234567890";
  
    for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makePhone());
  export default {makePhone};