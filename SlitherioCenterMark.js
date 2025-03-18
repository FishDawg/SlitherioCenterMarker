// ==UserScript==
// @name         Slither.io Center Marker
// @namespace    http://fishdawg.com/userscript/slither/centermarker
// @version      1.0
// @description  Places a mark at the center of the map.
// @author       FishDawg
// @match        http*://slither.io/
// @match        http*://slither.com/io
// @grant        none
// @compatible   Greasemonkey
// @downloadURL  https://github.com/FishDawg/SlitherioCenterMarker/raw/master/slitheriocentermarker.js
// ==/UserScript==

(function(){
  var markerBox;

  function updatePosition() {
    if (window.ovxx > 31500 && window.ovxx < 33500 && window.ovyy > 31500 && window.ovyy < 33500) {
      markerBox.style.left = (32500 - window.ovxx) * 2 + window.innerWidth / 2 - markerBox.offsetWidth / 2;
      markerBox.style.top = (32500 - window.ovyy) * 2 + window.innerHeight / 2 - markerBox.offsetHeight / 2;
      markerBox.style.display = 'block';
    } else {
      markerBox.style.display = 'none';
    }

    requestAnimationFrame(updatePosition);
  }

  function disableScrolling() {
    document.body.style.overflow = 'hidden';
  }

  function createMarkerBox() {
    markerBox = document.createElement('div');

    markerBox.id = 'marker-box';
    markerBox.style.display = 'none';
    markerBox.style.position = 'absolute';
    markerBox.style.left = '-1000px';
    markerBox.style.top = '-1000px';
    markerBox.style.width = '50px';
    markerBox.style.height = '50px';
    markerBox.style.transition = ''
    markerBox.style.borderStyle = 'solid';
    markerBox.style.borderWidth = '5px';
    markerBox.style.borderColor = 'green';
    markerBox.style.borderRadius = '100%';
    markerBox.style.zIndex = 1800;
    markerBox.style.pointerEvents = 'none';

    document.body.appendChild(markerBox);
  }

  function initialize() {
    disableScrolling();
    createMarkerBox();

    setTimeout(updatePosition, 1000);
  }

  window.addEventListener('load', initialize);
})();
