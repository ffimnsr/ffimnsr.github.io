import { FaCertificate, FaDiscord, FaGithub, FaGitlab, FaGlobeAsia, FaGoogle, FaGooglePlay, FaGooglePlus, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"

export type Link = {
  title: string
  href: string
  icon: React.ComponentType
}

type User = {
  name: string
  description: string
  contact: string
  avatarUrl: string
}

export const THEME = {
  linkHover: "gray.600",
  profileLinkBgColor: "gray.700",
  pageBgColor: "gray.900",
  subHeadingTextColor: "gray.400",
}

export const USER_DATA: User = {
  name: "Edward Fitz Abucay",
  description: "How long is forever?",
  contact: "@ffimnsr",
  avatarUrl: "https://avatars.githubusercontent.com/u/29743013?v=4",
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
]

export const PROFILE_LINKS: Link[] = [
  {
    title: "My Wonderful Blog",
    href: "https://vastorigins.com",
    icon: FaGlobeAsia
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
    href: "hhttps://www.cloudskillsboost.google/public_profiles/a7529475-c92d-4186-9934-bb8b6276540d",
    icon: FaGooglePlay,
  },
  {
    title: "Credly (Certificates)",
    href: "https://www.credly.com/users/ffimnsr",
    icon: FaCertificate,
  },
]
