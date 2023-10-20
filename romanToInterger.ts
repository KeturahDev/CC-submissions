function romanToInt(s: string): number {
  const romanNums: string[] = s.toUpperCase().replaceAll(/[^IVXLCDM]/g, '').split('');
  console.log(romanNums);
  if (romanNums.length > 15 || romanNums.length < 1) {
    return 0;
  }
  let result: number = 0;
  for (let i = romanNums.length -1; i >= 0; i--) {
    console.log("result", result);
    switch(romanNums[i]) {
      case "I":
        romanNums[i + 1] === "V" || romanNums[i + 1] === "X" ? result -= 1 : result += 1;
        break;
      case "V":
        result += 5;
        break;
      case "X":
        romanNums[i + 1] === "L" || romanNums[i + 1] === "C" ? result -= 10 : result += 10;
        break;
      case "L":
        result += 50;
        break;
      case "C":
        romanNums[i + 1] === "D" || romanNums[i + 1] === "M" ? result -= 100 : result += 100;
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result +=1000;
        break;
      default:
        break;
    }
  }
      

  if (result > 3999) {
    return 0;
  } else {
    return result;
  }
};                                                                                                                                                                          