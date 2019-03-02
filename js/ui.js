/**
 * Shows the hidden content
 * @method showContent
 * @param  {object} event The event object
 * @return {undefined}
 */
function showContent(event) {

  event.target.parentNode.classList.add('show');
}

const trigger = [...document.querySelectorAll('.trigger')];

trigger.forEach(t => t.addEventListener('click', showContent));
