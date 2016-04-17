describe('Loading Button', function () {
  var button = document.createElement('button')
  var $button = $(button)

  beforeAll(function() {
    new LoadingButton(button)

    $button.trigger('click')
  })

  describe('When click', function () {
    it('Add "is-loading" class', function () {
      expect($button.hasClass('is-loading')).toBeTruthy()
    })

    it('Add disabled property', function () {
      expect($button.prop('disabled')).toBe(true)
    })

    it('Replace text to "Loading..."', function () {
      expect($button.text()).toMatch('Loading...')
    })
  })
})
