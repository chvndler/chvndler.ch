import {styled} from 'stitches.config'

export const SocialLink = styled('p', {
 borderRadius: 50,
 color: '$sage9',
 lineHeight: '1',
 fontFamily: '"Lateral Extended Medium", sans-serif',
 fontWeight: 500,
 fontSize: 15,
 textTransform: 'lowercase',
 textAlign: 'center',
 letterSpacing: '0.04rem',
 margin: 0,
 marginRight: 6,
 marginLeft: 6,
 paddingLeft: 8,
 paddingRight: 8,
 paddingTop: 4,
 paddingBottom: 4,
 cursor: 'pointer',

 variants: {
  github: {
   true: {
    '&:hover': {
     color: '#FFFFFF',
     backgroundColor: '$github',
     cursor: 'pointer',
    },
   },
  },
  arena: {
   true: {
    '&:hover': {
     color: '#FFFFFF',
     backgroundColor: '$arena',
     cursor: 'pointer',
    },
   },
  },
  instagram: {
   true: {
    '&:hover': {
     color: '#FFFFFF',
     backgroundColor: '$insta',
     cursor: 'pointer',
    },
   },
  },
  facebook: {
   true: {
    '&:hover': {
     color: '#FFFFFF',
     backgroundColor: '$fb',
     cursor: 'pointer',
    },
   },
  },
  linkedin: {
   true: {
    '&:hover': {
     color: '#FFFFFF',
     backgroundColor: '$linkedin',
     cursor: 'pointer',
    },
   },
  },
  readcv: {
   true: {
    '&:hover': {
     color: '#FFFFFF',
     backgroundColor: '$readcv',
     cursor: 'pointer',
    },
   },
  },
  twitter: {
   true: {
    '&:hover': {
     color: 'white',
     backgroundColor: '$twitter',
     cursor: 'pointer',
    },
   },
  },
 },
 defaultVariants: {},
})
