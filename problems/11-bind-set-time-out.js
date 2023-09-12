const boundFuncTimer = (o, f, d, _=f.bind(o)) => setTimeout(_, d);

function boundFuncTimer(obj, func, delay) {
  const boundFunction = func.bind(obj);
  setTimeout(boundFunction, delay);
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;