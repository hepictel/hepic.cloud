import { defineConfig } from 'rspress/config';
import  path from 'path'

export default defineConfig({
  root: 'docs',
  base: '/hepic.cloud/',
    title: 'hepic.cloud',
  icon: "/hepic_cloud_logo.png",
  logo: {
    light: "/hepic_cloud_logo.svg",
    dark: "/hepic_cloud_logo.svg",
  },
  description: 'hepic.cloud: telecom observability',
  
  globalStyles: path.join(__dirname, 'styles/index.css'),
  themeConfig: {  
    darkMode: true,
    sidebar: {
      '/docs/docs/':[
        {
          text: "Documentation",
          items: [
            {
              text: "Get Started",
              link: '/docs'
            },
            {
              text: "Explore Data",
              link: '/docs/demo'
            },
            {
              text: "API Endpoints",
              link: '/docs/api'
            }
          ]
          
        }
      

      ]
    },
    nav: [
      { text: "About", 
        link: "about" 
      },
      { text: "Book Demo", 
        link: "signup" 
      },
      { text: "Blog", 
        link: "https://blog.qryn.dev" 
      },
      { text: "Contact", 
        link: "mailto://info@qxip.net" 
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/qxip',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/company/qxip',
      },
      {
        icon: { svg: `<image src="https://raw.githubusercontent.com/gigapipehq/homepage/refs/heads/main/docs/public/qryn.png" style="filter: grayscale(1);"/>`},
        mode: 'link',
        content: 'https://blog.qryn.dev',
      },
    ],
  },
});
