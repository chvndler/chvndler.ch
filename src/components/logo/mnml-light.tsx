import * as React from 'react';
import { IconProps } from './types';

export const MnmlLight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        viewBox='0 0 200 20'
        fill='none'
        {...props}
        ref={forwardedRef}
      >
        <path fill='#484349' fillRule='evenodd' clipRule='evenodd' d='M195.757,5.366c-1.45-0.505-3.563-0.782-5.948-0.782c-1.876,0-3.449,0.153-4.67,0.453
c-0.122,0.029-0.24,0.06-0.357,0.092V1.035h-9.726V5.39c-1.906-0.562-4.508-0.847-7.744-0.847c-4.372,0-7.566,0.634-9.767,1.938
c-2.113,1.254-3.278,3.18-3.283,5.423h-0.812h-8.138h-0.431c0.369-0.582,0.967-0.821,1.226-0.92
c0.535-0.207,1.569-0.455,3.452-0.455c0.434,0,0.946,0.019,1.237,0.037l1.779,0.11V4.933l-1.501-0.157
c-0.602-0.063-1.153-0.09-1.841-0.09c-1.63,0-3.027,0.174-4.276,0.534c-0.225,0.066-0.439,0.136-0.642,0.209V4.928h-9.473v1.127
c-2.213-1.017-5.256-1.512-9.266-1.512c-2.645,0-6.443,0.172-9.374,1.612v-5.12h-7.318h-2.408h-7.318V5.16
c-0.077-0.02-0.155-0.04-0.234-0.059c-1.649-0.416-2.966-0.497-4.684-0.497c-2.528,0-5.458,0.182-8.031,1.534
c-0.392,0.208-0.755,0.435-1.09,0.679c-0.591-0.569-1.361-1.027-2.302-1.37c-0.523-0.203-2.527-0.863-6.365-0.863
c-1.788,0-3.275,0.173-4.545,0.528c-0.149,0.042-0.298,0.087-0.445,0.134V4.928H57.438l-3.922,5.93l-3.746-5.93L38.59,4.931v0.008
c-1.559,0.008-3.633,0.02-4.954,0.032c-0.442,0.004-1.216,0.141-2.025,0.351V1.035h-9.726v4.592
c-0.122-0.044-0.247-0.087-0.375-0.128c-1.932-0.634-4.655-0.955-8.094-0.955c-4.372,0-7.566,0.634-9.767,1.938
c-2.118,1.257-3.284,3.187-3.284,5.435c0,2.255,1.192,4.164,3.357,5.375c2.759,1.544,6.544,1.673,9.875,1.673
c3.015,0,5.92-0.084,8.287-0.958v0.572h9.726v-6.339c0-0.831,0.132-1.153,0.592-1.44c0.516-0.323,1.269-0.474,2.37-0.474
c1.381,0,1.909,0.274,1.999,0.328c0.109,0.066,0.166,0.125,0.166,0.673v7.251h9.726v-3.84l2.931,3.84h8.172l4.422-5.716v5.716
h9.726v-6.4c0-0.436,0.117-1.028,0.667-1.359c0.25-0.149,0.991-0.495,2.476-0.495c1.23,0,1.704,0.245,1.778,0.287
c0.115,0.062,0.206,0.111,0.206,0.715v7.251h9.726v-0.877c2.376,1.1,5.073,1.201,7.455,1.201c1.629,0,3.351-0.032,4.919-0.411
c0.174-0.042,0.343-0.087,0.506-0.134v0.221h7.028h2.408h7.318v-1.034c2.485,1.178,5.559,1.42,9.881,1.42
c3.47,0,5.59-0.173,7.327-0.598c0.509-0.128,0.987-0.283,1.431-0.463v0.676h8.362h1.365h0.743h8.138h1.879v-3.307
c0.559,0.789,1.321,1.477,2.289,2.019c2.759,1.544,6.544,1.673,9.875,1.673c2.714,0,5.338-0.068,7.562-0.719v0.334h9.726v-6.339
c0-0.831,0.132-1.154,0.591-1.44c0.516-0.323,1.269-0.474,2.371-0.474c1.381,0,1.908,0.274,1.998,0.329
c0.109,0.066,0.166,0.125,0.166,0.673v7.251h9.726v-7.88C199.634,9.51,199.634,6.727,195.757,5.366z' />
        <path fill='#F7F0F0' fillRule='evenodd' clipRule='evenodd' d='M100.834,7.779c-0.58-0.487-1.232-0.791-2.319-1.054c-1.449-0.365-2.608-0.446-4.275-0.446
