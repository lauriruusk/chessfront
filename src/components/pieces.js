import whitequeen from '../images/wqueen.png';
import whiteking from '../images/wking.png';
import whitebishop from '../images/whitebishop.png';
import whitehorse from '../images/whitehorse.png';
import whitepawn from '../images/whitepawn.png';
import whitetower from '../images/whitetower.png';
import blackking from '../images/blackking.png';
import blackqueen from '../images/blackqueen.png';
import blackbishop from '../images/blackbishop.png';
import blackhorse from '../images/blackhorse.png';
import blackpawn from '../images/blackpawn.png';
import blacktower from '../images/blacktower.png';

const blackPieces = [
    {
      name: 'blacktower',
      image: blacktower,
      value: 5,
      alive: true,
    },
    {
      name: 'blackhorse',
      image: blackhorse,
      value: 5,
      alive: true,
    },
    {
      name: 'blackbishop',
      image: blackbishop,
      value: 5,
      alive: true,
    },
    {
      name: 'blackqueen',
      image: blackqueen,
      value: 50,
      alive: true,
    },
    {
      name: 'blackking',
      image: blackking,
      value: 100,
      alive: true,
    },
    {
      name: 'blackpawn',
      image: blackpawn,
      value: 1,
      alive: true,
    },
  ]
  
  const whitePieces = [
    {
      name: 'whitetower',
      image: whitetower,
      value: 5,
      alive: true,
    },
    {
      name: 'whitehorse',
      image: whitehorse,
      value: 5,
      alive: true,
    },
    {
      name: 'whitebishop',
      image: whitebishop,
      value: 5,
      alive: true,
    },
    {
      name: 'whitequeen',
      image: whitequeen,
      value: 50,
      alive: true,
    },
    {
      name: 'whiteking',
      image: whiteking,
      value: 100,
      alive: true,
    },
    {
      name: 'whitepawn',
      image: whitepawn,
      value: 1,
      alive: true,
    },
  ]

export {blackPieces, whitePieces};