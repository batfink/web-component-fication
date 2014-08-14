(function() {

  var MegaProto = Object.create(HTMLButtonElement.prototype);

  Object.defineProperty(MegaProto, 'readAttributes', {
    value: function() {
      this.msg = this.getAttribute('msg');
    }
  });

  Object.defineProperty(MegaProto, 'hello', {
    value: function() {
      console.log(this.msg);
    }
  });

  Object.defineProperty(MegaProto, 'createdCallback', {
    value: function() {
      this.readAttributes();
      this.addEventListener('click', this.hello);
    }
  });

  document.registerElement('mega-button', {
    prototype: MegaProto,
    extends: 'button'
  })

})();
