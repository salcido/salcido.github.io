
const int = setInterval(() => {

  switch ( document.readyState ) {

    case 'interactive':
    case 'complete':

      clearInterval(int);
      init();
  }
}, 13);


/**
 * Sets the gradient on the body element
 * @method setGradient
 * @return {undefined}
 */
function setGradient() {

  // ['background', 'link-color', 'link-hover-color']
  const gradients = [
                     [
                      '#67529A, #882B2B, #441824',
                      '#00fff9',
                      '#00fff9'
                     ],
                     [
                      '#2b2b2b, #2b2b2b',
                      '#5bcef1',
                      '#a6f0ff'
                     ],
                     [
                      '#32345E, #836071, #C3623C, #621F0C',
                      '#00d5ff',
                      '#00d5ff'
                     ],
                    //  [
                    //   '#005BC9, #A25390, #202020',
                    //   '#4ae2ff',
                    //   '#4ae2ff'
                    //  ],
                     [
                      '#190E41, #3E1751, #6A252A, #0C0207',
                      '#4ae2ff',
                      '#4ae2ff'
                     ]
                  //  ['#67A295, #87B492, #B0BA89, #C6BD7E, #F4B462, #FFB45A, #DD6451, #7F3C62', '#00d5ff'], // Day
                  // ['343deg, #2b2b2b 0%, #2b4a5a 100%', '#00d5ff', '#00d5ff']
                    ],
        total = gradients.length,
        rand = Math.floor(Math.random() * total);

  document.body.style.setProperty('--gradient', `linear-gradient(${gradients[rand][0]})`)
  document.body.style.setProperty('--electric', `${gradients[rand][1]}`);
  document.body.style.setProperty('--electric-hover', `${gradients[rand][2]}`);;
}


/**
 * Sets the background color on the html element
 * @method setBg
 * @param  {object} mq The media query object
 * @return {undefined}
 */
function setBg(mq) {

  if (mq.type === 'change') { setGradient(); }
}


/**
 * Sets the date in the footer and adds the media query listener
 * @method   init
 * @return   {undefined}
 */
function init() {

  const date = new Date(),
        mq = window.matchMedia('(max-width: 850px)'),
        currentYear = date.getFullYear();

  mq.addListener(setBg);

  setGradient();

  document.querySelector('.footer').innerHTML = `&copy; ${currentYear} msalcido.com`;

  if (mq.matches) {

    document.querySelector('.connecting-dots').remove();
  }
}
