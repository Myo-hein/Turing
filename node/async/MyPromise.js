class MyPromise
{
  handler = [];
  constructor(callback)
  {
    this.callback = callback;
    this.callback(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(data)
  {
    console.log('Resolve ', data);
    let accumalator = data;
    for(const handler of this.handler)
    {
      accumalator = handler(accumalator);
    }
  }

  reject(data)
  {
    console.log('Reject ', data);
  }

  then(handler)
  {
    this.handler.push(handler);
    return this;
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('Executed after 3 seconds.')
    resolve(100);
  }, 3000);
})
.then(x => x + 1)
.then(x => console.log('Success ', x), err => console.log('Error ', err));