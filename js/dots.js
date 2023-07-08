
const canvasDots = function() {

  const canvas = document.querySelector('canvas');

  if (!canvas) { return; }

  const ctx = canvas.getContext('2d'),
        fillColor = 'rgba(255,255,255, .7)',
        strokeColor = 'rgba(255,255,255, 0)',
        d_width = document.documentElement.scrollWidth,
        d_height = document.documentElement.scrollHeight;

  canvas.width = d_width;
  canvas.height = d_height;
  canvas.style.display = 'block';

  ctx.fillStyle = fillColor;
  ctx.lineWidth = .3;
  ctx.strokeStyle = strokeColor;

  const mousePosition = {
    x: 30 * canvas.width / 100,
    y: 30 * canvas.height / 100
  };

  const dots = {
    nb: 300,
    distance: 70,
    d_radius: 100,
    array: []
  };

  function Dot() {

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();

    this.radius = Math.random();
  }

  Dot.prototype = {

    create: function() {

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function() {

      for (i = 0; i < dots.nb; i++) {
        var dot = dots.array[i];

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }
  };

  function createDots() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot());
      dot = dots.array[i];

      dot.create();
    }

    dot.animate();
  }

  window.onmousemove = function(parameter) {
    mousePosition.x = parameter.pageX;
    mousePosition.y = parameter.pageY;
  };

  mousePosition.x = d_width / 2;
  mousePosition.y = d_height / 2;

  setInterval(createDots, 1000 / 30);
};

window.onload = function() {
  // canvasDots();
};
