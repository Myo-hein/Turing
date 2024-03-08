function delay(x)
{
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log('Executed after 5 seconds');
      reslove(x + 200);
    })
  }, 5000);
}

new Promise((reslove, reject) => {
  setTimeout(()=> {
    console.log('Code executed after 3 secs');
    reslove(100);
  }, 3000);
}).then(x => x + 1)
  .then(delay)
  .then(console.log);

console.log('Done');