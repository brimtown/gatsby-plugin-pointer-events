exports.onClientEntry = () => {
  if (!window.PointerEvent) {
    require.ensure([], require => require('pepjs').default, 'pepjs')
  }
};
