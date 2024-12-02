import biona from '../../assets/bionaAd.jpeg';
import clarence from '../../assets/ccAd.jpeg';
import fage from '../../assets/fageAd.jpeg';
import hemp from '../../assets/goodHempAd.jpeg';
import huel from '../../assets/huelAd.jpeg';
import linwoods from '../../assets/linwoodsAd.jpeg';
import redFox from '../../assets/redFoxAd.jpeg';

export const INITIAL_TODOS = [
  {
    id: '1',
    text: 'do this thing right away',
    priority: '🔴',
    finishBy: '241215',
    status: 'complete',
  },
  {
    id: '2',
    text: 'do this thing soon',
    priority: '🟡',
    finishBy: '241215',
    status: 'incomplete',
  },
  {
    id: '3',
    text: 'do this thing in a bit',
    priority: '🟢',
    finishBy: '241225',
    status: 'incomplete',
  },
];

export const GUEST_USER = {
  firstName: 'Guest',
  lastName: 'User',
  email: 'example@email.com',
  id: '1',
  userLevel: 'guest',
};

export const CURRENT_ADVERTS = [
  { image: biona, link: 'https://biona.co.uk/' },
  { image: clarence, link: 'https://www.clarencecourt.co.uk/' },
  { image: fage, link: 'https://uk.fage/' },
  { image: hemp, link: 'https://www.goodhemp.com/' },
  { image: huel, link: 'https://uk.huel.com/' },
  { image: linwoods, link: 'https://linwoodshealthfoods.com/' },
  { image: redFox, link: 'https://www.beltonfarm.co.uk/' },
];
