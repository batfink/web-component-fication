(function () {

  var proto = Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function () {
          var shadow = this.createShadowRoot();

          shadow.innerHTML = '<b>tjobing</b>';

          this.addEventListener('click', function (e) {
            console.log('clicked');
          })
      }
    }
  });

  document.registerElement('x-foo', {
    prototype: proto
  })

})();
