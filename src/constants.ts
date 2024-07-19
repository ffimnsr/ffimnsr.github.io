import {
  FaBriefcase,
  FaCertificate,
  FaCodepen,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaGlobe,
  FaGoogle,
  FaGooglePlay,
  FaHackerrank,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaTelegram,
  FaThreads,
  FaUserGraduate,
  FaXTwitter
} from "react-icons/fa6"

export type Link = {
  title: string
  href: string
  icon: React.ComponentType
}

export type User = {
  name: string
  description: string
  contact: string
  avatarUrl: string
  email: string
}

export type PortfolioItem = {
  name: string
  taskOverview: string
  description: string
  imageUrl: string
  url: string
}

export const THEME = {
  linkHover: "gray.600",
  profileLinkBgColor: "gray.700",
  pageBgColor: "gray.900",
  subHeadingTextColor: "gray.400",
  portfolioSectionTitleColor: "gray.400",
  portfolioSectionSubTitleColor: "gray.300",
}

export const USER_DATA: User = {
  name: "Edward Fitz Abucay",
  description: "How long is forever?",
  contact: "@ffimnsr",
  avatarUrl: "https://avatars.githubusercontent.com/u/29743013?v=4",
  email: "eabucay-jobs.bbva3@silomails.com",
}

export const CONTACT_LINKS: Link[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ffimnsr",
    icon: FaLinkedin,
  },
  {
    title: "Discord",
    href: "https://discord.com/users/itsfizn4",
    icon: FaDiscord,
  },
  {
    title: "Telegram",
    href: "https://t.me/ffimnsr",
    icon: FaTelegram,
  },
  {
    title: "X",
    href: "https://x.com/ffimnsr",
    icon: FaXTwitter,
  },
  {
    title: "Threads",
    href: "https://threads.net/@ffimnsr",
    icon: FaThreads,
  },
  {
    title: "Email",
    href: `mailto:${USER_DATA.email}`,
    icon: FaEnvelope,
  },
]

export const PROFILE_LINKS: Link[] = [
  {
    title: "My Wonderful Blog",
    href: "https://vastorigins.com",
    icon: FaGlobe
  },
  {
    title: "Credly (Certificates)",
    href: "https://www.credly.com/users/ffimnsr",
    icon: FaCertificate,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: FaBriefcase,
  },
  {
    title: "Github",
    href: "https://github.com/ffimnsr",
    icon: FaGithub,
  },
  {
    title: "Google Cloud Skill",
    href: "https://www.cloudskillsboost.google/public_profiles/a7529475-c92d-4186-9934-bb8b6276540d",
    icon: FaGooglePlay,
  },
  {
    title: "Google for Developers",
    href: "https://g.dev/ffimnsr",
    icon: FaGoogle,
  },
  {
    title: "HackerRank",
    href: "https://www.hackerrank.com/profile/ffimnsr",
    icon: FaHackerrank,
  },
  {
    title: "StackOverflow",
    href: "https://stackoverflow.com/users/1406063/edward-fitz-abucay",
    icon: FaStackOverflow,
  },
  {
    title: "Coursera",
    href: "https://www.coursera.org/learner/ffimnsr",
    icon: FaUserGraduate,
  },
  {
    title: "CodePen",
    href: "https://codepen.io/ffimnsr",
    icon: FaCodepen,
  },
  {
    title: "Medium",
    href: "https://ffimnsr.medium.com",
    icon: FaMedium,
  },
  {
    title: "Gitlab",
    href: "https://gitlab.com/ffimnsr",
    icon: FaGitlab,
  },
]

