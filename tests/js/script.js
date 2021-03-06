import { tns } from '../../src/tiny-slider';

var doc = document;
window.isDemoPage = doc.body.getAttribute('data-page') === 'demos';
window.classIn = (doc.body.getAttribute('data-page') === 'demos') ? 'jello' : 'tns-fadeIn';
window.classOut = (doc.body.getAttribute('data-page') === 'demos') ? 'rollOut' : 'tns-fadeOut';
window.sliders = new Object();
window.speed = Number(document.body.getAttribute('data-speed'));
window.edgepadding = 50;
window.gutter = 10;
window.options = {
  // 'test': {
  //   mode: 'gallery',
  //   gutter: 20,
  //   edgePadding: 50,
  //   items: 2,
  //   disable: true,
  //   responsive: {
  //     600: {
  //       items: 3,
  //       controls: true,
  //       disable: false,
  //     },
  //     900: {
  //       items: 4,
  //       disable: true,
  //     }
  //   }
  // },
  'base': {
    container: '',
    items: 3,
    // navAnimationIn: 'active',
    // navAnimationOut: 'normal',
    slideBy: 'page',
  },
  'few-items': {
    container: '',
    items: 9,
    slideBy: 'page',
    mouseDrag: true,
    arrowKeys: true,
    autoplay: true,
  },
  'mouse-drag': {
    container: '',
    items: 3,
    mouseDrag: true,
    slideBy: 'page',
  },
  'mouse-drag2': {
    container: '',
    items: 3,
    mouseDrag: true,
    slideBy: 'page',
  },
  'gutter': {
    container: '',
    items: 3,
    gutter: gutter,
  },
  'edgePadding': {
    container: '',
    items: 3,
    edgePadding: edgepadding,
  },
  'edgePadding-gutter': {
    container: '',
    items: 3,
    gutter: gutter,
    edgePadding: edgepadding,
  },
  'non-loop': {
    container: '',
    // items: 3,
    loop: false,
    responsive: {
      500: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  }, 
  'rewind': {
    container: '',
    items: 3,
    rewind: true,
  }, 
  'slide-by-page': {
    container: '',
    items: 3,
    slideBy: 'page',
  }, 
  'fixedWidth': {
    container: '',
    fixedWidth: 300,
  }, 
  'fixedWidth-gutter': {
    container: '',
    gutter: gutter,
    fixedWidth: 300,
  }, 
  'fixedWidth-edgePadding': {
    container: '',
    edgePadding: edgepadding,
    fixedWidth: 300,
  }, 
  'fixedWidth-edgePadding-gutter': {
    container: '',
    gutter: gutter,
    edgePadding: edgepadding,
    fixedWidth: 300,
    slideBy: 2,
    loop: false,
    arrowKeys: true,
  }, 
  'responsive': {
    items: 2,
    controls: false,
    responsive: {
      600: {
        items: 3,
        controls: true,
        edgePadding: 30,
      },
      900: {
        items: 4
      }
    }
  },
  'responsive1': {
    container: '',
    gutter: 10,
    slideBy: 1,
    responsive: {
      600: {
        items: 2,
        edgePadding: 20,
      },
      900: {
        items: 3,
        gutter: 0,
        edgePadding: 40,
        slideBy: 'page',
      }
    },
  }, 
  'responsive2': {
    items: 3,
    autoplayTimeout: 500,
    responsive: {
      600: {
        controls: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
      },
      900: {
        nav: false,
        controls: true,
        autoplay: false,
      }
    }
  },
  'responsive3': {
    items: 3,
    autoplay: true,
    responsive: {
      600: {
        controlsText: ['&lt;', '&gt;'],
        autoplayText: ['&gt;', '||'],
      },
      900: {
        controlsText: ['prev', 'next'],
        autoplayText: ['start', 'stop'],
      }
    }
  },
  'responsive4': {
    items: 3,
    responsive: {
      600: {
        touch: false,
        mouseDrag: false,
        arrowKeys: false,
      },
      900: {
        touch: true,
        mouseDrag: true,
        arrowKeys: true,
      }
    }
  },
  'responsive5': {
    fixedWidth: 300,
    autoHeight: false,
    responsive: {
      600: {
        autoHeight: true,
        fixedWidth: 500,
      }
    }
  },
  'responsive6': {
    fixedWidth: 300,
    edgePadding: edgepadding,
    gutter: gutter,
    loop: false,
  },
  'arrowKeys': {
    container: '',
    items: 3,
    arrowKeys: true,
  },
  'autoplay': {
    container: '',
    items: 3,
    speed: 300,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1500,
    autoplayText: ['▶', '❚❚'],
    // autoplayButtonOutput: false,
  }, 
  'vertical': {
    container: '',
    items: 3,
    axis: 'vertical',
  }, 
  'vertical-gutter': {
    container: '',
    items: 3,
    axis: 'vertical',
    gutter: gutter,
  }, 
  'vertical-edgePadding': {
    container: '',
    items: 3,
    axis: 'vertical',
    edgePadding: edgepadding,
  }, 
  'vertical-edgePadding-gutter': {
    container: '',
    items: 3,
    axis: 'vertical',
    gutter: gutter,
    edgePadding: edgepadding,
  }, 
  'animation1': {
    container: '',
    mode: 'gallery',
    items: 2,
    animateIn: classIn,
    animateOut: classOut,
    speed: 1000,
  },
  'animation2': {
    container: '',
    mode: 'gallery',
    items: 2,
    speed: 0,
  },
  'lazyload': {
    container: '',
    items: 3,
    edgePadding: 40,
    lazyload: true,
    onInit: function (info) {
      // console.log(info.items);
    },
  },
  'customize': {
    container: '',
    items: 3,
    controlsContainer: '#customize-controls',
    navContainer: '#customize-thumbnails',
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayButton: '#customize-toggle',
  },
  'autoHeight': {
    container: '',
    autoHeight: true,
    items: 1,
  },
  'nested_inner': {
    container: '',
    items: 3,
    nested: 'inner',
    edgePadding: 20,
    loop: false,
    slideBy: 'page'
  },
  'nested': {
    container: '',
    items: 1,
    loop: false,
    // autoHeight: true,
    nested: 'outer'
  }
};

for (var i in options) {
  var item = options[i];
  item.container = '#' + i;
  if (!item.speed) { item.speed = speed; }
  if (doc.querySelector(item.container)) {
    sliders[i] = tns(options[i]);
    // sliders[i].destroy();

    // insert code
    if (isDemoPage) {
      doc.querySelector('#' + i + '_wrapper').insertAdjacentHTML('beforeend', '<pre><code class="language-javascript">' + JSON.stringify(item, function (key, value) {
        if (typeof value === 'object') {
          if (value.id) {
            return "document.querySelector('#" + value.id + "')";
          }
        }
        return value;
      }, '  ') + '</code></pre>');
    }
  }
}

// goto
if (doc.querySelector('#base_wrapper')) {
  var goto = doc.querySelector('#base_wrapper .goto-controls'),
      gotoBtn = goto.querySelector('.button'),
      gotoInput = goto.querySelector('input');

  gotoBtn.onclick = function (event) {
    var index = gotoInput.value;
    sliders['base'].goTo(index);
  };
}