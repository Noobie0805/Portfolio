import React from 'react'
import Style from './NFTMarket.module.css';
import ImageSlider from './ImageSlider';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const NFTMarket = () => {
  const nftImages = [
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/NFT_Hero.png'),
      alt: 'NFT Hero Section',
      caption: 'Main landing page of the NFT Marketplace'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/NFT_Description.png'),
      alt: 'NFT Description',
      caption: 'Detailed view of NFT assets and information'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/About_section.png'),
      alt: 'About Section',
      caption: 'Information about the marketplace and its features'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/Top_Creators.png'),
      alt: 'Top Creators',
      caption: 'Showcasing the most successful artists and creators'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/User_collection.png'),
      alt: 'User Collection',
      caption: 'Personal NFT collection management'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/Upload_new_asset.png'),
      alt: 'Upload New Asset',
      caption: 'Interface for minting and uploading new NFTs'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/Fast_facts.png'),
      alt: 'Fast Facts',
      caption: 'Quick statistics and marketplace insights'
    },
    {
      src: require('../../../../media/Project Snapshots/NFT_Marketplace/Contact_section.png'),
      alt: 'Contact Section',
      caption: 'Get in touch with the marketplace team'
    }
  ];

  return (
    <div className={Style.NFTMarket}>
      <div className={Style.NFTMarket_box}>
        <div className={Style.NFTMarket_header}>
          <h2 className={Style.NFTMarket_title}>Decentralized NFT Marketplace</h2>
          <div className={Style.NFTMarket_buttons}>
            <a 
              href="https://github.com/Noobie0805/NFT-Marketplace" 
              target="_blank" 
              rel="noopener noreferrer"
              className={Style.project_button}
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://nft-marketplace-demo.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className={Style.project_button}
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
        
        <div className={Style.NFTMarket_content}>
          <div className={Style.NFTMarket_slider_container}>
            <ImageSlider images={nftImages} />
          </div>
          
          <div className={Style.NFTMarket_description_container}>
            <div className={Style.NFTMarket_overview}>
              <h3>Overview</h3>
              <p>
                A blockchain-powered decentralized marketplace built on the Ethereum testnet, enabling users to mint, trade, and securely store digital assets as NFTs. The platform provides a seamless, transparent, and trustless environment for asset exchange, ensuring security through on-chain transactions and wallet-based authentication.
              </p>
            </div>
            
            <div className={Style.NFTMarket_tech}>
              <h3>Technologies Used</h3>
              <ul>
                <li><strong>Blockchain & Smart Contracts:</strong> Ethereum, Solidity, Hardhat (100% test coverage)</li>
                <li><strong>Frontend:</strong> Next.js, React.js, Ethers.js, Web3.js</li>
                <li><strong>Wallet Integration:</strong> MetaMask</li>
                <li><strong>Development & Testing:</strong> JavaScript, Node.js, Ethereum Testnet (Goerli/Sepolia)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTMarket;
