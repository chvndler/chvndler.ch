import { Container, InlineLink, Paragraph } from '@/components/ds';
import { Canvas, FixedCanvas } from '@/components/ds/canvas';
import { AppNavbar } from '@/components/layout/app-navbar';

const PortPage = () => {
  return (
    <>
      <FixedCanvas>
        <AppNavbar />
        <Canvas>
          <Container size="1">
            <Paragraph
              css={{
                color: '$sage10',
                fontFamily: '$tStar',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 1.4,
                textAlign: 'center',
                letterSpacing: '0.04rem',
                textTransform: 'uppercase'
              }}
            >
              The focus in the moment is building <InlineLink href="https://ady.world/">Atelier® Design</InlineLink>, to
              silence the noise within the design culture. I enjoy building simple, beautiful and performant web
              interfaces and experiences.
            </Paragraph>
          </Container>
        </Canvas>
      </FixedCanvas>
    </>
  );
};

export default PortPage;
