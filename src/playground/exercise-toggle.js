console.log('App.js is running!');

const app = {
  title: 'Visibility Toggle',
  visibility: false,
};
const toggleVisibility = () => {
  app.visibility = !app.visibility;
  render();
}

const root = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h4>{app.title}</h4>
      <button onClick={toggleVisibility}>{app.visibility ? 'Hide Details' : 'Show Details'}</button>
      {app.visibility && (
        <div>
          <p>You can see this details</p>
        </div>)
      }
    </div>
  );
  ReactDOM.render(template, root);
}
render();