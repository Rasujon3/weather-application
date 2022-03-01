const baperTaka = 100000;
function PatriChai(age, earning) {
  //   console.log(trueAge);
  var decision = canMarry(15000);
  console.log(decision);
  console.log(age);
  console.log(earning);
  const trueAge = age + 7;
  function canMarry(expense) {
    const remaining = baperTaka + earning - expense;
    // console.log(showing);

    if (remaining > 1000) {
      var showing = 500;
      console.log(showing);
      return true;
    }
    return false;
  }
}
PatriChai(21, 50000);
