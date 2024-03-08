function factorial(n)
{
  let result = 1;
  for(let i = 1; i <= n; i++)
  {
    result *= i;
  }
  return result;
}

for(let i = 0; i < 40000; i++)
{
  console.log('Something', i);
}

onmessage = (event) => {
  let result = factorial(event.data.data);
  console.log('Result ',result);
  postMessage({
    data : result
  });
}

console.log('Worker.js loaded...');