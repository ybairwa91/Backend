/*
//learning
what is npm,we use it,how to install,type of dependencies,installing locally and globally,
knowing about package.json and node_module files

NPM
  A COMMAND LINE INTERFACE APP that use to manage and install open source packages.
  these packages comes with bunch of js files also npm.
  use to manage 3rd party packages that we include to use in our applications






Scenario before npm ,
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


*/


