import { css } from "@emotion/react";
import { SvgIconComponent } from "@mui/icons-material";
import { List, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";

interface SocialMediaIcon {
  icon: SvgIconComponent;
  url: string;
}

interface SocialMediaContainerProps {
  icons: SocialMediaIcon[];
}

const socialMediaContainerCss = {
  smContainer: () =>
    css({
      gap: "0.2rem",
    }),
};

export const SocialMediaContainer = ({ icons }: SocialMediaContainerProps) => (
  <Box display="flex" component="div" css={socialMediaContainerCss.smContainer}>
    {icons.map(({ icon: Icon, url }, i) => (
      <List key={i}>
        <ListItemButton component="a" target="_blank" href={url} data-testid="link">
          <Icon />
        </ListItemButton>
      </List>
    ))}
  </Box>
);
