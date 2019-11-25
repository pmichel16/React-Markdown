/*
 * Make a window draggable by clicking on its header.
 * Adapted from: https://www.w3schools.com/howto/howto_js_draggable.asp
 */

export function dragElement(header, container) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    container.style.top = (container.offsetTop - pos2) + "px";
    container.style.left = (container.offsetLeft - pos1) + "px";
    //Make sure the window doesn't go off the page
    if (parseFloat(container.style.top) < 0) {
      container.style.top = "0px";
    }
    if (parseFloat(container.style.left) < 0) {
      container.style.left = "0px";
    }
    if (parseFloat(container.style.left)+parseFloat(container.style.width) > parseFloat(document.getElementById("root").style.width)) {
      container.style.left = parseFloat(document.getElementById("root").style.width) - parseFloat(container.style.width) + 'px';
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*
 * Make an element no longer draggable, and remove its resizing.
 */
export function removeDrag(header, container) {
  container.style.top = null;
  container.style.left = null;
  container.style.width = null;
  container.style.height = null;
  header.style.top = null;
  header.style.left = null;
  header.onmousedown = null;
}