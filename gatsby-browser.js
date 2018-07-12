exports.onClientEntry = () => {
  if (!window.PointerEvent) {
    require.ensure([], function(require) { require('pepjs').default }, 'pepjs')
  }
};
