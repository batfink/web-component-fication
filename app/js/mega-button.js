(function() {

  var proto = Object.create(HTMLButtonElement.prototype, {
    readAttributes: {
      value: function () {
        this.msg = this.getAttribute('msg');
      }
    },
    hello: {
      value: function () {
        console.log(this.msg);
      }
    },
    createdCallback: {
      value: function () {
        this.readAttributes();
        this.addEventListener('click', this.hello);
      }
    }
  });

  document.registerElement('mega-button', {
    prototype: proto,
    extends: 'button'
  })

})();
