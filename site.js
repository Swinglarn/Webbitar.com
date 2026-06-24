(function(){
  var lang = document.documentElement.lang || 'en';
  var isSv = lang === 'sv';
  var prefix = isSv ? '../' : '';
  var page = document.body.getAttribute('data-page') || '';

  // Get current page filename for switcher
  var path = window.location.pathname;
  var file = path.substring(path.lastIndexOf('/') + 1) || 'index';
  var langToggleUrl = isSv ? '../' + file : 'sv/' + file;
  var langToggleText = isSv ? 'EN' : 'SV';

  var nav = '';
  if (isSv) {
    nav =
    '<header><div class="wrap nav">'+
      '<a class="brand" href="index"><img src="' + prefix + 'assets/logo-black.png" alt="Webbitar"><span>WEBBITAR</span></a>'+
      '<nav class="nav-links" id="navlinks">'+
        '<a href="about" data-p="about">Om oss</a>'+
        '<a href="portfolio" data-p="portfolio">Portfolio</a>'+
        '<a href="client-services" data-p="client">Våra tjänster</a>'+
        '<a href="pricing" data-p="pricing">Priser</a>'+
        '<a href="contact" data-p="contact" class="nav-cta">Begär offert</a>'+
        '<a href="' + langToggleUrl + '" style="border:1px solid var(--line);padding:4px 8px;border-radius:2px;font-size:12px;font-weight:600;color:var(--gold);letter-spacing:0.05em;margin-left:8px">' + langToggleText + '</a>'+
      '</nav>'+
      '<button class="menu-btn" id="menuBtn" aria-label="Meny">&#9776;</button>'+
    '</div></header>';
  } else {
    nav =
    '<header><div class="wrap nav">'+
      '<a class="brand" href="index"><img src="' + prefix + 'assets/logo-black.png" alt="Webbitar"><span>WEBBITAR</span></a>'+
      '<nav class="nav-links" id="navlinks">'+
        '<a href="about" data-p="about">About</a>'+
        '<a href="portfolio" data-p="portfolio">Portfolio</a>'+
        '<a href="client-services" data-p="client">Client Services</a>'+
        '<a href="pricing" data-p="pricing">Pricing</a>'+
        '<a href="contact" data-p="contact" class="nav-cta">Get a quote</a>'+
        '<a href="' + langToggleUrl + '" style="border:1px solid var(--line);padding:4px 8px;border-radius:2px;font-size:12px;font-weight:600;color:var(--gold);letter-spacing:0.05em;margin-left:8px">' + langToggleText + '</a>'+
      '</nav>'+
      '<button class="menu-btn" id="menuBtn" aria-label="Menu">&#9776;</button>'+
    '</div></header>';
  }

  var foot = '';
  var year = new Date().getFullYear();
  if (isSv) {
    foot =
    '<footer><div class="wrap">'+
      '<div class="foot-top">'+
        '<div>'+
          '<div class="foot-brand"><img src="' + prefix + 'assets/logo-white.png" alt="Webbitar"><span>WEBBITAR</span></div>'+
          '<p style="margin-top:16px;font-size:14px;color:#94a3b8;max-width:34ch">Webbdesign, hosting och skötsel för företag som vill synas.</p>'+
        '</div>'+
        '<div class="foot-cols">'+
          '<div class="foot-col"><h5>Studio</h5>'+
            '<a href="about">Om oss</a>'+
            '<a href="portfolio">Portfolio</a>'+
            '<a href="client-services">Våra tjänster</a>'+
            '<a href="pricing">Priser</a>'+
          '</div>'+
          '<div class="foot-col"><h5>Kontakt</h5>'+
            '<a href="contact">Begär offert</a>'+
            '<a href="mailto:webbitar@gmail.com">webbitar@gmail.com</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="foot-bot"><span>&copy; ' + year + ' Webbitar. Alla rättigheter förbehållna.</span><span>Byggd &amp; driftad in-house.</span></div>'+
    '</div></footer>';
  } else {
    foot =
    '<footer><div class="wrap">'+
      '<div class="foot-top">'+
        '<div>'+
          '<div class="foot-brand"><img src="' + prefix + 'assets/logo-white.png" alt="Webbitar"><span>WEBBITAR</span></div>'+
          '<p style="margin-top:16px;font-size:14px;color:#94a3b8;max-width:34ch">Web design, hosting, and care for businesses that want to be found.</p>'+
        '</div>'+
        '<div class="foot-cols">'+
          '<div class="foot-col"><h5>Studio</h5>'+
            '<a href="about">About</a>'+
            '<a href="portfolio">Portfolio</a>'+
            '<a href="client-services">Client Services</a>'+
            '<a href="pricing">Pricing</a>'+
          '</div>'+
          '<div class="foot-col"><h5>Contact</h5>'+
            '<a href="contact">Get a quote</a>'+
            '<a href="mailto:webbitar@gmail.com">webbitar@gmail.com</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="foot-bot"><span>&copy; ' + year + ' Webbitar. All rights reserved.</span><span>Built &amp; hosted in-house.</span></div>'+
    '</div></footer>';
  }

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
