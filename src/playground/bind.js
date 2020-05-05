const appOption = {
    name: 'indecesion',
    title: 'new',
    getProps() {
      return this.title
    }
  }
  console.log(appOption.getProps());
  const getPropFn = appOption.getProps.bind({ title: 'fafafa' });
  console.log(getPropFn());