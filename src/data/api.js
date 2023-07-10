const heroSection = {
    heading: 'Explore, Buy, Sell, Trade, And Store NFTs',
    subHeading: "Join the world's biggest NFT marketplace and discover truely rare digital artwork, sound, videos etc",
    image: "bitcoin.png"
}

const counterSection = [
    {
        type:'User Active',
        amount:41
    },
    {
        type:'Artworks',
        amount:41
    },

    {
        type:'Creative Artist',
        amount:10
    },
    {
        type:'Trades',
        amount:999
    }
]



const lootSection = {
    lootHeading:'Create, Sell & Collect NFTs at NFTPro',
    lootSubHeading:'NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT. List the collection & artworks to the blockchain network acts as the decentralized ledger that tracks the ownership.',
}

const howWork = [
    {
        name:'Set up your wallet',
        image:`<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.1111 69.1111H29.4844C27.5644 69.1111 26 67.2622 26 65.0044V34.1067C26 31.8489 27.8489 30 30.1067 30H80.56C82.8178 30 84.6667 31.8489 84.6667 34.1067V49.5556" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M84.6667 38.8887H26V45.9998H84.6667V38.8887Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M93.0043 54.8887H42.551C40.283 54.8887 38.4443 56.7273 38.4443 58.9953V89.8931C38.4443 92.1612 40.283 93.9998 42.551 93.9998H93.0043C95.2724 93.9998 97.111 92.1612 97.111 89.8931V58.9953C97.111 56.7273 95.2724 54.8887 93.0043 54.8887Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.333 85.1113H56.2219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.333 85.1113H72.2219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M79.333 85.1113H88.2219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M83.7775 74.4446C86.2321 74.4446 88.2219 72.4547 88.2219 70.0001C88.2219 67.5455 86.2321 65.5557 83.7775 65.5557C81.3229 65.5557 79.333 67.5455 79.333 70.0001C79.333 72.4547 81.3229 74.4446 83.7775 74.4446Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        details: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner.'

    },

    {
        name:'Create your collection',
        image:`<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.7778 38.8889C61.5962 38.8889 69.5556 36.899 69.5556 34.4444C69.5556 31.9898 61.5962 30 51.7778 30C41.9594 30 34 31.9898 34 34.4444C34 36.899 41.9594 38.8889 51.7778 38.8889Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M69.5556 35.3335V41.9291C69.5556 44.8624 61.5911 47.2446 51.7778 47.2446C41.9644 47.2446 34 44.8624 34 41.9291V35.3335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M69.5556 42.4443V50.8177C69.5556 53.751 61.5911 56.1332 51.7778 56.1332C41.9644 56.1332 34 53.751 34 50.8177V42.4443" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M58.2133 63.9912C56.2044 64.2223 54.0178 64.3646 51.7067 64.3646C41.9289 64.3646 34 62.0001 34 59.0668V49.5557" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M69.5557 51.3335V56.6668" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M52.542 73.2361C52.2754 73.2361 51.9909 73.2361 51.7242 73.2361C41.9465 73.2361 34.0176 70.8716 34.0176 67.9383V56.6494" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M53.6087 81.5202C52.9865 81.5379 52.3642 81.5557 51.7242 81.5557C41.9465 81.5557 34.0176 79.1913 34.0176 76.2579V67.3335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M74.8887 94C83.7252 94 90.8887 86.8366 90.8887 78C90.8887 69.1634 83.7252 62 74.8887 62C66.0521 62 58.8887 69.1634 58.8887 78C58.8887 86.8366 66.0521 94 74.8887 94Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M69.5557 85.1109H76.6668C78.6223 85.1109 80.2223 83.5109 80.2223 81.5553C80.2223 79.5998 78.6223 77.9998 76.6668 77.9998H73.1112C71.1557 77.9998 69.5557 76.3998 69.5557 74.4442C69.5557 72.4887 71.1557 70.8887 73.1112 70.8887H80.2223" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M74.8887 67.3335V70.8891" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M74.8887 85.1113V88.6669" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`,
        details: 'Click Create and set up your collection. Add social links, a description, profile & banner images, sales fee..'

    },

    {
        name:'Set up your wallet',
        image:`<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.5254 77.1608H64.7879C67.112 77.1608 68.9982 75.2746 68.9982 72.9506C68.9982 70.6265 67.112 68.7403 64.7879 68.7403H59.7356C57.4116 68.7403 55.5254 66.8541 55.5254 64.5301C55.5254 62.206 57.4116 60.3198 59.7356 60.3198H67.3141" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M62.2617 55.2676V60.3199" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M62.2617 77.1606V80.5288" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M77.3678 94.0003H47.1551C41.5471 94.0003 37 89.6048 37 84.182V83.6936C37 72.8817 40.5703 62.3392 47.1888 53.6156L56.165 41.7764H66.6233L74.8585 51.0726C83.0264 60.2846 87.523 72.0228 87.523 84.1651C87.523 89.5879 82.9759 93.9834 77.3678 93.9834V94.0003Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M66.1345 41.8444C66.1345 41.8444 66.2187 41.7771 66.2356 41.7265L66.7745 40.9519C68.5933 38.3078 69.5701 35.1922 69.5701 32.0093C69.5701 30.4599 67.8186 29.4832 66.4376 30.2915L61.9243 32.9019C61.2675 33.2892 60.4591 33.2892 59.7855 32.9019L55.2721 30.2915C53.8911 29.4832 52.1396 30.4599 52.1396 32.0093V32.0767C52.1396 35.4954 53.268 38.8131 55.3394 41.575L55.4742 41.7602" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`,
        details: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties and stats'

    },

    {
        name:'List them for sale',
        image:`<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_280_2113)">
        <path d="M44.0756 86.304H39.2148V36.0762H79.7212V86.304H63.5186" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M84.582 31.2153V83.0634" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M44.0762 31.2153H84.5825" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M47.3164 50.6582H71.6202" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M47.3164 44.1772H60.2784" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M47.3164 57.1392H71.6202" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M53.7974 81.443C57.3768 81.443 60.2784 78.5413 60.2784 74.962C60.2784 71.3826 57.3768 68.481 53.7974 68.481C50.2181 68.481 47.3164 71.3826 47.3164 74.962C47.3164 78.5413 50.2181 81.443 53.7974 81.443Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M58.6582 92.7849V84.6836" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M53.7979 91.1645V86.3037" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M48.9365 84.6836V92.7849" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
        <defs>
        <clipPath id="clip0_280_2113">
        <rect width="47.7975" height="64" fill="white" transform="translate(38 30)"></rect>
        </clipPath>
        </defs>
        </svg>`,
        details: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!.'

    },
]

