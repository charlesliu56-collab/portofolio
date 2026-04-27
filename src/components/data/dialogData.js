import web from 'src/assets/web-developer.gif';
import quasar from 'src/assets/quasar.png';
import kafka from 'src/assets/kafka.png';
import n8n from 'src/assets/n8n.png';
import nestjs from 'src/assets/nestjs.png';
import redis from 'src/assets/redis.png';
import git from 'src/assets/Git-Icon.png';
import html from 'src/assets/HTML5-Badge.png';

import ecomdiv from 'src/assets/posters/e-comdiv.jpg';
import ecomdiv1 from 'src/assets/ecomdiv/1.png';
import ecomdiv2 from 'src/assets/ecomdiv/2.png';
import ecomdiv3 from 'src/assets/ecomdiv/3.png';
import ecomdiv4 from 'src/assets/ecomdiv/4.png';
import ecomdiv5 from 'src/assets/ecomdiv/5.png';
import ecomdiv6 from 'src/assets/ecomdiv/6.png';
import ecomdiv7 from 'src/assets/ecomdiv/7.png';
import ecomdiv8 from 'src/assets/ecomdiv/8.png';
import ecomdiv9 from 'src/assets/ecomdiv/9.png';
import ecomdiv10 from 'src/assets/ecomdiv/10.png';
import ecomdiv11 from 'src/assets/ecomdiv/11.png';
import ecomdiv12 from 'src/assets/ecomdiv/12.png';
import ecomdiv13 from 'src/assets/ecomdiv/13.png';
import srm1 from 'src/assets/srm/1.png';
import srm2 from 'src/assets/srm/2.png';
import srm3 from 'src/assets/srm/3.png';
import srm4 from 'src/assets/srm/4.png';
import srm5 from 'src/assets/srm/5.png';
import srm6 from 'src/assets/srm/6.png';
import weborder1 from 'src/assets/weborderfeedmill/1.png';
import weborder2 from 'src/assets/weborderfeedmill/2.png';
import weborder3 from 'src/assets/weborderfeedmill/3.png';
import weborder4 from 'src/assets/weborderfeedmill/4.png';
import weborder5 from 'src/assets/weborderfeedmill/5.png';
import weborder6 from 'src/assets/weborderfeedmill/6.png';
import weborder7 from 'src/assets/weborderfeedmill/7.png';

