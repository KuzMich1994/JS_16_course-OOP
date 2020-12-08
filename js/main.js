'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

let newDomElement1 = new DomElement('.block', '200px', '300px', 'red', '26px');
let newDomElement2 = new DomElement('#paragraph', '50px', '1000px', 'blue', '30px');

DomElement.prototype.createElement = function() {
  if (newDomElement1.selector.startsWith('.')) {
    let div = document.createElement('div');
    div.classList.add(newDomElement1.selector.substring(1));
    div.style.cssText = `height:${newDomElement1.height}; width:${newDomElement1.width};
    background-color:${newDomElement1.bg};font-size:${newDomElement1.fontSize}`;
    div.textContent = 'Урааааааа! У меня получилось!';
    document.body.prepend(div);
  }
  if (newDomElement2.selector.startsWith('#')) {
    let paragraph = document.createElement('p');
    paragraph.setAttribute('id', `${newDomElement2.selector.substring(1)}`);
    paragraph.style.cssText = `height:${newDomElement2.height}; width:${newDomElement2.width};
    background-color:${newDomElement2.bg}; font-size:${newDomElement2.fontSize}`;
    paragraph.textContent = 'Урааааааа! У меня получилось!';
    document.body.prepend(paragraph);
  }
};


DomElement.prototype.createElement();

