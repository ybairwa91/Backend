/*
//learning
what is npm,we use it,how to install,type of dependencies,installing locally and globally,
knowing about package.json and node_module files


NPM
  A COMMAND LINE INTERFACE APP that use to manage and install open source packages.
  these packages comes with bunch of js files also npm.
  use to manage 3rd party packages that we include to use in our applications


SCENARIO BEFORE NPM ,
to install or include any library for our app functionalities we use to include library using script tag
ie
<script src="link of library mentioned in modules(CDN)"></script>

but why we need npm if we doing this,well it created problem in our big projects where including lot of libraries using script tag may
 creates index.html looks filthy and doesnot sound good right,or saying messy is right word,and yes if new updates comes or new version there
 then we have to manually update that src attribute that makes it more harder to use,and no single file or repository that contains all the files at
 just one place.
 so that where npm invention comes into picture

// STEPS

1ST check you npm installed or not in your pc
 open terminal use cmd is [npm -v]
 if got a number means u do have installed
 if showing error then install nodejs from website and then again apply same cmd to check

2nd Step is to now init npm using cmd [npm init]
  it will ask some question fill it and press yes
  it will install a package.json file in your file or say project
  hurray u got what u want



  lets use npm and install a leaflet library
  cmd is [npm install leaflet]
  now check package.json u will see a new field or to say library names leaflet means u installed it correctly
  and also downloaded a file called node_module which has all functionalities u going to use

  if we any library uses commonjs module system we can not directly use it,we need module bundler to import it


  
lets install lodash
  
In the browser using index.html
 <script src="lodash.js"></script>


Using npm
$ npm i -g npm
$ npm i --save lodash


In Node.js:
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN'



//install es version
npm install lodash-es



//Import lodash
import { cloneDeep } from "./node_modules/lodash-es/cloneDeep";



const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true }
}
const stateClone = Object.assign({}, state)

console.log(stateClone);

state.user.loggedIn = false;
console.log(stateClone);

//use lodash

const stateDeepClone = cloneDeep(state)
console.log(stateDeepClone);


//NOTE-never include node_module folder when u share ur project or send to someone because it can be retrive back using npm i
//never delete package.json fill it will help to install all lib using npm i in another place



//TYPES OF PACKAGES AND INSTALLS

2 TYPE OF PACKAGES 
A.simple dependencies(or saying regular dependencies)
B.development dependencies

Simple dependencies
  these dependencies are some code that include in our code
  means code upon which we build our own application
  thats why we call it dependencies because our code depend on it
  ie nodejs depends on ExpressJs framework

  ie.slugify
  npm install nameofdependency 
  here it is 
  npm install slugify
or 
npm install slugify --save

check package.json file u will find slugify in dependencies object fields


DEVELOPMENT DEPENDENCY
    usually tools for development ie code bundler like webpack
    or debugger tool library which is itself a tool and enhance our functioning
    they are not needed for production means our code is not actually depend on them
    we simply use them to develop our application
  
    ie nodemon
    npm install nodemon --save-dev
    last cmd --save-dev is to tell cli that its dev dependency



till now we installed packages locally
lets install some dependency globally
lets install nodemon globally
npm install nodemon --global
or
npm i nodemon --global


//how to run npm scripts
go to package.json edit script object and put start field
"start":"nodemon npm.js"

now u can simply use cmd npm start to run nodemon npm.js

*/


