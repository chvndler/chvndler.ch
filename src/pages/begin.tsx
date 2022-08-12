import Head from 'next/head';
import { Box, Container, Canvas } from '@/ui';
import { ChvndlerCh } from '@/components/logo/ChvndlerCh';
import { css } from '@/lib/stitches.config';


const backdrop = css({
    backgroundColor: '$rhythm',
    minWidth: '100vw',
    minHeight: '100vh',
    padding: '0',
    margin: '0',
});

// import { CmndK } from "@/components/CmndK";


const Begin = () => {
    return (
        <>
            <Head>
                <title>__</title>
            </Head>
            <Box className={backdrop()}>

                <Canvas>
                    <Container
                        size='2'
                        css={{
                            color: '$mauve1',
                            margin: 'auto',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >


                        <Box
                            css={{
                                width: '100%',
                                color: '$mauve6',
                                margin: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <ChvndlerCh width='300' />
                        </Box>

                    </Container>
                </Canvas>




            </Box>
        </>
    );
};

export default Begin;