const PopularCollection = [

    {
        name:"Autumn Art Concept",
        itemNumber:1,
        image:'autumn_collection.png'
    },
    {
        name:"Art Collection ",
        itemNumber:450,
        image:'collection_1.png'

    },

    {
        name:"Autumn Art Concept",
        itemNumber:458,
        image:'collection_2.png'

    },
    {
        name:"Art Concept",
        itemNumber:58,
        image:'collection_4.png'

    },
    {
        name:"NFT Concept",
        itemNumber:58,
        image:'collection_5.png'

    },
    {
        name:"Toon Concept",
        itemNumber:58,
        image:'collection_6.png'

    },
]

const liveAcution = [
    {   
        id:1,
        name:"Autumn Art Concept",
        price:51,
        bid:1/10,
        image:'autumn_collection.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png'],
        loved:1,
        timeRemained:10,
        cat:'at-work'
        
    },
    {
        id:2,
        name:"Art Collection ",
        price:10,
        bid:1/10,
        image:'collection_1.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:10,
        timeRemained:15,
        cat:'music'



    },

    {
        id:3,
        name:"Autumn Art Concept",
        price:10,
        bid:10/10,
        image:'collection_2.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:14,
        timeRemained:5,
        cat:'sports'




    },
    {
        id:4,
        name:"Art Concept",
        price:10,
        bid:5/10,
        image:'collection_4.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:14,
        timeRemained:2,
        cat:'at-work'




    },
    {
        id:5,
        name:"NFT Concept",
        price:10,
        bid:1/8,
        image:'collection_5.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:11,
        timeRemained:5,
        cat:'music'




    },
    {
        id:5,
        name:"Toon Concept",
        itemNumber:58,
        image:'collection_6.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:18,
        timeRemained:3,
        cat:'virtual-world'




    },
]

