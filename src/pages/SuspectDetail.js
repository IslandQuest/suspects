import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ useNavigate for back navigation
import './SuspectDetails.css';

// Import suspect photos
import diego from '../assets/diego-alvarez.jpg';
import maxine from '../assets/maxine-cho.jpg';
import lucinda from '../assets/lucinda-fontaine.jpg';
import eliot from '../assets/eliot-harper.jpg';
import jordan from '../assets/jordan-hayes.jpg';
import collette from '../assets/collette-marceau.jpg';
import lorenzo from '../assets/lorenzo-moretti.jpg';
import mia from '../assets/mia-ramirez.jpg';
import celeste from '../assets/celeste-winthrop.jpg';

// Import business and dessert photos
import alvarezBusiness from '../assets/churro-explosion-photo.jpg';
import choBusiness from '../assets/waffle-shack-photo.jpg';
import fontaineBusiness from '../assets/simple-sweet-photo.jpg';
import harperBusiness from '../assets/say-cheese-photo.jpg';
import hayesBusiness from '../assets/YoGo-photo.jpg';
import marceauBusiness from '../assets/la-petite-crepe-photo.jpg';
import morettiBusiness from '../assets/cocoa-cove-photo.jpg';
import ramirezBusiness from '../assets/cool-cones-photo.jpg';
import winthropBusiness from '../assets/celestial-cakes-photo.jpg';

import churros from '../assets/churro-photo.jpg';
import waffle from '../assets/waffle-photo.jpg';
import tart from '../assets/tart-photo.jpg';
import cheesecake from '../assets/cheesecake-photo.jpg';
import yogart from '../assets/yogart-photo.jpg';
import crepe from '../assets/crepe-photo.jpg';
import chocolate from '../assets/chocolate-photo.jpg';
import icecream from '../assets/icecream-photo.jpg';
import cake from '../assets/cake-photo.jpg';

