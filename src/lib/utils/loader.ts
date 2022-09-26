export const loader = {
  body: {
    display: 'block'
  },
  '&[data-loader-screen]': {
    position: 'fixed',
    zIndex: '1700',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$chxn3'
  },
  '#globalLoader': {
    position: 'fixed',
    zIndex: '1700',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$chxn3'
  },
  '&.globalLoader': {
    boxShadow: '0 0 0 3px blueviolet'
  },
  root: {}
};