c-2.065,0-4.891,0.101-7.246,1.338c-0.817,0.434-1.645,1.053-2.199,1.909c-0.207-0.941-0.828-1.877-2.584-2.517
c-0.471-0.182-2.282-0.75-5.76-0.75c-1.087,0-2.645,0.061-4.094,0.466c-1.014,0.284-1.92,0.71-2.572,1.136V6.604h-5.072h-1.05
h-5.325l-4.854,7.34l-4.637-7.34h-5.547h-0.938h-2.097v0.002c-1.221,0.006-4.705,0.023-6.615,0.04
c-0.756,0.007-3.135,0.647-3.715,1.073V2.71H23.56v5.809c-0.49-0.507-1.283-1.009-2.572-1.429c-1.05-0.345-3.26-0.872-7.571-0.872
c-2.789,0-6.448,0.243-8.912,1.703c-1.196,0.71-2.464,1.947-2.464,3.995c0,2.251,1.594,3.407,2.5,3.913
c2.427,1.359,6.086,1.46,9.057,1.46c3.333,0,6.63-0.101,8.839-1.379c0.38-0.221,0.781-0.518,1.123-0.882v1.876h6.376v-4.664
c0-0.892,0.109-2.068,1.377-2.859c0.906-0.568,2.029-0.73,3.26-0.73c1.449,0,2.355,0.264,2.862,0.568
c0.978,0.588,0.978,1.582,0.978,2.109v5.576h6.376v-6.205c0-0.302-0.004-0.641-0.059-0.994l5.494,7.199h6.521l6.92-8.943v8.943
h6.376V12.18c0-1.217,0.544-2.231,1.485-2.798c0.58-0.345,1.63-0.73,3.333-0.73c1.268,0,2.101,0.223,2.572,0.487
c0.942,0.507,1.087,1.359,1.087,2.19v5.576h6.376v-2.634c0.425,0.623,1.005,1.149,1.703,1.559c2.21,1.298,4.963,1.399,7.426,1.399
c1.666,0,3.188-0.041,4.529-0.365c1.268-0.304,1.956-0.73,2.427-1.176h0.145v1.217h6.086V2.71h-6.376V7.779z M23.56,13.031h-5.325
c-0.036,0.689-0.616,1.237-1.377,1.541c-0.906,0.365-2.173,0.405-3.007,0.405c-1.196,0-2.645-0.081-3.731-0.689
c-0.833-0.466-1.485-1.278-1.485-2.433c0-0.365,0.036-1.643,1.377-2.494c1.014-0.649,2.391-0.831,3.804-0.831
c1.014,0,2.173,0.101,3.007,0.385c1.196,0.426,1.341,1.034,1.377,1.338h5.361V13.031z M99.385,14.248
c-1.051,0.588-2.246,0.71-3.478,0.71c-1.304,0-2.572-0.142-3.623-0.77c-1.014-0.609-1.485-1.561-1.485-2.433
c0-0.892,0.362-1.744,1.268-2.332c1.087-0.71,2.536-0.872,3.768-0.872c1.05,0,2.753,0.122,3.949,0.953
c0.833,0.588,1.232,1.48,1.232,2.23C101.015,12.626,100.508,13.619,99.385,14.248z' />
        <path fill='#F7F0F0' fillRule='evenodd' clipRule='evenodd' d='M150.9,8.895V6.441c-0.58-0.061-1.087-0.081-1.666-0.081c-1.34,0-2.608,0.122-3.804,0.466
c-1.449,0.426-2.319,1.014-2.789,1.46V6.604h-6.122v2.81c-0.373-0.536-0.933-1.061-1.776-1.533
c-2.5-1.399-6.303-1.663-9.165-1.663c-2.899,0-6.412,0.223-8.949,1.602c-1.04,0.565-1.692,1.204-2.1,1.833V2.71h-6.376v14.194
h6.376v-2.75c0.385,0.561,0.979,1.108,1.883,1.614c2.355,1.318,5.506,1.521,9.673,1.521c2.971,0,5.18-0.122,6.919-0.547
c1.774-0.446,2.917-1.212,3.515-2.088v2.251h6.376v-3.873c0-0.77,0.217-2.697,2.608-3.609c0.942-0.365,2.283-0.568,4.057-0.568
C150.031,8.854,150.574,8.875,150.9,8.895z M122.027,8.976c1.087-0.487,2.282-0.568,3.586-0.568c1.195,0,2.681,0.061,3.767,0.608
c0.508,0.243,1.232,0.75,1.304,1.582h-10.18C120.614,9.828,121.302,9.3,122.027,8.976z M136.518,13.538h-5.942
c-0.254,0.669-0.942,1.014-1.63,1.196c-0.906,0.243-2.355,0.284-3.297,0.284c-1.231,0-2.971-0.081-4.057-0.69
c-0.616-0.345-1.195-0.953-1.195-1.845v-0.061h16.122V13.538z' />
        <rect x='146.987' y='13.579' width='6.666' height='3.326' fill='#F7F0F0' fillRule='evenodd'
              clipRule='evenodd' />
        <path fill='#F7F0F0' fillRule='evenodd' clipRule='evenodd' d='M195.206,6.948c-1.34-0.466-3.333-0.69-5.398-0.69c-0.942,0-2.79,0.041-4.275,0.406
c-1.087,0.264-1.847,0.628-2.427,1.054V2.71h-6.376v5.224c-0.462-0.3-1.06-0.588-1.847-0.844c-1.051-0.345-3.26-0.872-7.571-0.872
c-2.79,0-6.448,0.243-8.912,1.703c-1.196,0.71-2.464,1.947-2.464,3.995c0,2.251,1.594,3.407,2.5,3.913
c2.428,1.359,6.086,1.46,9.057,1.46c3.333,0,6.63-0.101,8.84-1.379c0.131-0.076,0.265-0.164,0.398-0.257v1.25h6.376v-4.664
c0-0.892,0.109-2.068,1.376-2.859c0.906-0.568,2.029-0.73,3.261-0.73c1.449,0,2.355,0.264,2.862,0.568
c0.978,0.588,0.978,1.582,0.978,2.109v5.576h6.376v-6.205C197.959,9.564,197.923,7.901,195.206,6.948z M176.73,13.031h-4.601
c-0.037,0.689-0.616,1.237-1.377,1.541c-0.906,0.365-2.173,0.405-3.007,0.405c-1.196,0-2.645-0.081-3.731-0.689
c-0.833-0.466-1.485-1.278-1.485-2.433c0-0.365,0.036-1.643,1.376-2.494c1.015-0.649,2.391-0.831,3.804-0.831
c1.015,0,2.174,0.101,3.007,0.385c1.195,0.426,1.34,1.034,1.376,1.338h4.637V13.031z' />
      </svg>
    );
  },
);