const suspects = [
  {
    id: 1,
    name: 'Diego Alvarez',
    photo: diego,
    nickname: 'El Loco',
    dob: '27/01/1985',
    business: { name: 'Churro Explosion', photo: alvarezBusiness },
    dessert: { name: 'Churro Explosion', photo: churros },
    marks: 'Multiple neck tattoos, Pierced ears',
    vehicle: 'Fiat Dobolo towing his churro cart behind',
    motive:
      'The churro stand had recently received bad reviews, and stealing the trophy could be seen as a way to level the competition with his rival.',
    alibi:
      'Hosting an outdoor movie night at the beach, frying churros, and posted a live video on social media during the time of theft.',
  },
  {
    id: 2,
    name: 'Maxine Cho',
    photo: maxine,
    nickname: 'Max',
    dob: '18/03/1989',
    business: { name: 'The Waffle Shack', photo: choBusiness },
    dessert: { name: 'Lava Flow Waffle', photo: waffle },
    marks: 'Tattoo of paw print on right wrist, Always wears trademark red lipstick',
    vehicle: 'Opel Corsa, Yellow',
    motive:
      'Strongly believed this years competition was rigged in Tropical Treats favor and may have wanted to correct what she saw as an injustice.',
    alibi: 'Volunteering at a charity event, making waffles, and event organisers can confirm their presence.',
  },
  {
    id: 3,
    name: 'Lucinda Fontaine',
    photo: lucinda,
    nickname: 'Lulu',
    dob: '19/01/1981',
    business: { name: 'Simple & Sweet', photo: fontaineBusiness },
    dessert: { name: 'Island Breeze Tart', photo: tart },
    marks: 'Tattoo of oranges on left shoulder & neck, Tattoo of turtle on right shoulder',
    vehicle: 'Kia Picanto, white with "Simple & Sweet" logo sticker on rear bumper',
    motive:
      'Secretly struggling to keep her business afloat and may have planned to sell the trophy to pay off her debts.',
    alibi: 'Claims to have spent the evening alone in her shop’s kitchen preparing tarts, unaware the trophy was stolen.',
  },
  {
    id: 4,
    name: 'Eliot Harper',
    photo: eliot,
    nickname: 'The Big Cheese',
    dob: '03/11/1968',
    business: { name: 'Say Cheese-Cake', photo: harperBusiness },
    dessert: { name: 'Tropical Tango Cheesecake', photo: cheesecake },
    marks: 'Glasses, Handlebar Moustache, No tattoos',
    vehicle: 'Bicycle, Ocean Blue',
    motive:
      'Believes Tropical Treats fame is unfair, claiming their marketing spread rumors to hurt his cheesecake parlour, stealing the trophy could have been his way of sending a message.',
    alibi: 'Claims he was on a ferry to Fuerteventura for a long weekend with his wife during the time of theft.',
  },
  {
    id: 5,
    name: 'Jordan Hayes',
    photo: jordan,
    nickname: 'Jay',
    dob: '09/11/1998',
    business: { name: 'YoGo Island', photo: hayesBusiness },
    dessert: { name: 'Pineapple Paradise Bowl', photo: yogart },
    marks: 'Tattoo covering neck, Nose Piercing',
    vehicle: 'None',
    motive:
      'Was rejected from the competition last year and was bitter about it, often saying that without the trophy, there would be no competition in the future.',
    alibi:
      'Says he was at Alfies Beach Bar for trivia night and was seen celebrating winning the quiz by multiple people there the entire evening.',
  },
  {
    id: 6,
    name: 'Collette Marceau',
    photo: collette,
    nickname: 'Coco',
    dob: '13/02/1991',
    business: { name: 'La Petite Crêperie', photo: marceauBusiness },
    dessert: { name: 'Mango Paradise Crêpe', photo: crepe },
    marks: 'Tattoo of a pastry on left hand, tattoo of flowers on left wrist',
    vehicle: 'Bicycle, light green with front basket',
    motive:
      'Know to be jealous of Tropical Treats fame, maybe stole the trophy to tarnish their rivals reputation and attract customers to La Petite Crêperie.',
    alibi:
      'Claims to have been at her crêpe stand, but can not remember if she was working or on a coffee break at the time of the theft.',
  },
  {
    id: 7,
    name: 'Lorenzo Moretti',
    photo: lorenzo,
    nickname: 'The Choco King',
    dob: '30/05/1978',
    business: { name: 'Cocoa Cove', photo: morettiBusiness },
    dessert: { name: 'Cocoa Cascade', photo: chocolate },
    marks: 'Tattoo of "La Vita e Dolce" on right forearm',
    vehicle: 'Audi R8, Dark Blue',
    motive:
      'Believes his confections are just as good, if not better, and may have stolen the trophy to make a statement about his talent.',
    alibi:
      'Claims to have been hosting a private tasting event at Cocoa Cove, with staff able to vouch for his whereabouts during the theft.',
  },
  {
    id: 8,
    name: 'Mia Ramirez',
    photo: mia,
    nickname: 'Scoops',
    dob: '18/07/1996',
    business: { name: 'Cool Cones', photo: ramirezBusiness },
    dessert: { name: 'Sunset Swirl', photo: icecream },
    marks: 'Small scar on top lip, Nose Piercing, No tattoos',
    vehicle: 'Citroen Berlingo. Red',
    motive:
      'Felt overshadowed by Tropical Treats success and resented the constant comparisons. Stealing the trophy could have been a way to shift business toward Cool Cones.',
    alibi:
      'Says they were filming a promo for their new Tropical Tastes sundae outside their shop, if timestamped that could prove they weren’t at the crime scene during the theft.',
  },
  {
    id: 9,
    name: 'Celeste Winthrop',
    photo: celeste,
    nickname: 'Winner',
    dob: '24/06/1988',
    business: { name: 'Celestial Cakes', photo: winthropBusiness },
    dessert: { name: 'Tropical Elegance Cake', photo: cake },
    marks: 'Multiple shoulder tattoos, Always wears signature green beret',
    vehicle: 'BMW 4 Series Convertible, White',
    motive:
      'Won the Golden Dessert Award for the past three years and was openly angry about losing it to Tropical Treats.',
    alibi:
      'Was at a local farmer’s market buying fruit for her cakes and has receipts timestamped during the time of the theft.',
  },
];

const SuspectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Hook to navigate programmatically
  const suspect = suspects.find(s => s.id === parseInt(id));

  if (!suspect) return <div>Suspect not found</div>;

  return (
    <div className="dossier-container">
      {/* ✅ Back button */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="dossier-header">
        <h1>Suspect Dossier</h1>
        <h2>{suspect.name}</h2>
        <p className="nickname">Alias: <span>{suspect.nickname}</span></p>
      </div>

      <div className="dossier-body">
        <div className="left-panel">
          <div className="photo-card">
            <img src={suspect.photo} alt={`${suspect.name}`} />
            <p>Mugshot</p>
          </div>
          <div className="photo-card">
            <img src={suspect.business.photo} alt="Business" />
            <p>{suspect.business.name}</p>
          </div>
          <div className="photo-card">
            <img src={suspect.dessert.photo} alt="Dessert" />
            <p>{suspect.dessert.name}</p>
          </div>
        </div>

        <div className="right-panel">
          <p><strong>Date of Birth:</strong> {suspect.dob}</p>
          <p><strong>Identifying Marks:</strong> {suspect.marks}</p>
          <p><strong>Vehicle:</strong> {suspect.vehicle}</p>
          <p><strong>Potential Motive:</strong> {suspect.motive}</p>
          <p><strong>Alibi:</strong> {suspect.alibi}</p>
        </div>
      </div>
    </div>
  );
};

export default SuspectDetail;
