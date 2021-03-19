# React Datepicker Input
I created this project with the intention of learning React and creating my first webpack configuration from scratch.

If you want to test this component you can download this repository and execute the following commands:

```
npm install
npm start
```

This will start a local dev server in localhost with port 3000 and it will also install all the required dependencies

My webpack configuration is pretty basic. But it is not optimized for building the application for production. It needs to have a loader for extracting scss files into css. And probably it also needs other things to be ready for production but right know I don't have that knowledge

In react I used the dropdown component that takes a trigger component and children component and it renders both components. The trigger automatically is embraced by a container that has the onclick event. When the dropdown is open it will render its children prop into a position absolute window