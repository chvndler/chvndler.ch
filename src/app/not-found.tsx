import { Canvas } from '../components/shared';

export default function NotFound() {
  return (
    <Canvas>
      <div className='flex size-full flex-col items-center justify-center'>
        <h1 className='font-mono text-xl font-bold'>404</h1>
        <p className='font-mono text-sm font-bold'>Page not found</p>
      </div>
    </Canvas>
  );
}
