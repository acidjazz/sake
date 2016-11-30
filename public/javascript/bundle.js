var _;

_ = {
  i: function() {
    return this.console = setInterval(this.detect.bind(this), 200);
  },
  p: {
    offing: false,
    offtime: 0
  },
  turn: function(el, remove, add) {
    if (remove == null) {
      remove = false;
    }
    if (add == null) {
      add = false;
    }
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (remove !== false) {
      el.removeClass(remove);
    }
    if (add !== false) {
      el.addClass(add);
    }
    return true;
  },
  off: function(el, p) {
    if (p == null) {
      p = {};
    }
    if (p.offing && p.offtime > 0) {
      this.turn(el, false, 'offing');
      setTimeout(function() {
        this.turn(el, 'offing', false);
        return this.turn(el, 'on', 'off');
      }, p.offtime * 1000 + 100);
    } else {
      this.turn(el, 'on', 'off');
    }
  },
  on: function(el, p) {
    return this.turn(el, 'off', 'on');
  },
  swap: function(el, p) {
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (el.hasClass('off')) {
      this.on(el, p);
    } else {
      this.off(el, p);
    }
  },
  encode: function(str) {
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
  },
  t: function(category, action, label, value) {
    return _gaq.push(['_trackEvent', category, action, label, value]);
  },
  rand: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  load: function(script, initiate, complete) {
    var el;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.src = script;
    el.addEventListener('load', function(e) {
      if (typeof complete === 'function') {
        complete();
      }
      if (initiate !== void 0 && initiate !== false) {
        return window[initiate].i();
      }
    }, false);
    return document.body.appendChild(el);
  },
  llc: function() {
    var ascii;
    ascii = "\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: " + config.meta.repo;
    return console.log(ascii, "color: grey; font-family: Menlo, monospace;");
  },
  detect: function() {
    if (((window.outerHeight - window.innerHeight) > 100) || ((window.outerWidth - window.innerWidth) > 100)) {
      this.llc();
      return clearInterval(this.console);
    }
  }
};

_.i();

var Carousel;

Carousel = {
  sliden: 1,
  slides: 3,
  i: function() {
    Carousel.handlers();
    Carousel.slide(1);
    return _.off('.loader');
  },
  handlers: function() {
    $('.carousel > .nav > .arrow').on('click', Carousel.arrowHandler);
    return $('.carousel > .nav > .dots > .dot').on('click', Carousel.dotHandler);
  },
  arrowHandler: function() {
    return Carousel.arrow($(this).hasClass('right'));
  },
  dotHandler: function() {
    Carousel.sliden = $(this).data('dot');
    return Carousel.slide($(this).data('dot'));
  },
  arrow: function(direction) {
    if (direction) {
      if (Carousel.sliden === Carousel.slides) {
        return Carousel.slide(1);
      } else {
        return Carousel.slide(Carousel.sliden + 1);
      }
    } else {
      if (Carousel.sliden === 1) {
        return Carousel.slide(Carousel.slides);
      } else {
        return Carousel.slide(Carousel.sliden - 1);
      }
    }
  },
  slide: function(num) {
    Carousel.sliden = num;
    _.off('.carousel > .slides > .slide');
    _.off('.carousel > .nav > .dots > .dot');
    _.on(".slides > .slide.slide" + Carousel.sliden);
    return _.on(".carousel > .nav > .dots > .dot" + Carousel.sliden);
  }
};

var config;

config = {
  "carousel": [
    {
      "image": "volition.jpg",
      "link": "/work/volition"
    }, {
      "image": "daffodil.jpg",
      "link": "/work/daffodil"
    }, {
      "image": "destilado.jpg",
      "link": "/work/destilado"
    }
  ],
  "colors": {
    "black1": "#000000",
    "blue1": "#494b5b",
    "blue2": "#b0b7c0",
    "gold1": "#b0986c",
    "white1": "#ffffff"
  },
  "fonts": {
    "copy1": "20px brandon medium",
    "copy2": "16px brandon medium",
    "copys": "12px brandon medium",
    "copyl": "16px brandon light",
    "copy4": "12px brandon light",
    "copy5": "20px brandon bold",
    "h1": "24px brandon bold",
    "h2": "40px aquilone regular",
    "h3": "50px aquilone regular"
  },
  "meta": {
    "title": "Designsake Studio",
    "url": "http://www.designsakestudio.com/",
    "description": "Boutique design studio that specializes in branding, packaging, web design, and development",
    "keywords": "design, graphic design, branding, packaging, web design, web development, art direction, designsake,",
    "image": "img/share.jpg"
  },
  "social": {
    "instagram": "http://www.instagram.com/designsakestudio",
    "facebook": "http://www.facebook.com/designsakestudio",
    "pinterest": "http://www.pinterest.com/designsakesf",
    "mail": "info@designsakestudio.com",
    "map": "https://www.google.com/maps/place/Designsake+Studio/@37.7664616,-122.4056994,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e329270f7af:0xab027b6dc66fae6c!8m2!3d37.7664616!4d-122.4035107",
    "phone": 4155093508
  },
  "work": {
    "volition": {
      "folder": "volition",
      "images": 6,
      "title": "Volition Beauty",
      "meta": "VOLITION BEAUTY, Innovative beauty company leading the industry in radical transparency",
      "description": "Volition is an innovative company out to change the beauty industry. Unlike traditional brands in beauty, Volition was born out of the idea that customers have the right to drive product decisions while knowing what is in their products, how much it costs to make them, and where they are made. All products are innovated and created by members of the community.\nIn branding Volition Beauty, Designsake Studio developed the logo, patterns, icons, website, and product packaging with the intent of highlighting the company's core values of transparency, prestige quality, innovation, and community.\n",
      "services": ["brand identity", "logo design", "packaging design", "art direction", "website design"]
    },
    "daffodil": {
      "folder": "daffodil",
      "images": 6,
      "title": "Daffodil Digital",
      "meta": "DAFFODIL DIGITAL, Social and digital marketing agency helping brands tell their stories in smarter ways.",
      "description": "Daffodil Digital is a new social and digital marketing agency helping brands tell their stories in smarter ways.\nDesignsake Studio was brought on board to create a brand that was fresh and approachable. Using bright colors, custom illustrations and imagery, we created a design that makes strategic storytelling in the digital space not only inspiring, but authentic. Stop and smell the Daffodils.\n",
      "services": ["brand identity", "logo design", "art direction", "photography", "website design"]
    },
    "destilado": {
      "folder": "destilado",
      "images": 6,
      "title": "El Destilado",
      "meta": "EL DESTILADO , Intimate eatery offering fresh, local fare and creative cocktails in the center of Oaxaca, Mexico",
      "description": "El Destilado is a new restaurant offering high quality food and creative cocktails in the center of downtown Oaxaca, Mexico.\nA café by day, and speak easy mezcalería by night, El Destilado offers an intimate and cultural dinning experience. In developing El Destilado’s identity we drew inspiration from the areas rich history of arts and culinary traditions. We create a logo that highlighted the restaurant's custom copper distillery used to make their 15 plus varietals of Mezcal. We also used a color palette that compliments the restaurants tile details, rich wood tables, and mural covered walls.\n",
      "services": ["brand identity", "logo design", "art direction"]
    },
    "batch": {
      "folder": "batch",
      "images": 5,
      "title": "Batch and Batter",
      "meta": "BATCH & BATTER Artisan waffle ice-cream sandwiches made with organic ingredients and available by food truck throughout San Francisco, California.",
      "description": "Batch & Batter creates artisan waffle ice cream sandwiches using locally sourced, organic ingredients. Each sandwich is made with two scoops of small batch ice cream ranging in a variety of unique flavors and sandwiched between freshly made waffles. And the best part: these sandwiches are made to order in a food truck that makes appearances all over San Francisco.\nThe goals in creating Batch & Batter’s identity and product packaging were to highlight the transparency of ingredients, the artisan quality behind their sandwiches, and lastly, delivering a nostalgic experience similar to that of being a child ordering from an ice cream truck.\n",
      "services": ["brand identity", "logo design", "packaging design", "art direction"]
    },
    "benefit": {
      "folder": "benefit",
      "images": 6,
      "title": "Benefit Cosmetics",
      "meta": "BENEFIT COSMETICS, Established cosmetics company famous for their bold and girly aesthetic.",
      "description": "Benefit Cosmetics has famed the bold and girly persona in the cosmetics industry. After 30 plus years of business, Benefit has developed a visually rich history that continues to shape the company's identity.\nAs a brand they continue to experiment with color, patterns, and type everywhere they can, whether it be in their packaging or retail spaces. All the while staying true to the brand’s unique DNA. Featured here are samples of product packaging and marketing collateral created for the company.\n",
      "services": ["packaging design", "logo design", "art direction"]
    },
    "goldpr": {
      "folder": "goldpr",
      "link": "http://www.goldpr.com/",
      "images": 6,
      "title": "Gold PR",
      "meta": "Gold PR & Social Media, Boutique PR and Social Media Marketing agency",
      "description": "Gold PR & Social Media is a boutique public relations and social media marketing agency. Over the last 10 years this brand has supported numerous companies with their launch and social strategies in industries like consumer products, health, beauty, medical technology, food and beverage.\nThe company came to Designsake Studio asking for a complete brand redesign. We worked with Gold PR & Social Media to revamp their logo, website, and printed collateral. The vibrant color palette and simplistic typography coupled with custom photography provided the fresh, and feminine facelift this boutique agency needed.\n",
      "services": ["brand identity", "logo design", "art direction", "website design", "website development"]
    },
    "sephora": {
      "folder": "sephora",
      "images": 5,
      "title": "Sephora",
      "meta": "SEPHORA, International cosmetic brand and retailer",
      "description": "The Sephora Collection is known for it’s extensive makeup, tools, brushes and skin care products designed to help customers experiment, express and explore.\nFeatured here are a few printed pieces we have designed for the Sephora Collection team.\n",
      "services": ["art direction", "print collateral"]
    },
    "enchantment": {
      "folder": "enchantment",
      "images": 4,
      "title": "Enchantment Farm",
      "meta": "ENCHANTMENT FARM , Working horse ranch located in Temecula, California",
      "description": "Enchantment Farm is a new fourteen-acre horse ranch located on the prestigious De Portola Road in Temecula, California. The owner has been involved in competitive riding since she was a child and has now fulfilled a lifelong dream of owning her own ranch. Designsake Studio developed a logo for the ranch inspired by vintage fairytale books. The warm color palette of grays and greens highlights the ranch's natural landscape and compliments the modern typography. Hints of metallic ink add a touch of sophistication and nod to the ranch's award winning horses.\n",
      "services": ["brand identity", "logo design", "art direction"]
    }
  }
};

var Index;

Index = {
  i: function() {}
};

var Insta;

Insta = {
  endpoint: 'https://api.instagram.com/v1/users/self/media/recent/',
  token: '1709913627.87976c3.0415bd97d8104df3af8110e57d5f1349',
  posts: 5,
  loaded: false,
  i: function() {
    if (Insta.loaded !== true) {
      return Insta.load();
    }
  },
  load: function() {
    _.load(Insta.endpoint + "?access_token=" + Insta.token + "&callback=Insta.callback");
    return Insta.loaded = true;
  },
  callback: function(json) {
    var i, index, len, post, ref;
    ref = json.data;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      post = ref[index];
      if (index === Insta.posts) {
        return true;
      }
      $('.instagram > .posts').append("\n<a href=\"" + post.link + "\" target=\"_new\" class=\"post\">\n  <img src=\"" + post.images.standard_resolution.url + "\"/>\n  <div class=\"details\">\n    <div class=\"likes\">" + post.likes.count + " &#9825; </div>\n  </div>\n</a>\n");
    }
  }
};

