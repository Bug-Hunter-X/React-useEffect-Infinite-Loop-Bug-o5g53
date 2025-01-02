# React useEffect Infinite Loop Bug

This repository demonstrates a subtle and uncommon bug involving an infinite loop within a React `useEffect` hook. The bug is triggered by improperly handling dependencies, leading to a constant re-rendering of the component.

## Bug Description
The `useEffect` hook in `MyComponent` attempts to update the `count` state within its callback function without including `count` as a dependency. This leads to an infinite loop because the state update causes a re-render, which in turn re-executes the `useEffect` hook. The problem is further masked by the empty dependency array `[]`, which suggests the effect should only run once.

## How to reproduce
Clone the repository and run `npm install`. Then, run `npm start` to run the application. Observe the console for warnings, then see the component render with constantly increasing number, indicating the infinite loop.