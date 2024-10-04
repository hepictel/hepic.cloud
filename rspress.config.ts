import { defineConfig } from 'rspress/config';
import  path from 'path'

export default defineConfig({
  root: 'docs',
  base: '/hepic.cloud/',
    title: 'hepic.cloud',
  icon: "/hepic_cloud_logo.png",
  logo: {
    light: "/hepic_logo.svg",
    dark: "/hepic_logo.svg",
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
              text: "Core Features",
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
      { text: "About", 
        link: "about" 
      },
      { text: "Book Demo", 
        link: "signup" 
      },
      { text: "Documentation", 
        link: "docs" 
      },
      { text: "Company", 
        link: "https://qxip.net" 
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
        icon: { svg: `<image src="https://user-images.githubusercontent.com/1423657/55069501-8348c400-5084-11e9-9931-fefe0f9874a7.png" style="filter: grayscale(1);"/>`},
        mode: 'link',
        content: 'https://sipcapture.org',
      },
    ],
  },
});
