import {
  FaBriefcase,
  FaCertificate,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaGlobe,
  FaGoogle,
  FaGooglePlay,
  FaHackerrank,
  FaLinkedin,
  FaStackOverflow,
  FaTelegram,
  FaThreads,
  FaTwitter
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
    icon: FaTwitter,
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
    title: "Gitlab",
    href: "https://gitlab.com/ffimnsr",
    icon: FaGitlab,
  },
  {
    title: "Google for Developers",
    href: "https://g.dev/ffimnsr",
    icon: FaGoogle,
  },
  {
    title: "Google Cloud Skill",
    href: "https://www.cloudskillsboost.google/public_profiles/a7529475-c92d-4186-9934-bb8b6276540d",
    icon: FaGooglePlay,
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
]

export const COMPANIES: PortfolioItem[] = [
  {
    name: "NFTPort",
    taskOverview: "Build Solana Indexer & Integrate Solana Ecosystem",
    description: "Lead and implemented a full pledged Solana indexer to capture block events.",
    imageUrl: "https://placehold.co/400",
    url: "https://www.nftport.xyz/",
  },
  {
    name: "Onebright UK",
    taskOverview: "Build Online Mental Health Triage Platform",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://onebright.com/",
  },
  {
    name: "Hyst US",
    taskOverview: "Build Rewards System That Use Blockchain",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://hyst.co/",
  },
  {
    name: "Becton Dickinson",
    taskOverview: "Build Internal Inventory Platform That Uses Active Directory",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://bd.com/",
  },
  {
    name: "ACEP",
    taskOverview: "Implement SSO On Existing Platform",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://acep.org/",
  },
  {
    name: "Queenside Games (Chess Playground)",
    taskOverview: "Maintain & Develop Erlang/Elixir Game Backend",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://play.google.com/store/apps/details?id=com.queenloop.choker&hl=en_US",
  },
  {
    name: "HyperCapital",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://hypercapital.com/",
  },
  {
    name: "Nitro Token",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://nitro.live/",
  },
  {
    name: "SmartFunding Singapore",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://smartfunding.sg/",
  },
  {
    name: "Fatberry",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://fatberry.com/",
  },
  {
    name: "BeamSpace",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://www.beamspace.com/",
  },
  {
    name: "Eureka Pro Singapore",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Talkpush",
    taskOverview: "Develop New NLP Chatbot & Implement User Search",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://talkpush.com/",
  },
  {
    name: "Truuue Singapore",
    taskOverview: "Build Marketplace/Auction Place For Realstate On IOS",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://truuue.com/",
  },
  {
    name: "Matchimi PH",
    taskOverview: "",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://matchimi.ph/",
  },
  {
    name: "ToucanPay",
    taskOverview: "ML Researcher On Credit Behavioural Score",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Blueprint Gaming",
    taskOverview: "Build EGM Games & Develop Hardware Drivers",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://blueprintgaming.com/",
  },
  {
    name: "PJ Holdings",
    taskOverview: "Quality Test EGM Games & Adapt New Automated Testing",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Aruze Gaming",
    taskOverview: "Build EGM Games & Maintained Theoritcal RTP Score",
    description: "Maintained the TRTP (theoretical return to player) percentage of casino slot machine games.",
    imageUrl: "https://placehold.co/400",
    url: "https://aruzeglobal.com/",
  },
]
