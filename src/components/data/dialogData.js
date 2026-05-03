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
    description: `Originally conceived with a focus on UI/UX, this project was fully re-engineered into a robust enterprise-grade orchestration platform. As the lead Full-Stack Developer, I transitioned the architecture to NestJS, implementing a modular and highly scalable backend capable of handling complex organizational data structures across multiple divisions.

  Real-time event streaming was integrated using Kafka to manage high-frequency data streams, ensuring inter-departmental communications and status updates occur with sub-second latency. I designed the message schemas and topic strategies to minimize duplication and guarantee eventual consistency across services.

  On the frontend, I developed a reactive, high-performance user interface using the Quasar Framework. The UI maintains a single codebase across devices while providing advanced dashboards, role-based views, and data-heavy components optimized for large datasets.

  To reduce manual operational overhead, I implemented workflow automation using n8n to orchestrate cross-service tasks—handling scheduled reports, document generation, and async notifications—bridging the gap between internal microservices and external integrations.`,
    spline:
      'https://my.spline.design/bctechcopy-b6f908cc57317a2e71b249c7e3feffb0/',
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
    description: `A comprehensive supply chain solution tracking the end-to-end lifecycle of procurement transactions. I implemented the core logic for Purchase Orders (PO), Request Time Delivery (RTD), and Goods In Transit (GIT), designing the data flows to preserve auditability and transactional integrity at every transition point.

  Logistics and documentation were automated, including KOLI (packaging unit) management and the generation of Surat Jalan (shipping manifests). I engineered the BPB (Bukti Penerimaan Barang) and invoicing flows so the system accurately generates OA invoices for shipping costs and AP invoices for supplier payments while supporting partial deliveries and returns.

  For performance and responsiveness, I integrated Redis for state caching and session handling, and used Vuetify to craft a clean, data-dense dashboard tailored for supplier efficiency. Background workflows and cross-system automations were handled via n8n to ensure reliable, auditable task execution across services.`,
    spline:
      'https://my.spline.design/bctechcopy-b6f908cc57317a2e71b249c7e3feffb0/',
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
    description: `A digital transformation platform for poultry feed procurement, engineered to replace manual factory workflows and integrate tightly with SAP Web Services for real-time stock, order, and delivery synchronization. I designed and implemented the bridge that syncs front-end orders with SAP, ensuring accurate Sales Order (SO) and Delivery Order (DO) lifecycle transitions.

  The system replaces paper-based processes with an automated 'one-click' pipeline, converting raw orders into production-ready transactions and coordinating downstream logistics. I built advanced logic for truck assignment and expedition scheduling, and integrated GPS-based tracking tied into a mobile app for drivers to provide real-time location and status updates.

  To ensure reliability under factory load, Redis is used for order queuing and to prevent timeouts during peak periods. Security is enforced through a granular Role-Based Access Control (RBAC) model covering Customers, Sales, and Admins, and complex retry/reconciliation logic handles intermittent SAP connectivity.`,
    spline:
      'https://my.spline.design/bctechcopy-b6f908cc57317a2e71b249c7e3feffb0/',
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