export default [
  {
    id: 1,
    color: '#1976d2',
    background: '#d1e3f6',
    title: 'E-Comdiv',
    role: 'Full-Stack Developer',
    displayImage: ecomdiv,
    company: 'PT Charoen Pokphand Indonesia Tbk',
    platform: 'Web Application',
    platformIcon: web,
    dialogImage: ecomdiv,
    description:
      'An enterprise-level communication and division management hub. Implements NestJS for scalable backend architecture and Quasar for a high-performance frontend. Kafka is utilized for real-time event streaming between divisions, while n8n handles complex workflow automations.',
    spline: '',
    featuresList: [
      { feature: 'Dashboard and master data modules' },
      { feature: 'Purchase Requisition flows and reporting' },
      { feature: 'Real-time event streaming for division sync' },
    ],
    toolsList: [
      { tool: 'NestJS', icon: nestjs, background: '#d1e3f6' },
      { tool: 'Quasar', icon: quasar, background: '#d1e3f6' },
      { tool: 'Kafka', icon: kafka, background: '#d1e3f6' },
      { tool: 'n8n', icon: n8n, background: '#d1e3f6' },
      { tool: 'Git', icon: git, background: '#d1e3f6' },
    ],
    colorPaletteList: [
      { title: 'Primary', hex: '#1976d2', background: '#d1e3f6' },
    ],
    typography: 'Roboto',
    typographySizeList: [
      { title: '34px' },
      { title: '24px' },
      { title: '20px' },
    ],
    typographyWeightList: [{ title: '700' }, { title: '400' }],
    timelinesList: [],
    screenshots: [
      { image: ecomdiv1 },
      { image: ecomdiv2 },
      { image: ecomdiv3 },
      { image: ecomdiv4 },
      { image: ecomdiv5 },
      { image: ecomdiv6 },
      { image: ecomdiv7 },
      { image: ecomdiv8 },
      { image: ecomdiv9 },
      { image: ecomdiv10 },
      { image: ecomdiv11 },
      { image: ecomdiv12 },
      { image: ecomdiv13 },
    ],
    informationsList: [
      {
        icon: 'calendar_month',
        title: 'Release Date',
        description: 'March 2024',
      },
      {
        icon: 'category',
        title: 'Category',
        description: 'Procurement / Division Management',
      },
    ],
  },

  {
    id: 2,
    color: '#5c6bc0',
    background: '#e9edfb',
    title: 'SRM (Supplier Relationship Management)',
    role: 'Full-Stack Developer',
    displayImage: srm1,
    company: 'PT Charoen Pokphand Indonesia Tbk',
    platform: 'Web Application',
    platformIcon: web,
    dialogImage: srm1,
    description:
      'A comprehensive procurement ecosystem managing the flow from Purchase Order to Invoicing. Features RTD, GIT, and KOLI/Surat Jalan. Uses Redis for caching, and n8n to automate document triggers and notifications.',
    spline: '',
    featuresList: [
      { feature: 'PO to Invoice workflow' },
      { feature: 'RTD / GIT modules and reports' },
      { feature: 'Logistics document automation' },
    ],
    toolsList: [
      { tool: 'HTML', icon: html, background: '#e9edfb' },
      { tool: 'Quasar', icon: quasar, background: '#e9edfb' },
      { tool: 'Redis', icon: redis, background: '#e9edfb' },
      { tool: 'n8n', icon: n8n, background: '#e9edfb' },
    ],
    colorPaletteList: [
      { title: 'Primary', hex: '#5c6bc0', background: '#e9edfb' },
    ],
    typography: 'Roboto',
    typographySizeList: [{ title: '24px' }, { title: '16px' }],
    typographyWeightList: [{ title: '700' }, { title: '400' }],
    timelinesList: [],
    screenshots: [
      { image: srm1 },
      { image: srm2 },
      { image: srm3 },
      { image: srm4 },
      { image: srm5 },
      { image: srm6 },
    ],
    informationsList: [
      { icon: 'calendar_month', title: 'Release Date', description: '2023' },
      { icon: 'category', title: 'Category', description: 'Procurement' },
    ],
  },

  {
    id: 3,
    color: '#009688',
    background: '#e6f6f3',
    title: 'WebOrder Feedmill',
    role: 'Full-Stack Developer',
    displayImage: weborder1,
    company: 'Internal B2B',
    platform: 'Web Application',
    platformIcon: web,
    dialogImage: weborder1,
    description:
      'A B2B ordering platform digitalizing poultry feed procurement. Bridges front-end orders to SAP Web Services for real-time stock and SO/DO sync. Uses Redis for order queuing and n8n for automated backend processing.',
    spline: '',
    featuresList: [
      { feature: 'Order sync with SAP' },
      { feature: 'Queueing with Redis' },
      { feature: 'n8n workflow automation' },
    ],
    toolsList: [
      { tool: 'HTML', icon: html, background: '#e6f6f3' },
      { tool: 'Redis', icon: redis, background: '#e6f6f3' },
      { tool: 'n8n', icon: n8n, background: '#e6f6f3' },
    ],
    colorPaletteList: [
      { title: 'Primary', hex: '#009688', background: '#e6f6f3' },
    ],
    typography: 'Roboto',
    typographySizeList: [{ title: '24px' }, { title: '16px' }],
    typographyWeightList: [{ title: '700' }, { title: '400' }],
    timelinesList: [],
    screenshots: [
      { image: weborder1 },
      { image: weborder2 },
      { image: weborder3 },
      { image: weborder4 },
      { image: weborder5 },
      { image: weborder6 },
      { image: weborder7 },
    ],
    informationsList: [
      { icon: 'calendar_month', title: 'Release Date', description: '2022' },
      { icon: 'category', title: 'Category', description: 'B2B Ordering' },
    ],
  },
];
