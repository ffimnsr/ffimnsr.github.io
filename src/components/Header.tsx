
import React from "react"
import { VStack, Image, Heading, Box } from "@chakra-ui/react"

import { THEME, USER_DATA } from "../constants"
import axios from "axios"

export type GithubUser = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: any
  company: string
  blog: string
  location: any
  email: any
  hireable: boolean
  bio: string
  twitter_username: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

const Header: React.FC = () => {
  const [user, setUser] = React.useState<GithubUser | null>(null);
  React.useEffect(() => {
    axios.get("https://api.github.com/users/ffimnsr")
      .then((resp) => {
        setUser(resp.data);
      })
  }, [])
  return (
    <VStack>
      <Image src={user ? user.avatar_url : USER_DATA.avatarUrl} boxSize={180} mb={3} borderRadius={"full"} borderWidth={"medium"} borderColor={"white"} fallbackSrc={USER_DATA.avatarUrl} />
      <Heading size="lg" mb={2}>
        {USER_DATA.name}
      </Heading>
      <Heading as="h2" size="md" color={THEME.subHeadingTextColor} fontWeight="normal">
        {user ? user.bio : USER_DATA.description}
      </Heading>
    </VStack>
  )
}

export default Header;
