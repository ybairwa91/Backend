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