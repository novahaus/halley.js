const pathRegex = /([^#])+#/g

export default {
  bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const href = el.getAttribute('href')
      if (href) {
        vnode.context.$modal.show(
          href.replace(pathRegex, '').replace('#', '')
        )
      }
    })
  },
}