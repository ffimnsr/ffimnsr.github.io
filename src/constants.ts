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
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://onebright.com/",
  },
  {
    name: "Hyst US",
    taskOverview: "Built a Rewards System That Uses Blockchain",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://hyst.co/",
  },
  {
    name: "Becton Dickinson",
    taskOverview: "Built an Internal Inventory Platform That Uses Active Directory",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://bd.com/",
  },
  {
    name: "ACEP",
    taskOverview: "Implemented SSO on an Existing Platform",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://acep.org/",
  },
  {
    name: "Queenside Games (Chess Playground)",
    taskOverview: "Maintained & Developed Erlang/Elixir Game Backend",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://play.google.com/store/apps/details?id=com.queenloop.choker&hl=en_US",
  },
  {
    name: "HyperCapital",
    taskOverview: "Led Development Of POC For Blockchain Payments",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://hypercapital.com/",
  },
  {
    name: "Nitro Token",
    taskOverview: "Improved Ported ICO Platform For Use In Nitro Token",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://nitro.live/",
  },
  {
    name: "SmartFunding",
    taskOverview: "Build QoL Feature For Users & Manage Deployments",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://smartfunding.sg/",
  },
  {
    name: "Fatberry",
    taskOverview: "Devised New Web Security Protocols & Developed New Features",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://fatberry.com/",
  },
  {
    name: "BeamSpace",
    taskOverview: "Improved Bookings Capability & Brought New Testing Workflow",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://www.beamspace.com/",
  },
  {
    name: "Eureka Pro Singapore",
    taskOverview: "Spearheaded the Acquisition of Coin Exchange Software",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Talkpush",
    taskOverview: "Developed a New NLP Chatbot & Implemented User Search",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://talkpush.com/",
  },
  {
    name: "Truuue Singapore",
    taskOverview: "Built a Marketplace/Auction Place for Real Estate on iOS",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://truuue.com/",
  },
  {
    name: "Matchimi PH",
    taskOverview: "Built a Full-Featured Candidate Searching Platform",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://matchimi.ph/",
  },
  {
    name: "ToucanPay",
    taskOverview: "ML Researcher on Credit Behavioral Score",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "",
  },
  {
    name: "Blueprint Gaming",
    taskOverview: "Built EGM Games & Developed Hardware Drivers",
    description: "",
    imageUrl: "https://placehold.co/400",
    url: "https://blueprintgaming.com/",
  },
  {
    name: "PJ Holdings",
    taskOverview: "Quality Tested EGM Games & Adapted New Automated Testing",
    description: "",
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
