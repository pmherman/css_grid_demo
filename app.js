
const INPUT = 'The quick brown fox jumped under the nearby tree. What the fox did next suprised the crowd. The silence was followed by the applause. Applause that lasted for minutes. The fox blushed under the tree.'


result = (value) => {
    var inputArray = value.toLowerCase().replace(/\./g,"").split(" ");
    var object = {};


    inputArray.forEach(function (item) {

      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })
    for ( const [key, value] of Object.entries(object)) {
      if (value > 1) {
        console.log(`${key}: ${value}`);
      }
      
    }


}


result(INPUT);