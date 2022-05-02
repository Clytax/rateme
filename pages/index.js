import Head from 'next/head';
import Image from 'next/image';

import Rating from '../components/Rating/Rating';

export default function Home() {
  return (
    <div className="app">
      <Rating />
    </div>
  );
}
