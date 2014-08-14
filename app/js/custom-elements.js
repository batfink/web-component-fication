(function() {

  document.registerElement('mega-button', {
    prototype: objectAssign(Object.create(HTMLButtonElement.prototype), {
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
    }),
    extends: 'button'
  })

})();
