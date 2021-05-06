function regCheck(numPlate, Loc) {
    return (numPlate.endsWith(Loc));
  }
console.log(regCheck('DV 23 NB GP', 'GP'));
console.log(regCheck('DV 23 LP GP', 'MP'));
console.log(regCheck('DV 23 LP GP', 'MP'));
console.log(regCheck('CY 189-012', 'ND'));