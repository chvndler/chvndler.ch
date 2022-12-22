/** @format */

import {Box, Canvas, Card, Container, FixedCanvas} from '@/components/ds'

/*
 * Copyright (C) 2022 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler
 */

const DevelopingPage = () => {
  return (
    <div>
      <FixedCanvas>
        <Canvas>
          <Container size={1}>
            <Card variant='interactive'>
              <Box
                css={{
                  // border: '1px solid black',
                  margin: '0',
                  width: '100%',
                  height: '400px',
                  padding: '1rem 1rem',
                  backgroundColor: 'white',
                  borderRadius: '1.4rem 1.4rem 0 0'
                }}>
                slkdm
              </Box>

              <Box css={{margin: '1rem', width: '100%', height: '100%', padding: '1rem 1rem'}}>Interactive Card</Box>
            </Card>
          </Container>
        </Canvas>
      </FixedCanvas>
    </div>
  )
}

export default DevelopingPage
