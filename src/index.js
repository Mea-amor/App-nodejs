import _ from 'lodash';
import './style.css';
import Icon from './Avatari.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello world', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = Icon;

    // element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());