import {Text} from '@/components/ds'

export const NameAndTitle = () => {
  return (
    <>
      <Text
        css={{
          color: '$blue9',
          lineHeight: '1.4',
          fontFamily: '$druk',
          // textTransform: 'uppercase',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'left',
          letterSpacing: '-0.02em',

          '@sm': {
            textAlign: 'left',
          },
        }}>
        CHANDLER CH®
      </Text>
      <Text
        css={{
          color: '$sage9',
          lineHeight: '1',
          fontFamily: '$inter',
          marginBottom: 10,
          fontSize: 12,
          fontWeight: 'normal',
          textAlign: 'left',
          letterSpacing: '-0.02em',

          '@sm': {
            textAlign: 'left',
          },
        }}>
        Front-End Developer / Designer
      </Text>
    </>
  )
}
