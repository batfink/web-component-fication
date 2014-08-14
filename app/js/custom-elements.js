(function() {

  var proto = Object.create(HTMLButtonElement.prototype);

  var methods = {
    readAttributes: function() {
      this.msg = this.getAttribute('msg');
    },
    hello: function() {
      console.log(this.msg);
    },
    createdCallback: function() {
      this.readAttributes();
      this.addEventListener('click', this.hello);
    }
  };

  document.registerElement('mega-button', {
    prototype: objectAssign(proto, methods),
    extends: 'button'
  })

})();
