# react-training

## LearnCodeAcademy vids

## 1st exercise

### convention to capitalize components in react (ex: Layout.js)
- its capitalized because they are constructor, they r not rendered DOM element yet, it has the capacity
- if u wanna render multiple elements in render(), must wrap them up using div

### state vs props & app data
- state will be null by default
- dom automatically updated if state is updated (virtual dom), as we see in video 4
- if theres something that affects only layout, state may be appropriated, otherwise props

### Javascript Events n Data changes in React

- when passing a function or methods around, u always wanna bind them to this, otherwise theyre gonna execute in the context of whoever is calling them

## 2nd exercise react-router

- One reason browserHistory is preferred over hashHistory is that it is better for deployment and production. hashHistory "works" by adding a unique key at the end of the url and creates a "history" for this by using these keys to keep track of your current session. browserHistory looks much cleaner without the #, but in order to get this set up, you need to configure your server such that it can handle the URLs you intend to provide it.
