import { defineConfig } from 'rspress/config';
import  path from 'path'

export default defineConfig({
  root: 'docs',
  base: '/',
    title: 'hepic.cloud',
  icon: "/hepic_cloud_logo.png",
  logo: {
    light: "/hepic_logo.svg",
    dark: "/hepic_logo.svg",
  },
  description: 'hepic.cloud: telecom observability',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          children: "window.RSPRESS_THEME = 'dark';",
        },
      ],
    },
  },
  themeConfig: {  
    footer: {
      message: '<p>All rights reserved</p>',
      copyright: '<p>© QXIP BV</p>'
    },
    darkMode: true,
    sidebar: {
      '/docs/docs/':[
        {
          text: "Cloud",
          items: [
            {
              text: "Get Started",
              link: '/docs'
            },
          ]
        },
        {
          text: "On-Prem",
          items: [
            {
              text: "Get Started",
              link: '/docs/onprem'
            }
          ]
          
        },
        {
          text: "Documentation",
          items: [
            {
              text: "Key Features",
              link: '/docs/features'
            },
            {
              text: "API Documentation",
              link: '/docs/api'
            }
          ]
          
        }
      ]
    },
    nav: [
      {
        text: "Home",
        link: '/'
      },
      { text: "About", 
        link: "about" 
      },
      { text: "Demo", 
        link: "signup" 
      },
      { text: "Features", 
        link: "docs/features" 
      },
      { text: "Contact", 
        link: "mailto://info@qxip.net" 
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/sipcapture',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/company/qxip',
      },
      {
        icon: { svg: `<image src="/qxip_little.png" style="filter: grayscale(1);"/>`},
        mode: 'link',
        content: 'https://qxip.net',
      },
    ],
  },
});
