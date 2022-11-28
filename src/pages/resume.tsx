import { styled, theme } from 'stitches.config';

import { Container, Section, Space } from '@/components/ds';
import { PageLayout } from '@/components/layout/page';

const Resume = () => {
  return (
    <>
      <PageLayout page_type={'Production'}>
        <Section size={'4'}>
          <Container size={'2'}>
            <Heading>About Me</Heading>
            <Paragraph>
              Experienced Creative Director with a demonstrated history of leading creative teams in the health and
              wellness industry. Skilled in Front-end Development (React), Product Development, Video Production, Motion
              & Graphic Design and Brand Direction. Strong arts and design professional with a Bachelor's degree focused
              in Sports Medicine from University of North Carolina at Greensboro.
            </Paragraph>
          </Container>
        </Section>

        <Space size={'2'} />

        <Section size={'4'}>
          <Container size={'2'}>
            <Heading>Experience</Heading>
            <SubHeading>Lead Creative Director at ISI® Elite Training Franchise, INC.</SubHeading>
            <Space size={'1'} />
            <Paragraph>
              Worked closely as lead director on various brand projects while leading a team of creatives on a variety
              of design projects.
            </Paragraph>
          </Container>
        </Section>

        <Space size={'2'} />

        <Section size={'4'}>
          <Container size={'2'}>
            <Heading>Education</Heading>
            <SubHeading>The University of North Carolina at Greensboro</SubHeading>
            <Space size={'1'} />
            <Paragraph>Bachelor's degree, Sports Medicine</Paragraph>
          </Container>
        </Section>

        <Space size={'2'} />

        <Section size={'4'}>
          <Container size={'2'}>
            <Heading>Features</Heading>
            <SubHeading>Highlighted Works & Accomplishments</SubHeading>
            <Space size={'1'} />
            <Paragraph>Example One</Paragraph>
          </Container>
        </Section>
      </PageLayout>
    </>
  );
};

export default Resume;

/**
 * @styles
 */
const Heading = styled('h1', {
  color: theme.colors.chxn13,
  fontFamily: theme.fonts.panSb,
  fontSize: 32,
  textAlign: 'left'
});

const SubHeading = styled('h3', {
  color: theme.colors.chxn5,
  fontFamily: theme.fonts.latMedStd,
  fontSize: 18,
  textAlign: 'left'
});

const Paragraph = styled('p', {
  color: theme.colors.chxn4,
  fontFamily: theme.fonts.latRegStd,
  fontSize: 16,
  textAlign: 'left'
});
