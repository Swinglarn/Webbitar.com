(function(){
  var page = document.body.getAttribute('data-page') || '';

  var nav =
  '<header><div class="wrap nav">'+
    '<a class="brand" href="index.html"><img src="assets/logo-black.png" alt="Webbitar"><span>WEBBITAR</span></a>'+
    '<nav class="nav-links" id="navlinks">'+
      '<a href="about.html" data-p="about">About</a>'+
      '<a href="portfolio.html" data-p="portfolio">Portfolio</a>'+
      '<a href="client-services.html" data-p="client">Client Services</a>'+
      '<a href="pricing.html" data-p="pricing">Pricing</a>'+
      '<a href="contact.html" data-p="contact" class="nav-cta">Get a quote</a>'+
    '</nav>'+
    '<button class="menu-btn" id="menuBtn" aria-label="Menu">&#9776;</button>'+
  '</div></header>';

  var foot =
  '<footer><div class="wrap">'+
    '<div class="foot-top">'+
      '<div>'+
        '<div class="foot-brand"><img src="assets/logo-white.png" alt="Webbitar"><span>WEBBITAR</span></div>'+
        '<p style="margin-top:16px;font-size:14px;color:#8a887f;max-width:34ch">Web design, hosting, and care for businesses that want to be found.</p>'+
      '</div>'+
      '<div class="foot-cols">'+
        '<div class="foot-col"><h5>Studio</h5>'+
          '<a href="about.html">About</a>'+
          '<a href="portfolio.html">Portfolio</a>'+
          '<a href="client-services.html">Client Services</a>'+
          '<a href="pricing.html">Pricing</a>'+
        '</div>'+
        '<div class="foot-col"><h5>Contact</h5>'+
          '<a href="contact.html">Get a quote</a>'+
          '<a href="mailto:hello@webbitar.com">hello@webbitar.com</a>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="foot-bot"><span>&copy; 2026 Webbitar. All rights reserved.</span><span>Built &amp; hosted in-house.</span></div>'+
  '</div></footer>';

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', foot);

  // active link
  document.querySelectorAll('.nav-links a').forEach(function(a){
    if(a.getAttribute('data-p')===page) a.classList.add('active');
  });

  // mobile menu
  var mb=document.getElementById('menuBtn');
  if(mb) mb.addEventListener('click',function(){document.getElementById('navlinks').classList.toggle('open');});
  document.querySelectorAll('#navlinks a').forEach(function(a){
    a.addEventListener('click',function(){document.getElementById('navlinks').classList.remove('open');});
  });

  // reveal on scroll
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
