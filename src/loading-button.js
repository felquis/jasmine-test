function LoadingButton(button) {
  button.addEventListener('click', function (event) {
    var target = event.target

    target.classList.add('is-loading')
    target.setAttribute('disabled', true)
    target.textContent = 'Loading...'
  })
}