var Preimg;

Preimg = function(html, progress, complete) {
  var load, scrapeImg, urls;
  urls = [];
  scrapeImg = function(html) {
    if (!html instanceof jQuery) {
      html = $(html);
    }
    $(html).find('img').map(function() {
      return urls.push(this.src);
    });
    return $(html).find('div, a').map(function() {
      var attr, image;
      attr = $(this).css('backgroundImage');
      if (attr.length === 0 || attr === 'none') {
        return true;
      }
      image = attr.replace('url(', '').replace(')', '').replace(/"/g, '');
      if (image !== '') {
        return urls.push(image);
      }
    });
  };
  load = function() {
    var i, images, j, len, loaded, results, total, url;
    loaded = 0;
    total = urls.length;
    if (loaded === total) {
      complete(true);
    }
    images = [];
    results = [];
    for (i = j = 0, len = urls.length; j < len; i = ++j) {
      url = urls[i];
      images[i] = new Image();
      images[i].src = url;
      results.push(images[i].onload = function(e) {
        var perc;
        loaded++;
        perc = Math.round(loaded / total * 100) / 100;
        if (loaded === total) {
          return complete(true);
        } else {
          return progress(perc);
        }
      });
    }
    return results;
  };
  scrapeImg(html);
  load();
  return true;
};

var Spa;

Spa = {
  instagram: false,
  original: null,
  page: null,
  cache: {
    window: window,
    stickied: false
  },
  options: {
    work: '/work/',
    studio: '/studio/',
    contact: '/contact/'
  },
  i: function() {
    Spa.page = Spa.original = location.pathname;
    Spa.activate(Spa.page);
    Preimg($('#container > #inner'), function(complete) {
      return $('.spinner > .complete').css('height', (complete * 100) + "%");
    }, function(done) {
      $('.spinner > .complete').css('height', '100%');
      return setTimeout(function() {
        _.off('.spinner');
        $('.spinner > .complete').css('height', '0%');
        return _.on('#container > #inner');
      }, 1000);
    });
    Spa.cache.window = $(window);
    Spa.handlers();
    if ($(window).width() > 1000) {
      return setInterval(Spa.header, 20);
    }
  },
  header: function() {
    if (Spa.cache.window.scrollTop() > 400 && Spa.cache.stickied === false) {
      _.on('header.sticky');
      _.off('header.normal');
      $('#container').addClass('sticky');
      Spa.cache.stickied = true;
    }
    if (Spa.cache.window.scrollTop() < 400 && Spa.cache.stickied === true) {
      _.off('header.sticky');
      _.on('header.normal');
      $('#container').removeClass('sticky');
      return Spa.cache.stickied = false;
    }
  },
  handlers: function() {
    $('header > .inner > .menu > ul > li > a, header > .inner > a.logo').on('click', Spa.menuHandler);
    $(window).bind('popstate', Spa.pop);
    $('#container').on('click', '.page.work > .tiles > a.tile', Spa.tileHandler);
    return $('#container').on('click', '.page.detail > .submenu > a', Spa.submenuHandler);
  },
  tileHandler: function(e) {
    var page;
    e.preventDefault();
    page = $(this).attr('href');
    if (page === void 0) {
      return true;
    }
    if (page === location.pathname) {
      return true;
    }
    return Spa.load(page, '#inner', '#container > #inner', function() {
      return Spa.push();
    });
  },
  submenuHandler: function(e) {
    var page;
    e.preventDefault();
    page = $(this).attr('href');
    if (page === void 0) {
      return true;
    }
    if (page === location.pathname) {
      return true;
    }
    _.on('.spinner');
    _.off('.submenu a');
    _.on(".submenu a.item_" + (page.replace('work', '').replace(/\//g, '')));
    return Spa.load(page, '.details', '#container > #inner .details', function() {
      return Spa.push();
    });
  },
  menuHandler: function(e) {
    var option, page;
    e.preventDefault();
    page = $(this).data('page');
    option = $(this).data('option');
    if (page === void 0) {
      return true;
    }
    if (page === location.pathname) {
      return true;
    }
    _.off('header > .inner > .menu > ul > li > a');
    _.on("header > .inner > .menu > ul > li > a.option_" + option);
    return setTimeout(function() {
      return Spa.load(page, '#inner', '#container > #inner', function() {
        return Spa.push();
      });
    }, 400);
  },
  activate: function() {
    var k, ref, results, v;
    _.off('header > .inner > .menu > ul > li > a');
    ref = Spa.options;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (Spa.page.match(v) !== null) {
        results.push(_.on("header > .inner > .menu > ul > li > a.option_" + k));
      } else {
        results.push(void 0);
      }
    }
    return results;
  },
  load: function(page, find, replace, cb) {
    _.on('.spinner');
    return $.get(page).done(function(result) {
      var html;
      html = $(result).filter('#container').find(find);
      return Preimg(html, function(complete) {
        return $('.spinner > .complete').css('height', (complete * 100) + "%");
      }, function(done) {
        $('.spinner > .complete').css('height', '100%');
        return setTimeout(function() {
          _.off('.spinner');
          $('.spinner > .complete').css('height', '0%');
          $(replace).replaceWith(html);
          _.on('#container > #inner');
          Spa.page = page;
          return typeof cb === "function" ? cb() : void 0;
        }, 1000);
      });
    });
  },
  push: function() {
    return history.pushState({
      url: Spa.page
    }, "Design Sake Studio - " + Spa.page, Spa.page);
  },
  pop: function(e) {
    if (e.originalEvent.state === null) {
      return Spa.load(Spa.original);
    } else {
      return Spa.load(e.originalEvent.state.url);
    }
  }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjYXJvdXNlbC5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwiaW5zdGEuY29mZmVlIiwicHJlaW1nLmNvZmZlZSIsInNwYS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQjtNQUZTLENBQVgsRUFHRSxDQUFDLENBQUMsT0FBRixHQUFVLElBQVYsR0FBaUIsR0FIbkIsRUFIRjtLQUFBLE1BQUE7TUFTRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBVEY7O0VBRkcsQ0FwQkw7RUFtQ0EsRUFBQSxFQUFJLFNBQUMsRUFBRCxFQUFLLENBQUw7V0FDRixJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLElBQWpCO0VBREUsQ0FuQ0o7RUFzQ0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLENBQUw7SUFFSixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLEVBQUUsQ0FBQyxRQUFILENBQVksS0FBWixDQUFIO01BQ0UsSUFBQyxDQUFBLEVBQUQsQ0FBSSxFQUFKLEVBQVEsQ0FBUixFQURGO0tBQUEsTUFBQTtNQUdFLElBQUMsQ0FBQSxHQUFELENBQUssRUFBTCxFQUFTLENBQVQsRUFIRjs7RUFMSSxDQXRDTjtFQWtEQSxNQUFBLEVBQVEsU0FBQyxHQUFEO0FBQ04sV0FBTyxrQkFBQSxDQUFtQixHQUFuQixDQUNMLENBQUMsT0FESSxDQUNJLElBREosRUFDVSxLQURWLENBRUwsQ0FBQyxPQUZJLENBRUksSUFGSixFQUVVLEtBRlYsQ0FHTCxDQUFDLE9BSEksQ0FHSSxLQUhKLEVBR1csS0FIWCxDQUlMLENBQUMsT0FKSSxDQUlJLEtBSkosRUFJVyxLQUpYLENBS0wsQ0FBQyxPQUxJLENBS0ksS0FMSixFQUtXLEtBTFgsQ0FNTCxDQUFDLE9BTkksQ0FNSSxNQU5KLEVBTVksR0FOWjtFQURELENBbERSO0VBMkRBLENBQUEsRUFBRyxTQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLEtBQTFCO1dBQ0QsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFDLGFBQUQsRUFBZ0IsUUFBaEIsRUFBMEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUMsS0FBekMsQ0FBVjtFQURDLENBM0RIO0VBOERBLElBQUEsRUFBTSxTQUFDLEdBQUQsRUFBTSxHQUFOO0FBQ0osV0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixHQUEzQixDQUFBLEdBQWtDO0VBRHJDLENBOUROO0VBaUVBLElBQUEsRUFBTSxTQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFFBQW5CO0FBRUosUUFBQTtJQUFBLEVBQUEsR0FBSyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QjtJQUNMLEVBQUUsQ0FBQyxJQUFILEdBQVU7SUFDVixFQUFFLENBQUMsR0FBSCxHQUFTO0lBQ1QsRUFBRSxDQUFDLGdCQUFILENBQW9CLE1BQXBCLEVBQTZCLFNBQUMsQ0FBRDtNQUMzQixJQUFjLE9BQU8sUUFBUCxLQUFtQixVQUFqQztRQUFBLFFBQUEsQ0FBQSxFQUFBOztNQUNBLElBQXdCLFFBQUEsS0FBYyxNQUFkLElBQTRCLFFBQUEsS0FBYyxLQUFsRTtlQUFBLE1BQU8sQ0FBQSxRQUFBLENBQVMsQ0FBQyxDQUFqQixDQUFBLEVBQUE7O0lBRjJCLENBQTdCLEVBR0UsS0FIRjtXQUtBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixFQUExQjtFQVZJLENBakVOO0VBNkVBLEdBQUEsRUFBSyxTQUFBO0FBQ0gsUUFBQTtJQUFBLEtBQUEsR0FBUSwyaENBQUEsR0FtQkQsTUFBTSxDQUFDLElBQUksQ0FBQztXQUVuQixPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRUFBbUIsNkNBQW5CO0VBdEJHLENBN0VMO0VBcUdBLE1BQUEsRUFBUSxTQUFBO0lBQ04sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVAsR0FBcUIsTUFBTSxDQUFDLFdBQTdCLENBQUEsR0FBNEMsR0FBN0MsQ0FBQSxJQUFxRCxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVAsR0FBb0IsTUFBTSxDQUFDLFVBQTVCLENBQUEsR0FBMEMsR0FBM0MsQ0FBekQ7TUFDRSxJQUFDLENBQUEsR0FBRCxDQUFBO2FBQ0EsYUFBQSxDQUFjLElBQUMsQ0FBQSxPQUFmLEVBRkY7O0VBRE0sQ0FyR1I7OztBQTBHRixDQUFDLENBQUMsQ0FBRixDQUFBOztBQzNHQSxJQUFBOztBQUFBLFFBQUEsR0FFRTtFQUFBLE1BQUEsRUFBUSxDQUFSO0VBQ0EsTUFBQSxFQUFRLENBRFI7RUFHQSxDQUFBLEVBQUcsU0FBQTtJQUNELFFBQVEsQ0FBQyxRQUFULENBQUE7SUFDQSxRQUFRLENBQUMsS0FBVCxDQUFlLENBQWY7V0FDQSxDQUFDLENBQUMsR0FBRixDQUFNLFNBQU47RUFIQyxDQUhIO0VBUUEsUUFBQSxFQUFVLFNBQUE7SUFDUixDQUFBLENBQUUsMkJBQUYsQ0FBOEIsQ0FBQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxRQUFRLENBQUMsWUFBcEQ7V0FDQSxDQUFBLENBQUUsaUNBQUYsQ0FBb0MsQ0FBQyxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxRQUFRLENBQUMsVUFBMUQ7RUFGUSxDQVJWO0VBWUEsWUFBQSxFQUFjLFNBQUE7V0FDWixRQUFRLENBQUMsS0FBVCxDQUFlLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCLENBQWY7RUFEWSxDQVpkO0VBZUEsVUFBQSxFQUFZLFNBQUE7SUFFVixRQUFRLENBQUMsTUFBVCxHQUFrQixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWI7V0FDbEIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLEtBQWIsQ0FBZjtFQUhVLENBZlo7RUFvQkEsS0FBQSxFQUFPLFNBQUMsU0FBRDtJQUNMLElBQUcsU0FBSDtNQUNFLElBQUcsUUFBUSxDQUFDLE1BQVQsS0FBbUIsUUFBUSxDQUFDLE1BQS9CO2VBQ0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxDQUFmLEVBREY7T0FBQSxNQUFBO2VBR0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFRLENBQUMsTUFBVCxHQUFnQixDQUEvQixFQUhGO09BREY7S0FBQSxNQUFBO01BTUUsSUFBRyxRQUFRLENBQUMsTUFBVCxLQUFtQixDQUF0QjtlQUNFLFFBQVEsQ0FBQyxLQUFULENBQWUsUUFBUSxDQUFDLE1BQXhCLEVBREY7T0FBQSxNQUFBO2VBR0UsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFRLENBQUMsTUFBVCxHQUFnQixDQUEvQixFQUhGO09BTkY7O0VBREssQ0FwQlA7RUFnQ0EsS0FBQSxFQUFPLFNBQUMsR0FBRDtJQUVMLFFBQVEsQ0FBQyxNQUFULEdBQWtCO0lBRWxCLENBQUMsQ0FBQyxHQUFGLENBQU0sOEJBQU47SUFDQSxDQUFDLENBQUMsR0FBRixDQUFNLGlDQUFOO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyx3QkFBQSxHQUF5QixRQUFRLENBQUMsTUFBdkM7V0FDQSxDQUFDLENBQUMsRUFBRixDQUFLLGlDQUFBLEdBQWtDLFFBQVEsQ0FBQyxNQUFoRDtFQVBLLENBaENQOzs7QUNIRixJQUFBOztBQUFBLE1BQUEsR0FBUztFQUFDLFVBQUEsRUFBVztJQUFDO01BQUMsT0FBQSxFQUFRLGNBQVQ7TUFBd0IsTUFBQSxFQUFPLGdCQUEvQjtLQUFELEVBQWtEO01BQUMsT0FBQSxFQUFRLGNBQVQ7TUFBd0IsTUFBQSxFQUFPLGdCQUEvQjtLQUFsRCxFQUFtRztNQUFDLE9BQUEsRUFBUSxlQUFUO01BQXlCLE1BQUEsRUFBTyxpQkFBaEM7S0FBbkc7R0FBWjtFQUFtSyxRQUFBLEVBQVM7SUFBQyxRQUFBLEVBQVMsU0FBVjtJQUFvQixPQUFBLEVBQVEsU0FBNUI7SUFBc0MsT0FBQSxFQUFRLFNBQTlDO0lBQXdELE9BQUEsRUFBUSxTQUFoRTtJQUEwRSxRQUFBLEVBQVMsU0FBbkY7R0FBNUs7RUFBMFEsT0FBQSxFQUFRO0lBQUMsT0FBQSxFQUFRLHFCQUFUO0lBQStCLE9BQUEsRUFBUSxxQkFBdkM7SUFBNkQsT0FBQSxFQUFRLHFCQUFyRTtJQUEyRixPQUFBLEVBQVEsb0JBQW5HO0lBQXdILE9BQUEsRUFBUSxvQkFBaEk7SUFBcUosT0FBQSxFQUFRLG1CQUE3SjtJQUFpTCxJQUFBLEVBQUssbUJBQXRMO0lBQTBNLElBQUEsRUFBSyx1QkFBL007SUFBdU8sSUFBQSxFQUFLLHVCQUE1TztHQUFsUjtFQUF1aEIsTUFBQSxFQUFPO0lBQUMsT0FBQSxFQUFRLG1CQUFUO0lBQTZCLEtBQUEsRUFBTSxrQ0FBbkM7SUFBc0UsYUFBQSxFQUFjLDZGQUFwRjtJQUFrTCxVQUFBLEVBQVcsc0dBQTdMO0lBQW9TLE9BQUEsRUFBUSxlQUE1UztHQUE5aEI7RUFBMjFCLFFBQUEsRUFBUztJQUFDLFdBQUEsRUFBWSwyQ0FBYjtJQUF5RCxVQUFBLEVBQVcsMENBQXBFO0lBQStHLFdBQUEsRUFBWSx1Q0FBM0g7SUFBbUssTUFBQSxFQUFPLDJCQUExSztJQUFzTSxLQUFBLEVBQU0sZ0xBQTVNO0lBQTZYLE9BQUEsRUFBUSxVQUFyWTtHQUFwMkI7RUFBcXZDLE1BQUEsRUFBTztJQUFDLFVBQUEsRUFBVztNQUFDLFFBQUEsRUFBUyxVQUFWO01BQXFCLFFBQUEsRUFBUyxDQUE5QjtNQUFnQyxPQUFBLEVBQVEsaUJBQXhDO01BQTBELE1BQUEsRUFBTyx5RkFBakU7TUFBMkosYUFBQSxFQUFjLDBsQkFBeks7TUFBb3dCLFVBQUEsRUFBVyxDQUFDLGdCQUFELEVBQWtCLGFBQWxCLEVBQWdDLGtCQUFoQyxFQUFtRCxlQUFuRCxFQUFtRSxnQkFBbkUsQ0FBL3dCO0tBQVo7SUFBaTNCLFVBQUEsRUFBVztNQUFDLFFBQUEsRUFBUyxVQUFWO01BQXFCLFFBQUEsRUFBUyxDQUE5QjtNQUFnQyxPQUFBLEVBQVEsa0JBQXhDO01BQTJELE1BQUEsRUFBTywwR0FBbEU7TUFBNkssYUFBQSxFQUFjLGtaQUEzTDtNQUE4a0IsVUFBQSxFQUFXLENBQUMsZ0JBQUQsRUFBa0IsYUFBbEIsRUFBZ0MsZUFBaEMsRUFBZ0QsYUFBaEQsRUFBOEQsZ0JBQTlELENBQXpsQjtLQUE1M0I7SUFBc2lELFdBQUEsRUFBWTtNQUFDLFFBQUEsRUFBUyxXQUFWO01BQXNCLFFBQUEsRUFBUyxDQUEvQjtNQUFpQyxPQUFBLEVBQVEsY0FBekM7TUFBd0QsTUFBQSxFQUFPLGtIQUEvRDtNQUFrTCxhQUFBLEVBQWMsK2xCQUFoTTtNQUFneUIsVUFBQSxFQUFXLENBQUMsZ0JBQUQsRUFBa0IsYUFBbEIsRUFBZ0MsZUFBaEMsQ0FBM3lCO0tBQWxqRDtJQUErNEUsT0FBQSxFQUFRO01BQUMsUUFBQSxFQUFTLE9BQVY7TUFBa0IsUUFBQSxFQUFTLENBQTNCO01BQTZCLE9BQUEsRUFBUSxrQkFBckM7TUFBd0QsTUFBQSxFQUFPLG9KQUEvRDtNQUFvTixhQUFBLEVBQWMsMG9CQUFsTztNQUE2MkIsVUFBQSxFQUFXLENBQUMsZ0JBQUQsRUFBa0IsYUFBbEIsRUFBZ0Msa0JBQWhDLEVBQW1ELGVBQW5ELENBQXgzQjtLQUF2NUU7SUFBbzFHLFNBQUEsRUFBVTtNQUFDLFFBQUEsRUFBUyxTQUFWO01BQW9CLFFBQUEsRUFBUyxDQUE3QjtNQUErQixPQUFBLEVBQVEsbUJBQXZDO01BQTJELE1BQUEsRUFBTyw2RkFBbEU7TUFBZ0ssYUFBQSxFQUFjLDBmQUE5SztNQUF5cUIsVUFBQSxFQUFXLENBQUMsa0JBQUQsRUFBb0IsYUFBcEIsRUFBa0MsZUFBbEMsQ0FBcHJCO0tBQTkxRztJQUFza0ksUUFBQSxFQUFTO01BQUMsUUFBQSxFQUFTLFFBQVY7TUFBbUIsTUFBQSxFQUFPLHdCQUExQjtNQUFtRCxRQUFBLEVBQVMsQ0FBNUQ7TUFBOEQsT0FBQSxFQUFRLFNBQXRFO01BQWdGLE1BQUEsRUFBTyx1RUFBdkY7TUFBK0osYUFBQSxFQUFjLHltQkFBN0s7TUFBdXhCLFVBQUEsRUFBVyxDQUFDLGdCQUFELEVBQWtCLGFBQWxCLEVBQWdDLGVBQWhDLEVBQWdELGdCQUFoRCxFQUFpRSxxQkFBakUsQ0FBbHlCO0tBQS9rSTtJQUEwOEosU0FBQSxFQUFVO01BQUMsUUFBQSxFQUFTLFNBQVY7TUFBb0IsUUFBQSxFQUFTLENBQTdCO01BQStCLE9BQUEsRUFBUSxTQUF2QztNQUFpRCxNQUFBLEVBQU8sb0RBQXhEO01BQTZHLGFBQUEsRUFBYywwUEFBM0g7TUFBc1gsVUFBQSxFQUFXLENBQUMsZUFBRCxFQUFpQixrQkFBakIsQ0FBalk7S0FBcDlKO0lBQTIzSyxhQUFBLEVBQWM7TUFBQyxRQUFBLEVBQVMsYUFBVjtNQUF3QixRQUFBLEVBQVMsQ0FBakM7TUFBbUMsT0FBQSxFQUFRLGtCQUEzQztNQUE4RCxNQUFBLEVBQU8sd0VBQXJFO01BQThJLGFBQUEsRUFBYyxxakJBQTVKO01BQWt0QixVQUFBLEVBQVcsQ0FBQyxnQkFBRCxFQUFrQixhQUFsQixFQUFnQyxlQUFoQyxDQUE3dEI7S0FBejRLO0dBQTV2Qzs7O0FDQVQsSUFBQTs7QUFBQSxLQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQSxHQUFBLENBQUg7OztBQ0RGLElBQUE7O0FBQUEsS0FBQSxHQUNFO0VBQUEsUUFBQSxFQUFVLHVEQUFWO0VBQ0EsS0FBQSxFQUFPLHFEQURQO0VBRUEsS0FBQSxFQUFPLENBRlA7RUFHQSxNQUFBLEVBQVEsS0FIUjtFQUtBLENBQUEsRUFBRyxTQUFBO0lBRUQsSUFBRyxLQUFLLENBQUMsTUFBTixLQUFrQixJQUFyQjthQUNFLEtBQUssQ0FBQyxJQUFOLENBQUEsRUFERjs7RUFGQyxDQUxIO0VBVUEsSUFBQSxFQUFNLFNBQUE7SUFDSixDQUFDLENBQUMsSUFBRixDQUFVLEtBQUssQ0FBQyxRQUFQLEdBQWdCLGdCQUFoQixHQUFnQyxLQUFLLENBQUMsS0FBdEMsR0FBNEMsMEJBQXJEO1dBQ0EsS0FBSyxDQUFDLE1BQU4sR0FBZTtFQUZYLENBVk47RUFjQSxRQUFBLEVBQVUsU0FBQyxJQUFEO0FBQ1IsUUFBQTtBQUFBO0FBQUEsU0FBQSxxREFBQTs7TUFDRSxJQUFlLEtBQUEsS0FBUyxLQUFLLENBQUMsS0FBOUI7QUFBQSxlQUFPLEtBQVA7O01BQ0EsQ0FBQSxDQUFFLHFCQUFGLENBQXdCLENBQUMsTUFBekIsQ0FBZ0MsY0FBQSxHQUVuQixJQUFJLENBQUMsSUFGYyxHQUVULG1EQUZTLEdBR2hCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FIaEIsR0FHb0IsNERBSHBCLEdBS0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUxOLEdBS1ksbUNBTDVDO0FBRkY7RUFEUSxDQWRWOzs7QUNGRixJQUFBOztBQUFBLE1BQUEsR0FBUyxTQUFDLElBQUQsRUFBTyxRQUFQLEVBQWlCLFFBQWpCO0FBRVAsTUFBQTtFQUFBLElBQUEsR0FBTztFQUdQLFNBQUEsR0FBWSxTQUFDLElBQUQ7SUFFVixJQUFHLENBQUMsSUFBRCxZQUFpQixNQUFwQjtNQUNFLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBRixFQURUOztJQUdBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFtQixDQUFDLEdBQXBCLENBQXdCLFNBQUE7YUFDdEIsSUFBSSxDQUFDLElBQUwsQ0FBVSxJQUFJLENBQUMsR0FBZjtJQURzQixDQUF4QjtXQUdBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUFzQixDQUFDLEdBQXZCLENBQTJCLFNBQUE7QUFDekIsVUFBQTtNQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO01BQ1AsSUFBZSxJQUFJLENBQUMsTUFBTCxLQUFlLENBQWYsSUFBb0IsSUFBQSxLQUFRLE1BQTNDO0FBQUEsZUFBTyxLQUFQOztNQUNBLEtBQUEsR0FBUSxJQUFJLENBQUMsT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBd0IsQ0FBQyxPQUF6QixDQUFpQyxHQUFqQyxFQUFzQyxFQUF0QyxDQUF5QyxDQUFDLE9BQTFDLENBQWtELElBQWxELEVBQXdELEVBQXhEO01BQ1IsSUFBbUIsS0FBQSxLQUFXLEVBQTlCO2VBQUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxLQUFWLEVBQUE7O0lBSnlCLENBQTNCO0VBUlU7RUFjWCxJQUFBLEdBQU8sU0FBQTtBQUVMLFFBQUE7SUFBQSxNQUFBLEdBQVM7SUFDVCxLQUFBLEdBQVEsSUFBSSxDQUFDO0lBRWIsSUFBRyxNQUFBLEtBQVUsS0FBYjtNQUF3QixRQUFBLENBQVMsSUFBVCxFQUF4Qjs7SUFFQSxNQUFBLEdBQVM7QUFFVDtTQUFBLDhDQUFBOztNQUNFLE1BQU8sQ0FBQSxDQUFBLENBQVAsR0FBZ0IsSUFBQSxLQUFBLENBQUE7TUFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLEdBQVYsR0FBZ0I7bUJBQ2hCLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxNQUFWLEdBQW1CLFNBQUMsQ0FBRDtBQUNqQixZQUFBO1FBQUEsTUFBQTtRQUNBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQUEsR0FBTyxLQUFQLEdBQWEsR0FBeEIsQ0FBQSxHQUE2QjtRQUNwQyxJQUFHLE1BQUEsS0FBVSxLQUFiO2lCQUF3QixRQUFBLENBQVMsSUFBVCxFQUF4QjtTQUFBLE1BQUE7aUJBQTRDLFFBQUEsQ0FBUyxJQUFULEVBQTVDOztNQUhpQjtBQUhyQjs7RUFUSztFQWlCUixTQUFBLENBQVUsSUFBVjtFQUNBLElBQUEsQ0FBQTtBQUVBLFNBQU87QUF2Q0E7O0FDQ1QsSUFBQTs7QUFBQSxHQUFBLEdBRUU7RUFBQSxTQUFBLEVBQVcsS0FBWDtFQUNBLFFBQUEsRUFBVSxJQURWO0VBRUEsSUFBQSxFQUFNLElBRk47RUFHQSxLQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsTUFBUjtJQUNBLFFBQUEsRUFBVSxLQURWO0dBSkY7RUFNQSxPQUFBLEVBQ0U7SUFBQSxJQUFBLEVBQU0sUUFBTjtJQUNBLE1BQUEsRUFBUSxVQURSO0lBRUEsT0FBQSxFQUFTLFdBRlQ7R0FQRjtFQVdBLENBQUEsRUFBRyxTQUFBO0lBRUQsR0FBRyxDQUFDLElBQUosR0FBVyxHQUFHLENBQUMsUUFBSixHQUFlLFFBQVEsQ0FBQztJQUNuQyxHQUFHLENBQUMsUUFBSixDQUFhLEdBQUcsQ0FBQyxJQUFqQjtJQUVBLE1BQUEsQ0FBTyxDQUFBLENBQUUscUJBQUYsQ0FBUCxFQUFpQyxTQUFDLFFBQUQ7YUFDL0IsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsR0FBMUIsQ0FBOEIsUUFBOUIsRUFBMEMsQ0FBQyxRQUFBLEdBQVMsR0FBVixDQUFBLEdBQWMsR0FBeEQ7SUFEK0IsQ0FBakMsRUFFRSxTQUFDLElBQUQ7TUFDQSxDQUFBLENBQUUsc0JBQUYsQ0FBeUIsQ0FBQyxHQUExQixDQUE4QixRQUE5QixFQUF3QyxNQUF4QzthQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFOO1FBQ0EsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsR0FBMUIsQ0FBOEIsUUFBOUIsRUFBd0MsSUFBeEM7ZUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLHFCQUFMO01BSFMsQ0FBWCxFQUlFLElBSkY7SUFGQSxDQUZGO0lBVUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFWLEdBQW1CLENBQUEsQ0FBRSxNQUFGO0lBRW5CLEdBQUcsQ0FBQyxRQUFKLENBQUE7SUFFQSxJQUFHLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxLQUFWLENBQUEsQ0FBQSxHQUFvQixJQUF2QjthQUNFLFdBQUEsQ0FBWSxHQUFHLENBQUMsTUFBaEIsRUFBd0IsRUFBeEIsRUFERjs7RUFuQkMsQ0FYSDtFQWlDQSxNQUFBLEVBQVEsU0FBQTtJQUVOLElBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBakIsQ0FBQSxDQUFBLEdBQStCLEdBQS9CLElBQXVDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBVixLQUFzQixLQUFoRTtNQUNFLENBQUMsQ0FBQyxFQUFGLENBQUssZUFBTDtNQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sZUFBTjtNQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxRQUFoQixDQUF5QixRQUF6QjtNQUVBLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBVixHQUFxQixLQUx2Qjs7SUFPQSxJQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQWpCLENBQUEsQ0FBQSxHQUErQixHQUEvQixJQUF1QyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVYsS0FBc0IsSUFBaEU7TUFDRSxDQUFDLENBQUMsR0FBRixDQUFNLGVBQU47TUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLGVBQUw7TUFDQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsV0FBaEIsQ0FBNEIsUUFBNUI7YUFDQSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVYsR0FBcUIsTUFKdkI7O0VBVE0sQ0FqQ1I7RUFnREEsUUFBQSxFQUFVLFNBQUE7SUFHUixDQUFBLENBQUUsaUVBQUYsQ0FBb0UsQ0FBQyxFQUFyRSxDQUF3RSxPQUF4RSxFQUFpRixHQUFHLENBQUMsV0FBckY7SUFHQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsSUFBVixDQUFlLFVBQWYsRUFBMkIsR0FBRyxDQUFDLEdBQS9CO0lBR0EsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLDhCQUE1QixFQUE0RCxHQUFHLENBQUMsV0FBaEU7V0FHQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsNkJBQTVCLEVBQTJELEdBQUcsQ0FBQyxjQUEvRDtFQVpRLENBaERWO0VBOERBLFdBQUEsRUFBYSxTQUFDLENBQUQ7QUFFWCxRQUFBO0lBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtJQUVBLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLE1BQWI7SUFFUCxJQUFlLElBQUEsS0FBUSxNQUF2QjtBQUFBLGFBQU8sS0FBUDs7SUFDQSxJQUFlLElBQUEsS0FBUSxRQUFRLENBQUMsUUFBaEM7QUFBQSxhQUFPLEtBQVA7O1dBRUEsR0FBRyxDQUFDLElBQUosQ0FBUyxJQUFULEVBQWUsUUFBZixFQUF5QixxQkFBekIsRUFBZ0QsU0FBQTthQUM5QyxHQUFHLENBQUMsSUFBSixDQUFBO0lBRDhDLENBQWhEO0VBVFcsQ0E5RGI7RUEwRUEsY0FBQSxFQUFnQixTQUFDLENBQUQ7QUFFZCxRQUFBO0lBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtJQUVBLElBQUEsR0FBTyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLE1BQWI7SUFFUCxJQUFlLElBQUEsS0FBUSxNQUF2QjtBQUFBLGFBQU8sS0FBUDs7SUFDQSxJQUFlLElBQUEsS0FBUSxRQUFRLENBQUMsUUFBaEM7QUFBQSxhQUFPLEtBQVA7O0lBRUEsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxVQUFMO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxZQUFOO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxrQkFBQSxHQUFrQixDQUFDLElBQUksQ0FBQyxPQUFMLENBQWEsTUFBYixFQUFxQixFQUFyQixDQUF3QixDQUFDLE9BQXpCLENBQWlDLEtBQWpDLEVBQXdDLEVBQXhDLENBQUQsQ0FBdkI7V0FFQSxHQUFHLENBQUMsSUFBSixDQUFTLElBQVQsRUFBZSxVQUFmLEVBQTJCLDhCQUEzQixFQUEyRCxTQUFBO2FBQ3pELEdBQUcsQ0FBQyxJQUFKLENBQUE7SUFEeUQsQ0FBM0Q7RUFiYyxDQTFFaEI7RUEwRkEsV0FBQSxFQUFhLFNBQUMsQ0FBRDtBQUVYLFFBQUE7SUFBQSxDQUFDLENBQUMsY0FBRixDQUFBO0lBRUEsSUFBQSxHQUFPLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsTUFBYjtJQUNQLE1BQUEsR0FBUyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFFBQWI7SUFFVCxJQUFlLElBQUEsS0FBUSxNQUF2QjtBQUFBLGFBQU8sS0FBUDs7SUFDQSxJQUFlLElBQUEsS0FBUSxRQUFRLENBQUMsUUFBaEM7QUFBQSxhQUFPLEtBQVA7O0lBRUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSx1Q0FBTjtJQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssK0NBQUEsR0FBZ0QsTUFBckQ7V0FFQSxVQUFBLENBQVcsU0FBQTthQUNULEdBQUcsQ0FBQyxJQUFKLENBQVMsSUFBVCxFQUFlLFFBQWYsRUFBeUIscUJBQXpCLEVBQWdELFNBQUE7ZUFDOUMsR0FBRyxDQUFDLElBQUosQ0FBQTtNQUQ4QyxDQUFoRDtJQURTLENBQVgsRUFHRSxHQUhGO0VBYlcsQ0ExRmI7RUE0R0EsUUFBQSxFQUFVLFNBQUE7QUFDUixRQUFBO0lBQUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSx1Q0FBTjtBQUNBO0FBQUE7U0FBQSxRQUFBOztNQUNFLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFULENBQWUsQ0FBZixDQUFBLEtBQXVCLElBQTFCO3FCQUNFLENBQUMsQ0FBQyxFQUFGLENBQUssK0NBQUEsR0FBZ0QsQ0FBckQsR0FERjtPQUFBLE1BQUE7NkJBQUE7O0FBREY7O0VBRlEsQ0E1R1Y7RUFrSEEsSUFBQSxFQUFNLFNBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxPQUFiLEVBQXNCLEVBQXRCO0lBRUosQ0FBQyxDQUFDLEVBQUYsQ0FBSyxVQUFMO1dBRUEsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxJQUFOLENBQ0UsQ0FBQyxJQURILENBQ1EsU0FBQyxNQUFEO0FBQ0osVUFBQTtNQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFpQixZQUFqQixDQUE4QixDQUFDLElBQS9CLENBQW9DLElBQXBDO2FBQ1AsTUFBQSxDQUFPLElBQVAsRUFBYSxTQUFDLFFBQUQ7ZUFDWCxDQUFBLENBQUUsc0JBQUYsQ0FBeUIsQ0FBQyxHQUExQixDQUE4QixRQUE5QixFQUEwQyxDQUFDLFFBQUEsR0FBUyxHQUFWLENBQUEsR0FBYyxHQUF4RDtNQURXLENBQWIsRUFFRSxTQUFDLElBQUQ7UUFDQSxDQUFBLENBQUUsc0JBQUYsQ0FBeUIsQ0FBQyxHQUExQixDQUE4QixRQUE5QixFQUF3QyxNQUF4QztlQUNBLFVBQUEsQ0FBVyxTQUFBO1VBQ1QsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFOO1VBQ0EsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsR0FBMUIsQ0FBOEIsUUFBOUIsRUFBd0MsSUFBeEM7VUFDQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsV0FBWCxDQUF1QixJQUF2QjtVQUNBLENBQUMsQ0FBQyxFQUFGLENBQUsscUJBQUw7VUFDQSxHQUFHLENBQUMsSUFBSixHQUFXOzRDQUNYO1FBTlMsQ0FBWCxFQU9FLElBUEY7TUFGQSxDQUZGO0lBRkksQ0FEUjtFQUpJLENBbEhOO0VBc0lBLElBQUEsRUFBTSxTQUFBO1dBQ0osT0FBTyxDQUFDLFNBQVIsQ0FBa0I7TUFBQyxHQUFBLEVBQUssR0FBRyxDQUFDLElBQVY7S0FBbEIsRUFBbUMsdUJBQUEsR0FBd0IsR0FBRyxDQUFDLElBQS9ELEVBQXVFLEdBQUcsQ0FBQyxJQUEzRTtFQURJLENBdElOO0VBeUlBLEdBQUEsRUFBSyxTQUFDLENBQUQ7SUFDSCxJQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBaEIsS0FBeUIsSUFBNUI7YUFDRSxHQUFHLENBQUMsSUFBSixDQUFTLEdBQUcsQ0FBQyxRQUFiLEVBREY7S0FBQSxNQUFBO2FBR0UsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUEvQixFQUhGOztFQURHLENBeklMIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxvYWQ6IChzY3JpcHQsIGluaXRpYXRlLCBjb21wbGV0ZSkgLT5cblxuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnc2NyaXB0J1xuICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIGVsLnNyYyA9IHNjcmlwdFxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWQnICwgKGUpIC0+XG4gICAgICBjb21wbGV0ZSgpIGlmIHR5cGVvZiBjb21wbGV0ZSBpcyAnZnVuY3Rpb24nXG4gICAgICB3aW5kb3dbaW5pdGlhdGVdLmkoKSBpZiBpbml0aWF0ZSBpc250IHVuZGVmaW5lZCBhbmQgaW5pdGlhdGUgaXNudCBmYWxzZVxuICAgICwgZmFsc2VcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsIlxuQ2Fyb3VzZWwgPVxuXG4gIHNsaWRlbjogMVxuICBzbGlkZXM6IDNcblxuICBpOiAtPlxuICAgIENhcm91c2VsLmhhbmRsZXJzKClcbiAgICBDYXJvdXNlbC5zbGlkZSAxXG4gICAgXy5vZmYgJy5sb2FkZXInXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnLmNhcm91c2VsID4gLm5hdiA+IC5hcnJvdycpLm9uICdjbGljaycsIENhcm91c2VsLmFycm93SGFuZGxlclxuICAgICQoJy5jYXJvdXNlbCA+IC5uYXYgPiAuZG90cyA+IC5kb3QnKS5vbiAnY2xpY2snLCBDYXJvdXNlbC5kb3RIYW5kbGVyXG5cbiAgYXJyb3dIYW5kbGVyOiAtPlxuICAgIENhcm91c2VsLmFycm93ICQodGhpcykuaGFzQ2xhc3MoJ3JpZ2h0JylcblxuICBkb3RIYW5kbGVyOiAtPlxuXG4gICAgQ2Fyb3VzZWwuc2xpZGVuID0gJCh0aGlzKS5kYXRhICdkb3QnXG4gICAgQ2Fyb3VzZWwuc2xpZGUgJCh0aGlzKS5kYXRhICdkb3QnXG5cbiAgYXJyb3c6IChkaXJlY3Rpb24pIC0+XG4gICAgaWYgZGlyZWN0aW9uXG4gICAgICBpZiBDYXJvdXNlbC5zbGlkZW4gaXMgQ2Fyb3VzZWwuc2xpZGVzXG4gICAgICAgIENhcm91c2VsLnNsaWRlIDFcbiAgICAgIGVsc2VcbiAgICAgICAgQ2Fyb3VzZWwuc2xpZGUgQ2Fyb3VzZWwuc2xpZGVuKzFcbiAgICBlbHNlXG4gICAgICBpZiBDYXJvdXNlbC5zbGlkZW4gaXMgMVxuICAgICAgICBDYXJvdXNlbC5zbGlkZSBDYXJvdXNlbC5zbGlkZXNcbiAgICAgIGVsc2VcbiAgICAgICAgQ2Fyb3VzZWwuc2xpZGUgQ2Fyb3VzZWwuc2xpZGVuLTFcblxuICBzbGlkZTogKG51bSkgLT5cblxuICAgIENhcm91c2VsLnNsaWRlbiA9IG51bVxuXG4gICAgXy5vZmYgJy5jYXJvdXNlbCA+IC5zbGlkZXMgPiAuc2xpZGUnXG4gICAgXy5vZmYgJy5jYXJvdXNlbCA+IC5uYXYgPiAuZG90cyA+IC5kb3QnXG4gICAgXy5vbiBcIi5zbGlkZXMgPiAuc2xpZGUuc2xpZGUje0Nhcm91c2VsLnNsaWRlbn1cIlxuICAgIF8ub24gXCIuY2Fyb3VzZWwgPiAubmF2ID4gLmRvdHMgPiAuZG90I3tDYXJvdXNlbC5zbGlkZW59XCJcbiIsImNvbmZpZyA9IHtcImNhcm91c2VsXCI6W3tcImltYWdlXCI6XCJ2b2xpdGlvbi5qcGdcIixcImxpbmtcIjpcIi93b3JrL3ZvbGl0aW9uXCJ9LHtcImltYWdlXCI6XCJkYWZmb2RpbC5qcGdcIixcImxpbmtcIjpcIi93b3JrL2RhZmZvZGlsXCJ9LHtcImltYWdlXCI6XCJkZXN0aWxhZG8uanBnXCIsXCJsaW5rXCI6XCIvd29yay9kZXN0aWxhZG9cIn1dLFwiY29sb3JzXCI6e1wiYmxhY2sxXCI6XCIjMDAwMDAwXCIsXCJibHVlMVwiOlwiIzQ5NGI1YlwiLFwiYmx1ZTJcIjpcIiNiMGI3YzBcIixcImdvbGQxXCI6XCIjYjA5ODZjXCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIn0sXCJmb250c1wiOntcImNvcHkxXCI6XCIyMHB4IGJyYW5kb24gbWVkaXVtXCIsXCJjb3B5MlwiOlwiMTZweCBicmFuZG9uIG1lZGl1bVwiLFwiY29weXNcIjpcIjEycHggYnJhbmRvbiBtZWRpdW1cIixcImNvcHlsXCI6XCIxNnB4IGJyYW5kb24gbGlnaHRcIixcImNvcHk0XCI6XCIxMnB4IGJyYW5kb24gbGlnaHRcIixcImNvcHk1XCI6XCIyMHB4IGJyYW5kb24gYm9sZFwiLFwiaDFcIjpcIjI0cHggYnJhbmRvbiBib2xkXCIsXCJoMlwiOlwiNDBweCBhcXVpbG9uZSByZWd1bGFyXCIsXCJoM1wiOlwiNTBweCBhcXVpbG9uZSByZWd1bGFyXCJ9LFwibWV0YVwiOntcInRpdGxlXCI6XCJEZXNpZ25zYWtlIFN0dWRpb1wiLFwidXJsXCI6XCJodHRwOi8vd3d3LmRlc2lnbnNha2VzdHVkaW8uY29tL1wiLFwiZGVzY3JpcHRpb25cIjpcIkJvdXRpcXVlIGRlc2lnbiBzdHVkaW8gdGhhdCBzcGVjaWFsaXplcyBpbiBicmFuZGluZywgcGFja2FnaW5nLCB3ZWIgZGVzaWduLCBhbmQgZGV2ZWxvcG1lbnRcIixcImtleXdvcmRzXCI6XCJkZXNpZ24sIGdyYXBoaWMgZGVzaWduLCBicmFuZGluZywgcGFja2FnaW5nLCB3ZWIgZGVzaWduLCB3ZWIgZGV2ZWxvcG1lbnQsIGFydCBkaXJlY3Rpb24sIGRlc2lnbnNha2UsXCIsXCJpbWFnZVwiOlwiaW1nL3NoYXJlLmpwZ1wifSxcInNvY2lhbFwiOntcImluc3RhZ3JhbVwiOlwiaHR0cDovL3d3dy5pbnN0YWdyYW0uY29tL2Rlc2lnbnNha2VzdHVkaW9cIixcImZhY2Vib29rXCI6XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9kZXNpZ25zYWtlc3R1ZGlvXCIsXCJwaW50ZXJlc3RcIjpcImh0dHA6Ly93d3cucGludGVyZXN0LmNvbS9kZXNpZ25zYWtlc2ZcIixcIm1haWxcIjpcImluZm9AZGVzaWduc2FrZXN0dWRpby5jb21cIixcIm1hcFwiOlwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL0Rlc2lnbnNha2UrU3R1ZGlvL0AzNy43NjY0NjE2LC0xMjIuNDA1Njk5NCwxN3ovZGF0YT0hM20xITRiMSE0bTUhM200ITFzMHg4MDhmN2UzMjkyNzBmN2FmOjB4YWIwMjdiNmRjNjZmYWU2YyE4bTIhM2QzNy43NjY0NjE2ITRkLTEyMi40MDM1MTA3XCIsXCJwaG9uZVwiOjQxNTUwOTM1MDh9LFwid29ya1wiOntcInZvbGl0aW9uXCI6e1wiZm9sZGVyXCI6XCJ2b2xpdGlvblwiLFwiaW1hZ2VzXCI6NixcInRpdGxlXCI6XCJWb2xpdGlvbiBCZWF1dHlcIixcIm1ldGFcIjpcIlZPTElUSU9OIEJFQVVUWSwgSW5ub3ZhdGl2ZSBiZWF1dHkgY29tcGFueSBsZWFkaW5nIHRoZSBpbmR1c3RyeSBpbiByYWRpY2FsIHRyYW5zcGFyZW5jeVwiLFwiZGVzY3JpcHRpb25cIjpcIlZvbGl0aW9uIGlzIGFuIGlubm92YXRpdmUgY29tcGFueSBvdXQgdG8gY2hhbmdlIHRoZSBiZWF1dHkgaW5kdXN0cnkuIFVubGlrZSB0cmFkaXRpb25hbCBicmFuZHMgaW4gYmVhdXR5LCBWb2xpdGlvbiB3YXMgYm9ybiBvdXQgb2YgdGhlIGlkZWEgdGhhdCBjdXN0b21lcnMgaGF2ZSB0aGUgcmlnaHQgdG8gZHJpdmUgcHJvZHVjdCBkZWNpc2lvbnMgd2hpbGUga25vd2luZyB3aGF0IGlzIGluIHRoZWlyIHByb2R1Y3RzLCBob3cgbXVjaCBpdCBjb3N0cyB0byBtYWtlIHRoZW0sIGFuZCB3aGVyZSB0aGV5IGFyZSBtYWRlLiBBbGwgcHJvZHVjdHMgYXJlIGlubm92YXRlZCBhbmQgY3JlYXRlZCBieSBtZW1iZXJzIG9mIHRoZSBjb21tdW5pdHkuXFxuSW4gYnJhbmRpbmcgVm9saXRpb24gQmVhdXR5LCBEZXNpZ25zYWtlIFN0dWRpbyBkZXZlbG9wZWQgdGhlIGxvZ28sIHBhdHRlcm5zLCBpY29ucywgd2Vic2l0ZSwgYW5kIHByb2R1Y3QgcGFja2FnaW5nIHdpdGggdGhlIGludGVudCBvZiBoaWdobGlnaHRpbmcgdGhlIGNvbXBhbnkncyBjb3JlIHZhbHVlcyBvZiB0cmFuc3BhcmVuY3ksIHByZXN0aWdlIHF1YWxpdHksIGlubm92YXRpb24sIGFuZCBjb21tdW5pdHkuXFxuXCIsXCJzZXJ2aWNlc1wiOltcImJyYW5kIGlkZW50aXR5XCIsXCJsb2dvIGRlc2lnblwiLFwicGFja2FnaW5nIGRlc2lnblwiLFwiYXJ0IGRpcmVjdGlvblwiLFwid2Vic2l0ZSBkZXNpZ25cIl19LFwiZGFmZm9kaWxcIjp7XCJmb2xkZXJcIjpcImRhZmZvZGlsXCIsXCJpbWFnZXNcIjo2LFwidGl0bGVcIjpcIkRhZmZvZGlsIERpZ2l0YWxcIixcIm1ldGFcIjpcIkRBRkZPRElMIERJR0lUQUwsIFNvY2lhbCBhbmQgZGlnaXRhbCBtYXJrZXRpbmcgYWdlbmN5IGhlbHBpbmcgYnJhbmRzIHRlbGwgdGhlaXIgc3RvcmllcyBpbiBzbWFydGVyIHdheXMuXCIsXCJkZXNjcmlwdGlvblwiOlwiRGFmZm9kaWwgRGlnaXRhbCBpcyBhIG5ldyBzb2NpYWwgYW5kIGRpZ2l0YWwgbWFya2V0aW5nIGFnZW5jeSBoZWxwaW5nIGJyYW5kcyB0ZWxsIHRoZWlyIHN0b3JpZXMgaW4gc21hcnRlciB3YXlzLlxcbkRlc2lnbnNha2UgU3R1ZGlvIHdhcyBicm91Z2h0IG9uIGJvYXJkIHRvIGNyZWF0ZSBhIGJyYW5kIHRoYXQgd2FzIGZyZXNoIGFuZCBhcHByb2FjaGFibGUuIFVzaW5nIGJyaWdodCBjb2xvcnMsIGN1c3RvbSBpbGx1c3RyYXRpb25zIGFuZCBpbWFnZXJ5LCB3ZSBjcmVhdGVkIGEgZGVzaWduIHRoYXQgbWFrZXMgc3RyYXRlZ2ljIHN0b3J5dGVsbGluZyBpbiB0aGUgZGlnaXRhbCBzcGFjZSBub3Qgb25seSBpbnNwaXJpbmcsIGJ1dCBhdXRoZW50aWMuIFN0b3AgYW5kIHNtZWxsIHRoZSBEYWZmb2RpbHMuXFxuXCIsXCJzZXJ2aWNlc1wiOltcImJyYW5kIGlkZW50aXR5XCIsXCJsb2dvIGRlc2lnblwiLFwiYXJ0IGRpcmVjdGlvblwiLFwicGhvdG9ncmFwaHlcIixcIndlYnNpdGUgZGVzaWduXCJdfSxcImRlc3RpbGFkb1wiOntcImZvbGRlclwiOlwiZGVzdGlsYWRvXCIsXCJpbWFnZXNcIjo2LFwidGl0bGVcIjpcIkVsIERlc3RpbGFkb1wiLFwibWV0YVwiOlwiRUwgREVTVElMQURPICwgSW50aW1hdGUgZWF0ZXJ5IG9mZmVyaW5nIGZyZXNoLCBsb2NhbCBmYXJlIGFuZCBjcmVhdGl2ZSBjb2NrdGFpbHMgaW4gdGhlIGNlbnRlciBvZiBPYXhhY2EsIE1leGljb1wiLFwiZGVzY3JpcHRpb25cIjpcIkVsIERlc3RpbGFkbyBpcyBhIG5ldyByZXN0YXVyYW50IG9mZmVyaW5nIGhpZ2ggcXVhbGl0eSBmb29kIGFuZCBjcmVhdGl2ZSBjb2NrdGFpbHMgaW4gdGhlIGNlbnRlciBvZiBkb3dudG93biBPYXhhY2EsIE1leGljby5cXG5BIGNhZsOpIGJ5IGRheSwgYW5kIHNwZWFrIGVhc3kgbWV6Y2FsZXLDrWEgYnkgbmlnaHQsIEVsIERlc3RpbGFkbyBvZmZlcnMgYW4gaW50aW1hdGUgYW5kIGN1bHR1cmFsIGRpbm5pbmcgZXhwZXJpZW5jZS4gSW4gZGV2ZWxvcGluZyBFbCBEZXN0aWxhZG/igJlzIGlkZW50aXR5IHdlIGRyZXcgaW5zcGlyYXRpb24gZnJvbSB0aGUgYXJlYXMgcmljaCBoaXN0b3J5IG9mIGFydHMgYW5kIGN1bGluYXJ5IHRyYWRpdGlvbnMuIFdlIGNyZWF0ZSBhIGxvZ28gdGhhdCBoaWdobGlnaHRlZCB0aGUgcmVzdGF1cmFudCdzIGN1c3RvbSBjb3BwZXIgZGlzdGlsbGVyeSB1c2VkIHRvIG1ha2UgdGhlaXIgMTUgcGx1cyB2YXJpZXRhbHMgb2YgTWV6Y2FsLiBXZSBhbHNvIHVzZWQgYSBjb2xvciBwYWxldHRlIHRoYXQgY29tcGxpbWVudHMgdGhlIHJlc3RhdXJhbnRzIHRpbGUgZGV0YWlscywgcmljaCB3b29kIHRhYmxlcywgYW5kIG11cmFsIGNvdmVyZWQgd2FsbHMuXFxuXCIsXCJzZXJ2aWNlc1wiOltcImJyYW5kIGlkZW50aXR5XCIsXCJsb2dvIGRlc2lnblwiLFwiYXJ0IGRpcmVjdGlvblwiXX0sXCJiYXRjaFwiOntcImZvbGRlclwiOlwiYmF0Y2hcIixcImltYWdlc1wiOjUsXCJ0aXRsZVwiOlwiQmF0Y2ggYW5kIEJhdHRlclwiLFwibWV0YVwiOlwiQkFUQ0ggJiBCQVRURVIgQXJ0aXNhbiB3YWZmbGUgaWNlLWNyZWFtIHNhbmR3aWNoZXMgbWFkZSB3aXRoIG9yZ2FuaWMgaW5ncmVkaWVudHMgYW5kIGF2YWlsYWJsZSBieSBmb29kIHRydWNrIHRocm91Z2hvdXQgU2FuIEZyYW5jaXNjbywgQ2FsaWZvcm5pYS5cIixcImRlc2NyaXB0aW9uXCI6XCJCYXRjaCAmIEJhdHRlciBjcmVhdGVzIGFydGlzYW4gd2FmZmxlIGljZSBjcmVhbSBzYW5kd2ljaGVzIHVzaW5nIGxvY2FsbHkgc291cmNlZCwgb3JnYW5pYyBpbmdyZWRpZW50cy4gRWFjaCBzYW5kd2ljaCBpcyBtYWRlIHdpdGggdHdvIHNjb29wcyBvZiBzbWFsbCBiYXRjaCBpY2UgY3JlYW0gcmFuZ2luZyBpbiBhIHZhcmlldHkgb2YgdW5pcXVlIGZsYXZvcnMgYW5kIHNhbmR3aWNoZWQgYmV0d2VlbiBmcmVzaGx5IG1hZGUgd2FmZmxlcy4gQW5kIHRoZSBiZXN0IHBhcnQ6IHRoZXNlIHNhbmR3aWNoZXMgYXJlIG1hZGUgdG8gb3JkZXIgaW4gYSBmb29kIHRydWNrIHRoYXQgbWFrZXMgYXBwZWFyYW5jZXMgYWxsIG92ZXIgU2FuIEZyYW5jaXNjby5cXG5UaGUgZ29hbHMgaW4gY3JlYXRpbmcgQmF0Y2ggJiBCYXR0ZXLigJlzIGlkZW50aXR5IGFuZCBwcm9kdWN0IHBhY2thZ2luZyB3ZXJlIHRvIGhpZ2hsaWdodCB0aGUgdHJhbnNwYXJlbmN5IG9mIGluZ3JlZGllbnRzLCB0aGUgYXJ0aXNhbiBxdWFsaXR5IGJlaGluZCB0aGVpciBzYW5kd2ljaGVzLCBhbmQgbGFzdGx5LCBkZWxpdmVyaW5nIGEgbm9zdGFsZ2ljIGV4cGVyaWVuY2Ugc2ltaWxhciB0byB0aGF0IG9mIGJlaW5nIGEgY2hpbGQgb3JkZXJpbmcgZnJvbSBhbiBpY2UgY3JlYW0gdHJ1Y2suXFxuXCIsXCJzZXJ2aWNlc1wiOltcImJyYW5kIGlkZW50aXR5XCIsXCJsb2dvIGRlc2lnblwiLFwicGFja2FnaW5nIGRlc2lnblwiLFwiYXJ0IGRpcmVjdGlvblwiXX0sXCJiZW5lZml0XCI6e1wiZm9sZGVyXCI6XCJiZW5lZml0XCIsXCJpbWFnZXNcIjo2LFwidGl0bGVcIjpcIkJlbmVmaXQgQ29zbWV0aWNzXCIsXCJtZXRhXCI6XCJCRU5FRklUIENPU01FVElDUywgRXN0YWJsaXNoZWQgY29zbWV0aWNzIGNvbXBhbnkgZmFtb3VzIGZvciB0aGVpciBib2xkIGFuZCBnaXJseSBhZXN0aGV0aWMuXCIsXCJkZXNjcmlwdGlvblwiOlwiQmVuZWZpdCBDb3NtZXRpY3MgaGFzIGZhbWVkIHRoZSBib2xkIGFuZCBnaXJseSBwZXJzb25hIGluIHRoZSBjb3NtZXRpY3MgaW5kdXN0cnkuIEFmdGVyIDMwIHBsdXMgeWVhcnMgb2YgYnVzaW5lc3MsIEJlbmVmaXQgaGFzIGRldmVsb3BlZCBhIHZpc3VhbGx5IHJpY2ggaGlzdG9yeSB0aGF0IGNvbnRpbnVlcyB0byBzaGFwZSB0aGUgY29tcGFueSdzIGlkZW50aXR5LlxcbkFzIGEgYnJhbmQgdGhleSBjb250aW51ZSB0byBleHBlcmltZW50IHdpdGggY29sb3IsIHBhdHRlcm5zLCBhbmQgdHlwZSBldmVyeXdoZXJlIHRoZXkgY2FuLCB3aGV0aGVyIGl0IGJlIGluIHRoZWlyIHBhY2thZ2luZyBvciByZXRhaWwgc3BhY2VzLiBBbGwgdGhlIHdoaWxlIHN0YXlpbmcgdHJ1ZSB0byB0aGUgYnJhbmTigJlzIHVuaXF1ZSBETkEuIEZlYXR1cmVkIGhlcmUgYXJlIHNhbXBsZXMgb2YgcHJvZHVjdCBwYWNrYWdpbmcgYW5kIG1hcmtldGluZyBjb2xsYXRlcmFsIGNyZWF0ZWQgZm9yIHRoZSBjb21wYW55LlxcblwiLFwic2VydmljZXNcIjpbXCJwYWNrYWdpbmcgZGVzaWduXCIsXCJsb2dvIGRlc2lnblwiLFwiYXJ0IGRpcmVjdGlvblwiXX0sXCJnb2xkcHJcIjp7XCJmb2xkZXJcIjpcImdvbGRwclwiLFwibGlua1wiOlwiaHR0cDovL3d3dy5nb2xkcHIuY29tL1wiLFwiaW1hZ2VzXCI6NixcInRpdGxlXCI6XCJHb2xkIFBSXCIsXCJtZXRhXCI6XCJHb2xkIFBSICYgU29jaWFsIE1lZGlhLCBCb3V0aXF1ZSBQUiBhbmQgU29jaWFsIE1lZGlhIE1hcmtldGluZyBhZ2VuY3lcIixcImRlc2NyaXB0aW9uXCI6XCJHb2xkIFBSICYgU29jaWFsIE1lZGlhIGlzIGEgYm91dGlxdWUgcHVibGljIHJlbGF0aW9ucyBhbmQgc29jaWFsIG1lZGlhIG1hcmtldGluZyBhZ2VuY3kuIE92ZXIgdGhlIGxhc3QgMTAgeWVhcnMgdGhpcyBicmFuZCBoYXMgc3VwcG9ydGVkIG51bWVyb3VzIGNvbXBhbmllcyB3aXRoIHRoZWlyIGxhdW5jaCBhbmQgc29jaWFsIHN0cmF0ZWdpZXMgaW4gaW5kdXN0cmllcyBsaWtlIGNvbnN1bWVyIHByb2R1Y3RzLCBoZWFsdGgsIGJlYXV0eSwgbWVkaWNhbCB0ZWNobm9sb2d5LCBmb29kIGFuZCBiZXZlcmFnZS5cXG5UaGUgY29tcGFueSBjYW1lIHRvIERlc2lnbnNha2UgU3R1ZGlvIGFza2luZyBmb3IgYSBjb21wbGV0ZSBicmFuZCByZWRlc2lnbi4gV2Ugd29ya2VkIHdpdGggR29sZCBQUiAmIFNvY2lhbCBNZWRpYSB0byByZXZhbXAgdGhlaXIgbG9nbywgd2Vic2l0ZSwgYW5kIHByaW50ZWQgY29sbGF0ZXJhbC4gVGhlIHZpYnJhbnQgY29sb3IgcGFsZXR0ZSBhbmQgc2ltcGxpc3RpYyB0eXBvZ3JhcGh5IGNvdXBsZWQgd2l0aCBjdXN0b20gcGhvdG9ncmFwaHkgcHJvdmlkZWQgdGhlIGZyZXNoLCBhbmQgZmVtaW5pbmUgZmFjZWxpZnQgdGhpcyBib3V0aXF1ZSBhZ2VuY3kgbmVlZGVkLlxcblwiLFwic2VydmljZXNcIjpbXCJicmFuZCBpZGVudGl0eVwiLFwibG9nbyBkZXNpZ25cIixcImFydCBkaXJlY3Rpb25cIixcIndlYnNpdGUgZGVzaWduXCIsXCJ3ZWJzaXRlIGRldmVsb3BtZW50XCJdfSxcInNlcGhvcmFcIjp7XCJmb2xkZXJcIjpcInNlcGhvcmFcIixcImltYWdlc1wiOjUsXCJ0aXRsZVwiOlwiU2VwaG9yYVwiLFwibWV0YVwiOlwiU0VQSE9SQSwgSW50ZXJuYXRpb25hbCBjb3NtZXRpYyBicmFuZCBhbmQgcmV0YWlsZXJcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgU2VwaG9yYSBDb2xsZWN0aW9uIGlzIGtub3duIGZvciBpdOKAmXMgZXh0ZW5zaXZlIG1ha2V1cCwgdG9vbHMsIGJydXNoZXMgYW5kIHNraW4gY2FyZSBwcm9kdWN0cyBkZXNpZ25lZCB0byBoZWxwIGN1c3RvbWVycyBleHBlcmltZW50LCBleHByZXNzIGFuZCBleHBsb3JlLlxcbkZlYXR1cmVkIGhlcmUgYXJlIGEgZmV3IHByaW50ZWQgcGllY2VzIHdlIGhhdmUgZGVzaWduZWQgZm9yIHRoZSBTZXBob3JhIENvbGxlY3Rpb24gdGVhbS5cXG5cIixcInNlcnZpY2VzXCI6W1wiYXJ0IGRpcmVjdGlvblwiLFwicHJpbnQgY29sbGF0ZXJhbFwiXX0sXCJlbmNoYW50bWVudFwiOntcImZvbGRlclwiOlwiZW5jaGFudG1lbnRcIixcImltYWdlc1wiOjQsXCJ0aXRsZVwiOlwiRW5jaGFudG1lbnQgRmFybVwiLFwibWV0YVwiOlwiRU5DSEFOVE1FTlQgRkFSTSAsIFdvcmtpbmcgaG9yc2UgcmFuY2ggbG9jYXRlZCBpbiBUZW1lY3VsYSwgQ2FsaWZvcm5pYVwiLFwiZGVzY3JpcHRpb25cIjpcIkVuY2hhbnRtZW50IEZhcm0gaXMgYSBuZXcgZm91cnRlZW4tYWNyZSBob3JzZSByYW5jaCBsb2NhdGVkIG9uIHRoZSBwcmVzdGlnaW91cyBEZSBQb3J0b2xhIFJvYWQgaW4gVGVtZWN1bGEsIENhbGlmb3JuaWEuIFRoZSBvd25lciBoYXMgYmVlbiBpbnZvbHZlZCBpbiBjb21wZXRpdGl2ZSByaWRpbmcgc2luY2Ugc2hlIHdhcyBhIGNoaWxkIGFuZCBoYXMgbm93IGZ1bGZpbGxlZCBhIGxpZmVsb25nIGRyZWFtIG9mIG93bmluZyBoZXIgb3duIHJhbmNoLiBEZXNpZ25zYWtlIFN0dWRpbyBkZXZlbG9wZWQgYSBsb2dvIGZvciB0aGUgcmFuY2ggaW5zcGlyZWQgYnkgdmludGFnZSBmYWlyeXRhbGUgYm9va3MuIFRoZSB3YXJtIGNvbG9yIHBhbGV0dGUgb2YgZ3JheXMgYW5kIGdyZWVucyBoaWdobGlnaHRzIHRoZSByYW5jaCdzIG5hdHVyYWwgbGFuZHNjYXBlIGFuZCBjb21wbGltZW50cyB0aGUgbW9kZXJuIHR5cG9ncmFwaHkuIEhpbnRzIG9mIG1ldGFsbGljIGluayBhZGQgYSB0b3VjaCBvZiBzb3BoaXN0aWNhdGlvbiBhbmQgbm9kIHRvIHRoZSByYW5jaCdzIGF3YXJkIHdpbm5pbmcgaG9yc2VzLlxcblwiLFwic2VydmljZXNcIjpbXCJicmFuZCBpZGVudGl0eVwiLFwibG9nbyBkZXNpZ25cIixcImFydCBkaXJlY3Rpb25cIl19fX07IiwiSW5kZXggPVxuXG4gIGk6IC0+XG5cbiIsIlxuSW5zdGEgPVxuICBlbmRwb2ludDogJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvJ1xuICB0b2tlbjogJzE3MDk5MTM2MjcuODc5NzZjMy4wNDE1YmQ5N2Q4MTA0ZGYzYWY4MTEwZTU3ZDVmMTM0OSdcbiAgcG9zdHM6IDVcbiAgbG9hZGVkOiBmYWxzZVxuXG4gIGk6IC0+XG5cbiAgICBpZiBJbnN0YS5sb2FkZWQgaXNudCB0cnVlXG4gICAgICBJbnN0YS5sb2FkKClcblxuICBsb2FkOiAtPlxuICAgIF8ubG9hZCBcIiN7SW5zdGEuZW5kcG9pbnR9P2FjY2Vzc190b2tlbj0je0luc3RhLnRva2VufSZjYWxsYmFjaz1JbnN0YS5jYWxsYmFja1wiXG4gICAgSW5zdGEubG9hZGVkID0gdHJ1ZVxuXG4gIGNhbGxiYWNrOiAoanNvbikgLT5cbiAgICBmb3IgcG9zdCwgaW5kZXggaW4ganNvbi5kYXRhXG4gICAgICByZXR1cm4gdHJ1ZSBpZiBpbmRleCBpcyBJbnN0YS5wb3N0c1xuICAgICAgJCgnLmluc3RhZ3JhbSA+IC5wb3N0cycpLmFwcGVuZCBcIlwiXCJcblxuICAgICAgICA8YSBocmVmPVwiI3twb3N0Lmxpbmt9XCIgdGFyZ2V0PVwiX25ld1wiIGNsYXNzPVwicG9zdFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiI3twb3N0LmltYWdlcy5zdGFuZGFyZF9yZXNvbHV0aW9uLnVybH1cIi8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlc1wiPiN7cG9zdC5saWtlcy5jb3VudH0gJiM5ODI1OyA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuXG4gICAgICBcIlwiXCJcblxuIiwiUHJlaW1nID0gKGh0bWwsIHByb2dyZXNzLCBjb21wbGV0ZSkgLT5cblxuICB1cmxzID0gW11cblxuXG4gIHNjcmFwZUltZyA9IChodG1sKSAtPlxuXG4gICAgaWYgIWh0bWwgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGh0bWwgPSAkKGh0bWwpXG5cbiAgICAkKGh0bWwpLmZpbmQoJ2ltZycpLm1hcCAtPlxuICAgICAgdXJscy5wdXNoIHRoaXMuc3JjXG5cbiAgICAkKGh0bWwpLmZpbmQoJ2RpdiwgYScpLm1hcCAtPlxuICAgICAgYXR0ciA9ICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kSW1hZ2UnKVxuICAgICAgcmV0dXJuIHRydWUgaWYgYXR0ci5sZW5ndGggaXMgMCBvciBhdHRyIGlzICdub25lJ1xuICAgICAgaW1hZ2UgPSBhdHRyLnJlcGxhY2UoJ3VybCgnLCAnJykucmVwbGFjZSgnKScsICcnKS5yZXBsYWNlKC9cIi9nLCAnJylcbiAgICAgIHVybHMucHVzaCBpbWFnZSBpZiBpbWFnZSBpc250ICcnXG5cbiAgIGxvYWQgPSAtPlxuXG4gICAgIGxvYWRlZCA9IDBcbiAgICAgdG90YWwgPSB1cmxzLmxlbmd0aFxuXG4gICAgIGlmIGxvYWRlZCBpcyB0b3RhbCB0aGVuIGNvbXBsZXRlKHRydWUpXG5cbiAgICAgaW1hZ2VzID0gW11cblxuICAgICBmb3IgdXJsLCBpIGluIHVybHNcbiAgICAgICBpbWFnZXNbaV0gPSBuZXcgSW1hZ2UoKVxuICAgICAgIGltYWdlc1tpXS5zcmMgPSB1cmxcbiAgICAgICBpbWFnZXNbaV0ub25sb2FkID0gKGUpIC0+XG4gICAgICAgICBsb2FkZWQrK1xuICAgICAgICAgcGVyYyA9IE1hdGgucm91bmQobG9hZGVkL3RvdGFsKjEwMCkvMTAwXG4gICAgICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKSBlbHNlIHByb2dyZXNzKHBlcmMpXG5cbiAgc2NyYXBlSW1nIGh0bWxcbiAgbG9hZCgpXG5cbiAgcmV0dXJuIHRydWVcbiAgICAgIFxuIiwiXG5TcGEgPVxuXG4gIGluc3RhZ3JhbTogZmFsc2VcbiAgb3JpZ2luYWw6IG51bGxcbiAgcGFnZTogbnVsbFxuICBjYWNoZTpcbiAgICB3aW5kb3c6IHdpbmRvd1xuICAgIHN0aWNraWVkOiBmYWxzZVxuICBvcHRpb25zOlxuICAgIHdvcms6ICcvd29yay8nXG4gICAgc3R1ZGlvOiAnL3N0dWRpby8nXG4gICAgY29udGFjdDogJy9jb250YWN0LydcblxuICBpOiAtPlxuXG4gICAgU3BhLnBhZ2UgPSBTcGEub3JpZ2luYWwgPSBsb2NhdGlvbi5wYXRobmFtZVxuICAgIFNwYS5hY3RpdmF0ZSBTcGEucGFnZVxuXG4gICAgUHJlaW1nICQoJyNjb250YWluZXIgPiAjaW5uZXInKSwgKGNvbXBsZXRlKSAtPlxuICAgICAgJCgnLnNwaW5uZXIgPiAuY29tcGxldGUnKS5jc3MgJ2hlaWdodCcsIFwiI3tjb21wbGV0ZSoxMDB9JVwiXG4gICAgLCAoZG9uZSkgLT5cbiAgICAgICQoJy5zcGlubmVyID4gLmNvbXBsZXRlJykuY3NzICdoZWlnaHQnLCAnMTAwJSdcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vZmYgJy5zcGlubmVyJ1xuICAgICAgICAkKCcuc3Bpbm5lciA+IC5jb21wbGV0ZScpLmNzcyAnaGVpZ2h0JywgJzAlJ1xuICAgICAgICBfLm9uICcjY29udGFpbmVyID4gI2lubmVyJ1xuICAgICAgLCAxMDAwXG5cbiAgICBTcGEuY2FjaGUud2luZG93ID0gJCh3aW5kb3cpXG5cbiAgICBTcGEuaGFuZGxlcnMoKVxuXG4gICAgaWYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMDAwXG4gICAgICBzZXRJbnRlcnZhbCBTcGEuaGVhZGVyLCAyMFxuXG4gIGhlYWRlcjogLT5cblxuICAgIGlmIFNwYS5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPiA0MDAgYW5kIFNwYS5jYWNoZS5zdGlja2llZCBpcyBmYWxzZVxuICAgICAgXy5vbiAnaGVhZGVyLnN0aWNreSdcbiAgICAgIF8ub2ZmICdoZWFkZXIubm9ybWFsJ1xuICAgICAgJCgnI2NvbnRhaW5lcicpLmFkZENsYXNzICdzdGlja3knXG5cbiAgICAgIFNwYS5jYWNoZS5zdGlja2llZCA9IHRydWVcblxuICAgIGlmIFNwYS5jYWNoZS53aW5kb3cuc2Nyb2xsVG9wKCkgPCA0MDAgYW5kIFNwYS5jYWNoZS5zdGlja2llZCBpcyB0cnVlXG4gICAgICBfLm9mZiAnaGVhZGVyLnN0aWNreSdcbiAgICAgIF8ub24gJ2hlYWRlci5ub3JtYWwnXG4gICAgICAkKCcjY29udGFpbmVyJykucmVtb3ZlQ2xhc3MgJ3N0aWNreSdcbiAgICAgIFNwYS5jYWNoZS5zdGlja2llZCA9IGZhbHNlXG5cbiAgaGFuZGxlcnM6IC0+XG5cbiAgICAjIG1haW4gbWVudVxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gdWwgPiBsaSA+IGEsIGhlYWRlciA+IC5pbm5lciA+IGEubG9nbycpLm9uICdjbGljaycsIFNwYS5tZW51SGFuZGxlclxuXG4gICAgIyBiYWNrIGJ1dHRvblxuICAgICQod2luZG93KS5iaW5kICdwb3BzdGF0ZScsIFNwYS5wb3BcblxuICAgICMgd29yayB0aWxlIG1lbnVcbiAgICAkKCcjY29udGFpbmVyJykub24gJ2NsaWNrJywgJy5wYWdlLndvcmsgPiAudGlsZXMgPiBhLnRpbGUnLCBTcGEudGlsZUhhbmRsZXJcblxuICAgICMgd29yayBzdWIgbWVudVxuICAgICQoJyNjb250YWluZXInKS5vbiAnY2xpY2snLCAnLnBhZ2UuZGV0YWlsID4gLnN1Ym1lbnUgPiBhJywgU3BhLnN1Ym1lbnVIYW5kbGVyXG5cbiAgdGlsZUhhbmRsZXI6IChlKSAtPlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBwYWdlID0gJCh0aGlzKS5hdHRyICdocmVmJ1xuXG4gICAgcmV0dXJuIHRydWUgaWYgcGFnZSBpcyB1bmRlZmluZWRcbiAgICByZXR1cm4gdHJ1ZSBpZiBwYWdlIGlzIGxvY2F0aW9uLnBhdGhuYW1lXG5cbiAgICBTcGEubG9hZCBwYWdlLCAnI2lubmVyJywgJyNjb250YWluZXIgPiAjaW5uZXInLCAtPlxuICAgICAgU3BhLnB1c2goKVxuXG4gIHN1Ym1lbnVIYW5kbGVyOiAoZSkgLT5cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgcGFnZSA9ICQodGhpcykuYXR0ciAnaHJlZidcblxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRydWUgaWYgcGFnZSBpcyBsb2NhdGlvbi5wYXRobmFtZVxuXG4gICAgXy5vbiAnLnNwaW5uZXInXG4gICAgXy5vZmYgJy5zdWJtZW51IGEnXG4gICAgXy5vbiBcIi5zdWJtZW51IGEuaXRlbV8je3BhZ2UucmVwbGFjZSgnd29yaycsICcnKS5yZXBsYWNlKC9cXC8vZywgJycpfVwiXG5cbiAgICBTcGEubG9hZCBwYWdlLCAnLmRldGFpbHMnLCAnI2NvbnRhaW5lciA+ICNpbm5lciAuZGV0YWlscycsIC0+XG4gICAgICBTcGEucHVzaCgpXG4gICAgXG4gIG1lbnVIYW5kbGVyOiAoZSkgLT5cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgcGFnZSA9ICQodGhpcykuZGF0YSAncGFnZSdcbiAgICBvcHRpb24gPSAkKHRoaXMpLmRhdGEgJ29wdGlvbidcblxuICAgIHJldHVybiB0cnVlIGlmIHBhZ2UgaXMgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRydWUgaWYgcGFnZSBpcyBsb2NhdGlvbi5wYXRobmFtZVxuXG4gICAgXy5vZmYgJ2hlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gdWwgPiBsaSA+IGEnXG4gICAgXy5vbiBcImhlYWRlciA+IC5pbm5lciA+IC5tZW51ID4gdWwgPiBsaSA+IGEub3B0aW9uXyN7b3B0aW9ufVwiXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBTcGEubG9hZCBwYWdlLCAnI2lubmVyJywgJyNjb250YWluZXIgPiAjaW5uZXInLCAtPlxuICAgICAgICBTcGEucHVzaCgpXG4gICAgLCA0MDBcblxuICBhY3RpdmF0ZTogLT5cbiAgICBfLm9mZiAnaGVhZGVyID4gLmlubmVyID4gLm1lbnUgPiB1bCA+IGxpID4gYSdcbiAgICBmb3IgaywgdiBvZiBTcGEub3B0aW9uc1xuICAgICAgaWYgU3BhLnBhZ2UubWF0Y2godikgaXNudCBudWxsXG4gICAgICAgIF8ub24gXCJoZWFkZXIgPiAuaW5uZXIgPiAubWVudSA+IHVsID4gbGkgPiBhLm9wdGlvbl8je2t9XCJcblxuICBsb2FkOiAocGFnZSwgZmluZCwgcmVwbGFjZSwgY2IpIC0+XG5cbiAgICBfLm9uICcuc3Bpbm5lcidcbiAgICBcbiAgICAkLmdldCBwYWdlXG4gICAgICAuZG9uZSAocmVzdWx0KSAtPlxuICAgICAgICBodG1sID0gJChyZXN1bHQpLmZpbHRlcignI2NvbnRhaW5lcicpLmZpbmQoZmluZClcbiAgICAgICAgUHJlaW1nIGh0bWwsIChjb21wbGV0ZSkgLT5cbiAgICAgICAgICAkKCcuc3Bpbm5lciA+IC5jb21wbGV0ZScpLmNzcyAnaGVpZ2h0JywgXCIje2NvbXBsZXRlKjEwMH0lXCJcbiAgICAgICAgLCAoZG9uZSkgLT5cbiAgICAgICAgICAkKCcuc3Bpbm5lciA+IC5jb21wbGV0ZScpLmNzcyAnaGVpZ2h0JywgJzEwMCUnXG4gICAgICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAgICAgXy5vZmYgJy5zcGlubmVyJ1xuICAgICAgICAgICAgJCgnLnNwaW5uZXIgPiAuY29tcGxldGUnKS5jc3MgJ2hlaWdodCcsICcwJSdcbiAgICAgICAgICAgICQocmVwbGFjZSkucmVwbGFjZVdpdGggaHRtbFxuICAgICAgICAgICAgXy5vbiAnI2NvbnRhaW5lciA+ICNpbm5lcidcbiAgICAgICAgICAgIFNwYS5wYWdlID0gcGFnZVxuICAgICAgICAgICAgY2I/KClcbiAgICAgICAgICAsIDEwMDBcblxuICBwdXNoOiAtPlxuICAgIGhpc3RvcnkucHVzaFN0YXRlIHt1cmw6IFNwYS5wYWdlfSwgXCJEZXNpZ24gU2FrZSBTdHVkaW8gLSAje1NwYS5wYWdlfVwiLCBTcGEucGFnZVxuICAgICAgICBcbiAgcG9wOiAoZSkgLT5cbiAgICBpZiBlLm9yaWdpbmFsRXZlbnQuc3RhdGUgaXMgbnVsbFxuICAgICAgU3BhLmxvYWQgU3BhLm9yaWdpbmFsXG4gICAgZWxzZVxuICAgICAgU3BhLmxvYWQgZS5vcmlnaW5hbEV2ZW50LnN0YXRlLnVybFxuXG4iXX0=
