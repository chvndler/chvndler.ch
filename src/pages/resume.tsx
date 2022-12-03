import Link from 'next/link';

import { Container, Section } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const Resume = () => {
  return (
    <>
      <PageLayout page_type={'Production'}>
        <Section size={'4'}>
          <Container size={'2'}>
            <Link href={'https://s3.us-east-1.amazonaws.com/truth.cloud/assets/CDC©CV01.pdf'} target={'_blank'}>
              Download Pdf
            </Link>
          </Container>
        </Section>
      </PageLayout>
    </>
  );
};

export default Resume;
