"use client";
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <BillboardHero
        title="Welcome to MemeCoin"
        subtitle="Where memes meet currency!"
      />
      <SplitAbout
        description="MemeCoin is a community-driven token that blends humor and currency in an engaging way. We encourage inclusivity and playfulness in every interaction."
      />
      <ProcessRoadmap
        items={[
          { id: '1', title: 'Step 1: Get Your Wallet', description: 'Set up a crypto wallet to hold your MemeCoins.', image: '/images/placeholder1.avif', items: [], reverse: false },
          { id: '2', title: 'Step 2: Buy MemeCoin', description: 'Purchase MemeCoin on your favorite exchange.', image: '/images/placeholder2.avif', items: [], reverse: true },
          { id: '3', title: 'Step 3: Enjoy the Community', description: 'Engage with community, spread laughter!', image: '/images/placeholder3.avif', items: [], reverse: false },
        ]}
        title="How to Buy"
      />
      <NumberGridTokenomics
        title="Key Tokenomics"
        description="Here are the key highlights of MemeCoin's tokenomics."
        kpiItems={[
          { value: '100M', description: 'Total Supply' },
          { value: '40%', description: 'Community Allocation' },
          { value: '10%', description: 'Development Fund' },
          { value: '50%', description: 'Liquidity & Marketing' },
        ]}
      />
      <CentralFAQ
        items={[
          { title: 'What is MemeCoin?', content: 'MemeCoin is a playful cryptocurrency that celebrates memes and community.' },
          { title: 'How can I buy MemeCoin?', content: 'You can buy MemeCoin on popular crypto exchanges.' },
          { title: 'Is MemeCoin a good investment?', content: 'Invest wisely and always do your research.' },
          { title: 'How to participate in the community?', content: 'Join us on social channels and share your memes!' },
        ]}
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={100}
        columns={[
          {
            title: 'Links',
            items: [
              { label: 'Home', onClick: () => {} },
              { label: 'About', onClick: () => {} },
              { label: 'How to Buy', onClick: () => {} },
              { label: 'Tokenomics', onClick: () => {} },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Twitter', onClick: () => {} },
              { label: 'Discord', onClick: () => {} },
            ],
          },
        ]}
        copyrightText="© 2023 MemeCoin. All Rights Reserved."
        onPrivacyClick={() => {}}
      />
    </>
  );
}