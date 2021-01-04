'use strict';

function DomElement(selector, height, width, bg, fontSize, position, top, left, right, bottom) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.top = top;
  this.left = left;
  this.right = right;
  this.bottom = bottom;


}

let newDomElement1 = new DomElement('.block', '200px', '300px', 'red', '26px');
let newDomElement2 = new DomElement('#paragraph', '50px', '1000px', 'blue', '30px');
let newDomElement3 = new DomElement('.second-block', '100px', '100px', 'green', '10px', 'absolute', 0, 0, 0, 0);

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
DomElement.prototype.eventListener = function() {
  document.addEventListener('DOMContentLoaded', function() {
    let div = document.createElement('div');
    div.classList.add(newDomElement3.selector.substring(1));
    div.style.cssText = `width:${newDomElement3.width}; height:${newDomElement3.height};
    background-color:${newDomElement3.bg}; font-size:${newDomElement3.fontSize}; position:${newDomElement3.position};`;
    document.querySelector('.block').after(div);
    document.addEventListener('keydown', function(event) {
      if (event.code === 'ArrowUp') {
        div.style.bottom = newDomElement3.top * 10 + 'px';
        return newDomElement3.top++;
      }
      if (event.code === 'ArrowRight') {
        div.style.left = newDomElement3.right * 10 + 'px';
        return newDomElement3.right++;
      }
      if (event.code === 'ArrowDown') {
        div.style.bottom = newDomElement3.top * 10 + 'px';
        return newDomElement3.top--;
      }
      if (event.code === 'ArrowLeft') {
        div.style.left = newDomElement3.right * 10 + 'px';
        return newDomElement3.right--;
      }
    });
  });
};


DomElement.prototype.createElement();
DomElement.prototype.eventListener();

