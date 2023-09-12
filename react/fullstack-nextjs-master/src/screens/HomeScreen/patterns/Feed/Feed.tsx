import React from "react";
import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import type { Post } from "@src/services/posts/PostsService";
import { FeedPost } from "./patterns/FeedPost";


interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({children}) {
  const theme = useTheme();
  
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingHorizontal: '40px',
        paddingVertical: '32px',
      }} 
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  return (
    <Box 
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      <Box 
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image 
            styleSheet={{
              width: {xs: '100px', md: '128px'},
              height: {xs: '100px', md: '128px'},
              borderRadius: '100%',
            }}
            //src="https://github.com/lailanga.png" 
            src={templateConfig.personal.avatar}
            alt="Imagem de perfil da Laiane Langa"
          />

          <Box styleSheet={{justifyContent: 'space-between' }} >
            <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'none', md: 'flex'} }} >
              <Button fullWidth colorVariant="primary" size="xl" href="/newsletter">newsletter</Button>
              <Button fullWidth colorVariant="neutral" size="xl" href="/">me pague um café</Button>
            </Box>
            <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'flex', md: 'none'} }} >
              <Button fullWidth colorVariant="primary" size="xs" href="/">newsletter</Button>
              <Button fullWidth colorVariant="neutral" size="xs" href="/">me pague um café</Button>
            </Box>
          </Box>
          
      </Box>
      
      <Text tag="h1" variant="heading4">
        {templateConfig.personal.name}
      </Text>

      <Box 
        styleSheet={{
          flexDirection: "row",
          gap: "4px",
        }}
      >
        {Object.keys(templateConfig.personal.socialNetworks).map(key => {
          const socialNetworks = templateConfig.personal.socialNetworks[key];
          if(socialNetworks){
            return (
              <Link 
                key={key}
                target="_blank"
                href={templateConfig.personal.socialNetworks[key]}
              >
                <Icon name={key as any} />
              </Link>
            )
          }
          return null;
        })}
      </Box>
    </Box>
  )

}

interface FeedPostsProps {
  posts: Post[];
}

Feed.Posts = ({posts}: FeedPostsProps) => {
  return (
    <Box>
      <Text variant="heading4" styleSheet={{ marginBottom: "27px" }}>
        Últimas Atualizações
      </Text>
      {posts.map(({slug, title, image, metadata }) => {
        const { date, excerpt, url, tags } = metadata;
        return (
          <FeedPost
            key={slug}
            title={title}
            date={date}
            excerpt={excerpt}
            tags={tags}
            url={url}
            image={image}
          />
        )
      })}
    </Box>
  )

}