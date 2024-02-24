import { component$ } from '@builder.io/qwik';

export const Child=component$(()=>{return<p>Power of One</p>;});export const Parent=component$(()=>{return(<h1><Child /></h1>);});export const Kurt=component$(()=>{return<p>Technology</p>;});export const Cobain=component$(()=>{return(<h1><Kurt /></h1>);});

/*
export const Child = component$(() => {
  return <p>Power of One</p>;
});
   
export const Parent = component$(() => {
  return (
    <h1>
      <Child />
    </h1>
  );
});

export const Kurt = component$(() => {
  return <p>Technology</p>;
});
   
export const Cobain = component$(() => {
  return (
    <h1>
      <Kurt />
    </h1>
  );
  
});

*/