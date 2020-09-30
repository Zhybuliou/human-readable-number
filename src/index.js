module.exports = function toReadable (number) {

    let array1_19 = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let array20_90 = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


  let num = number.toString();
  let res = '';
  num = num.replace(/[\, ]/g,'');
       if(number === 0 ){
         res = 'zero';
     }
  else if(number < 20){
    res = array1_19[number];
  }else if(num.length < 3){
    res =  array20_90[num[0]] + ' ' + array1_19[num[1]];
  }else if(num.length < 4 ){
     if( num[1] !== '1'){
      res = array1_19[num[0]] + ' hundred ' + array20_90[num[1]] + ' ' + array1_19[num[2]];
     }else{
      res =  array1_19[num[0]] + ' hundred ' + array1_19[num[1] + num[2]];
     } 
  }
  res = res.replace(/ +/g, ' ').trim();
  return res;  
  };