export const COMPANIES: PortfolioItem[] = [
  {
    name: "NFTPort",
    taskOverview: "Built Solana Indexer & Integrated Solana Ecosystem",
    description: "Led and implemented a full-fledged Solana indexer.",
    imageUrl: "https://placehold.co/400",
    url: "https://www.nftport.xyz/",
  },
  {
    name: "Onebright UK",
    taskOverview: "Built an Online Mental Health Triage Platform",
    description: "Pioneered the development of platform from scratch to completion.",
    imageUrl: "https://placehold.co/400",
    url: "https://onebright.com/",
  },
  {
    name: "Hyst US",
    taskOverview: "Built a Rewards System Using Blockchain",
    description: "Developed a blockchain-based rewards system for the platform and raffle system.",
    imageUrl: "https://placehold.co/400",
    url: "https://hyst.co/",
  },
  {
    name: "Becton Dickinson",
    taskOverview: "Built an Internal Inventory Platform That Uses Active Directory",
    description: "Reinvented the inventory platform to use Active Directory for user management.",
    imageUrl: "https://placehold.co/400",
    url: "https://bd.com/",
  },
  {
    name: "ACEP",
    taskOverview: "Implemented SSO on an Existing Platform",
    description: "Deployed SSO on the existing platform for better user authentication and authorization.",
    imageUrl: "https://placehold.co/400",
    url: "https://acep.org/",
  },
  {
    name: "Queenside Games (Chess Playground)",
    taskOverview: "Maintained & Developed Erlang/Elixir Game Backend",
    description: "Implemented features like websocket connection to Unity client. Converted old Erlang to Elixir code.",
    imageUrl: "https://placehold.co/400",
    url: "https://play.google.com/store/apps/details?id=com.queenloop.choker&hl=en_US",
  },
  {
    name: "HyperCapital",
    taskOverview: "Led Development Of POC For Blockchain Payments",
    description: "Created a proof of concept web3 app for blockchain payments. Connected to on-ramp and off-ramp services.",
    imageUrl: "https://placehold.co/400",
    url: "https://hypercapital.com/",
  },
  {
    name: "Nitro Token",
    taskOverview: "Improved Ported ICO Platform For Use In Nitro Token",
    description: "Deployed the ICO platform for Nitro Token. Migrated the platform to use newer libraries and dotnet versions.",
    imageUrl: "https://placehold.co/400",
    url: "https://nitro.live/",
  },
  {
    name: "SmartFunding",
    taskOverview: "Build QoL Feature For Users & Manage Deployments",
    description: "Improved the quality of life for users by implementing features that would make it easy to invest and loan.",
    imageUrl: "https://placehold.co/400",
    url: "https://smartfunding.sg/",
  },
  {
    name: "Fatberry",
    taskOverview: "Devised New Web Security Protocols & Developed New Features",
    description: "Upgraded the web security protocols implemented on-site and applied practices on AWS security and OWASP.",
    imageUrl: "https://placehold.co/400",
    url: "https://fatberry.com/",
  },
  {
    name: "BeamSpace",
    taskOverview: "Improved Bookings Capability & Brought New Testing Workflow",
    description: "Developed a new booking capability for the platform. Implemented a new testing workflow for the team.",
    imageUrl: "https://placehold.co/400",
    url: "https://www.beamspace.com/",
  },
  {
    name: "Eureka Pro Singapore",
    taskOverview: "Spearheaded the Acquisition of Coin Exchange Software",
    description: "Led the acquisition of a coin exchange software, and integrated custom features for the platform.",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Talkpush",
    taskOverview: "Developed a New NLP Chatbot & Implemented User Search",
    description: "Updated the old chatbot to use NLP. Implemented a user search feature for the platform.",
    imageUrl: "https://placehold.co/400",
    url: "https://talkpush.com/",
  },
  {
    name: "Truuue Singapore",
    taskOverview: "Built a Marketplace/Auction Place for Real Estate on iOS",
    description: "Created a marketplace/auction place for real estate on iOS. Implemented features like realtime mapping, auctions and classified ads.",
    imageUrl: "https://placehold.co/400",
    url: "https://truuue.com/",
  },
  {
    name: "Matchimi PH",
    taskOverview: "Built a Full-Featured Candidate Searching Platform",
    description: "Developed a new candidate search feature and maintained the RoR code.",
    imageUrl: "https://placehold.co/400",
    url: "https://matchimi.ph/",
  },
  {
    name: "ToucanPay",
    taskOverview: "ML Researcher on Credit Behavioral Score",
    description: "Researched on credit behavioral score using machine learning. Implemented the research on the platform.",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Blueprint Gaming",
    taskOverview: "Built EGM Games & Developed Hardware Drivers",
    description: "Developed new titled EGM games and implement hardware drivers/connectors for gaming machine (i.e. note reader and coin collector).",
    imageUrl: "https://placehold.co/400",
    url: "https://blueprintgaming.com/",
  },
  {
    name: "PJ Holdings",
    taskOverview: "Quality Tested EGM Games & Adapted New Automated Testing",
    description: "Tested the quality of EGM games. Adapted new automated testing for the platform.",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Aruze Gaming",
    taskOverview: "Built EGM Games & Maintained Theoretical RTP Score",
    description: "Maintained the TRTP (theoretical return to player) percentage of casino slot machine games.",
    imageUrl: "https://placehold.co/400",
    url: "https://aruzeglobal.com/",
  },
]