const cats = ['all', 'at-work', 'music', 'photography', 'sports', 'virtual-world']
const explored = [
    {
        id:6,
        name:"Autumn Art Concept",
        price:51,
        bid:1/10,
        image:'autumn_collection.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png'],
        loved:1,
        timeRemained:10,
        cat:'at-work'
        
    },
    {

        id:7,
        name:"Art Collection ",
        price:10,
        bid:1/10,
        image:'collection_1.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:10,
        timeRemained:15,
        cat:'music'



    },

    {
        id:8,
        name:"Autumn Art Concept",
        price:10,
        bid:10/10,
        image:'collection_2.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:14,
        timeRemained:5,
        cat:'sports'




    },
    {
        name:"Art Concept",
        price:10,
        bid:5/10,
        image:'collection_4.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:14,
        timeRemained:2,
        cat:'at-work'




    },
    {
        name:"NFT Concept",
        price:10,
        bid:1/8,
        image:'collection_5.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:11,
        timeRemained:5,
        cat:'music'




    },
    {
        name:"Toon Concept",
        itemNumber:58,
        image:'collection_6.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:18,
        timeRemained:3,
        cat:'virtual-world'




    },
    {
        name:"NFT Concept",
        price:11,
        bid:1/8,
        image:'collection_5.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:11,
        timeRemained:5,
        cat:'music'




    },
    {
        name:"Toon Concept",
        itemNumber:58,
        image:'collection_6.png',
        bidedBy:['user_pic.png','user_pic.png', 'user_pic.png','user_pic.png', ],
        loved:18,
        timeRemained:3,
        cat:'virtual-world'




    },

]

const latest = [

    {
        name: 'Hasasn',
        published: '12 Oct 2022',
        heading:'Emotes contest prepare your best moves for the metaverse music festival',
        image:'latest_banner.png'
    },
    {
        name: 'John',
        published: '12 Oct 2022',
        heading:'Emotes contest prepare your best moves for the metaverse music festival',
        image:'latest_banner_2.png'

    },
    {
        name: 'Haady',
        published: '12 Oct 2022',
        heading:'Emotes contest prepare your best moves for the metaverse music festival',
        image:'latest_banenr_3.png'

    }
]

const creators = [
    {
        name:'Mark Wood',
        earned:'$250,000.00',
        image:'c1.png'
    },
    {
        name:'Martin Gups',
        earned:'$250,000.00',
        image:'c2.png'
    },
    {
        name:'Lexus Kane',
        earned:'$50,000.00',
        image:'c5.png'
    },
    {
        name:'Lexus Kane',
        earned:'$50,000.00',
        image:'c3.png'
    },
    {
        name:'Kaimen kese',
        earned:'$50,000.00',
        image:'c4.png'
    },
    {
        name:'John karry',
        earned:'$50,000.00',
        image:'c8.png'
    },
    {
        name:'Robert King',
        earned:'$50,000.00',
        image:'c7.png'
    },
    {
        name:'John karry',
        earned:'$50,000.00',
        image:'c6.png'
    },
    {
        name:'Mark Wood',
        earned:'$250,000.00',
        image:'c1.png'
    },
    {
        name:'Martin Gups',
        earned:'$250,000.00',
        image:'c2.png'
    },
    {
        name:'Lexus Kane',
        earned:'$50,000.00',
        image:'c5.png'
    },
    {
        name:'Lexus Kane',
        earned:'$50,000.00',
        image:'c3.png'
    },
    {
        name:'Kaimen kese',
        earned:'$50,000.00',
        image:'c4.png'
    },
    {
        name:'John karry',
        earned:'$50,000.00',
        image:'c8.png'
    },
    {
        name:'Robert King',
        earned:'$50,000.00',
        image:'c7.png'
    },
    {
        name:'John karry',
        earned:'$50,000.00',
        image:'c6.png'
    }

]
export {heroSection, counterSection, lootSection,howWork,PopularCollection,liveAcution,explored,cats,latest,creators};