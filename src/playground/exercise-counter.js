let count=0;
const addBtnId='addCount';
const addCounter=()=>{
  count++;
  reRenderApp();
}
const subtractCounter=()=>{
  count--;
  reRenderApp();
}
const resetCounter=()=>{
  count=0;
  reRenderApp();
}
const root = document.getElementById('app');
const reRenderApp=()=>{
  const templateThree=(
    <div>
      <h5>The current count {count}</h5>
      <button id={addBtnId} className="button" onClick={addCounter}>+</button>
      <button className="button" onClick={subtractCounter}>-</button>
      <button className="button" onClick={resetCounter}>Reset</button>
    </div>
  );
  ReactDOM.render(templateThree, root);
}
reRenderApp();