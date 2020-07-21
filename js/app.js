'use strict';




let page1 = $(`<button >page1</button>`)
$("#pages").append(page1)

$(page1).click(function () {
  let gallery = [];

  $('main').empty();
  $('#filters').empty();

  $.getJSON('data/page-2.json', function (data) {
    data.forEach(element => {
      new Img(element.image_url, element.title, element.description, element.keyword, element.horns)
    });
    getTemplate(gallery);
    populateOptions();
  })

  function populateOptions() {
    let options = [];
    $('select').empty();
    gallery.forEach(element => {
      if (!options.includes(element.keyword)) {
        options.push(element.keyword);
        $('select').append(`<option value="${element.keyword}">${element.keyword}</option>`)
      }
    });
    $('option').css('textTransform', 'capitalize');
  }

  function Img(url, title, desc, keyword, horns) {
    this.url = url;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;

    gallery.push(this);
  }

  function getTemplate(arr){
    let templateM=$('#template').html();
    arr.forEach(element => {

      let newObject = Mustache.render(templateM,element)

      $('main').append(newObject)
    });
  }


  // function render(arr) {

  //   arr.forEach(element => {
  //     let template = $('<section></section>');
  //     template.attr('class', element.keyword)

  //     let innerHtml = `
  //   <h2>${element.title}</h2>
  //   <img src="${element.url}" alt="${element.keyword}">
  //   <p>${element.desc}</p>`;
  //     template.append(innerHtml);

  //     $('main').append(template)
  //   });
  // }

  $('select').change(function () {
    var selectedHornClass = $(this).children('option:selected').val();
    filterHorns(selectedHornClass);
    console.log(selectedHornClass)
  });



  function filterHorns(selected) {
    let horns = $('section');
    console.log(horns)
    jQuery.each(horns, function (i, val) {
      // eslint-disable-next-line eqeqeq
      if (!(val.classList.value == selected)) {
        console.log(val.classList.value +selected + "1")
        $(val).hide(400);
      } else {
        console.log(val.classList.value +selected + "2")
        $(val).show(400);
      }
    })

    // eslint-disable-next-line eqeqeq
    if (selected == 'default') {
      $(horns).show(400);
      // $(horns).first().hide();
    }
  }



  let btn1 = $(`<button>Sort by horn number</button>`)
  $("#filters").append(btn1);



  $(btn1).click(function () {
    var byhorns = gallery.slice(0);
    byhorns.sort(function (a, b) {
      return a.horns - b.horns;
    });
    $('main').empty();
    getTemplate(byhorns);
    console.log(byhorns);
  });

  let btn2 = $(`<button >Sort by tilte</button>`)
  $("#filters").append(btn2);

  $(btn2).click(function () {
    var bytitle = gallery.slice(0);
    bytitle.sort(function (a, b) {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    $('main').empty();
    getTemplate(bytitle);
    console.log(bytitle);
  });

});

let page2 = $(`<button >page2</button>`)
$("#pages").append(page2)


$(page2).click(function () {
  let gallery = [];
  $('main').empty();
  $('#filters').empty();

  $.getJSON('data/page-1.json', function (data) {
    data.forEach(element => {
      new Img(element.image_url, element.title, element.description, element.keyword, element.horns)
    });
    getTemplate(gallery)
    populateOptions();
  })

  function populateOptions() {
    let options = [];
    $('select').empty();
    gallery.forEach(element => {
      if (!options.includes(element.keyword)) {
        options.push(element.keyword);
        $('select').append(`<option value="${element.keyword}">${element.keyword}</option>`)
      }
    });
    $('option').css('textTransform', 'capitalize');
  }

  function Img(url, title, desc, keyword, horns) {
    this.url = url;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;

    gallery.push(this);
  }
  function getTemplate(arr){
    let templateM=$('#template').html();
    arr.forEach(element => {
      let newObject = Mustache.render(templateM,element)
      $('main').append(newObject)
    });
    console.log(arr)
  }

  // function render(arr) {

  //   arr.forEach(element => {
  //     let template = $('<section></section>');
  //     template.attr('class', element.keyword)

  //     let innerHtml = `
  //   <h2>${element.title}</h2>
  //   <img src="${element.url}" alt="${element.keyword}">
  //   <p>${element.desc}</p>`;
  //     template.append(innerHtml);

  //     $('main').append(template)
  //   });
  // }

  $('select').change(function () {
    var selectedHornClass = $(this).children('option:selected').val();
    filterHorns(selectedHornClass);
    console.log(selectedHornClass)
  });



  function filterHorns(selected) {
    let horns = $('section');
    jQuery.each(horns, function (i, val) {
      // eslint-disable-next-line eqeqeq
      if (!(val.classList.value == selected)) {
        $(val).hide(400);
      } else {
        $(val).show(400);
      }
    })

    // eslint-disable-next-line eqeqeq
    if (selected == 'default') {
      $(horns).show(400);
      // $(horns).first().hide();
    }
  }

  console.log(gallery);

  let btn1 = $(`<button>Sort by horn number</button>`)
  $("#filters").append(btn1);
  $(btn1).click(function () {
    var byhorns = gallery.slice(0);
    byhorns.sort(function (a, b) {
      return a.horns - b.horns;
    });
    $('main').empty();
    getTemplate(byhorns);
    console.log(byhorns);
  });

  let btn2 = $(`<button >Sort by tilte</button>`)
  $("#filters").append(btn2);
  $(btn2).click(function () {
    var bytitle = gallery.slice(0);
    bytitle.sort(function (a, b) {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    $('main').empty();
    getTemplate(bytitle);
    console.log(bytitle);
  });
});

