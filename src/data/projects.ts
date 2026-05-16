
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  features: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: 'enterprise-microservice-platform',
    title: 'Enterprise Microservice Platform',
    category: 'Backend',
    description: 'A scalable multi-service architecture for managing job talent networks with an API Gateway.',
    longDescription: 'This project involved architecting a highly scalable microservice ecosystem designed to handle complex talent management workflows. The system leverages an API Gateway to route requests, manage authentication, and enforce rate limits across various services.',
    tags: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    link: '#',
    github: '#',
    features: [
      'Centralized API Gateway with rate limiting',
      'Dedicated Auth Service with JWT/RBAC',
      'Event-driven Notification Engine',
      'Dockerized deployment for environment parity'
    ],
    challenge: 'Managing data consistency across multiple services while ensuring low latency and high availability.',
    solution: 'Implemented distributed tracing with OpenTelemetry and used Redis for high-speed caching and inter-service state management.'
  },
  {
    id: 'dynamic-booking-backend',
    title: 'Dynamic Booking Backend',
    category: 'Backend',
    description: 'High-concurrency hospitality systems featuring complex transaction workflows and JWT security.',
    longDescription: 'A robust backend system built for a global hospitality group. It handles real-time availability checks, multi-currency payments, and automated confirmation workflows for thousands of concurrent users.',
    tags: ['Node.js', 'PostgreSQL', 'Prisma', 'JWT', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop',
    link: '#',
    github: '#',
    features: [
      'Atomic transaction management with Prisma',
      'Secure payment processing with Stripe integration',
      'Automated email/SMS confirmation workflow',
      'Comprehensive admin audit logs'
    ],
    challenge: 'Preventing double-bookings during peak seasonal traffic spikes.',
    solution: 'Utilized PostgreSQL advisory locks and optimized database indexes to handle high-concurrency reservation attempts safely.'
  },
  {
    id: 'revenue-analytics-engine',
    title: 'Revenue Analytics Engine',
    category: 'Full Stack',
    description: 'Financial tracking backend with real-time data aggregation and deep analytics API endpoints.',
    longDescription: 'A finance-focused platform designed to aggregate revenue streams from various sources. It provides recruiters and managers with real-time insights into performance metrics, forecasting, and historical trends.',
    tags: ['NestJS', 'MongoDB', 'Mongoose', 'D3', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    link: '#',
    github: '#',
    features: [
      'Real-time data aggregation pipeline',
      'Interactive D3.js visualization dashboards',
      'Hierarchical Role-Based Access Control',
      'Automated PDF reporting system'
    ],
    challenge: 'Processing and aggregating large datasets of financial records in real-time without blocking the main event loop.',
    solution: 'Implemented MongoDB aggregation pipelines and utilized Node.js worker threads for CPU-intensive data analysis tasks.'
  },
  {
    id: 'scalability-first-ecommerce',
    title: 'Scalability-First E-Commerce',
    category: 'Full Stack',
    description: 'Modern backend architecture for retail featuring headless CMS integration and search optimization.',
    longDescription: 'Developed the core commerce engine for a premium streetwear brand. The project focused on extreme performance, SEO optimization, and a seamless developer experience through a headless architecture.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Framer', 'Redis'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
    link: '#',
    github: '#',
    features: [
      'Headless CMS integration for dynamic content',
      'Global CDN caching with Redis',
      'Elasticsearch powered product filtering',
      'Dynamic image optimization pipeline'
    ],
    challenge: 'Achieving sub-second page loads for product pages with complex custom attributes.',
    solution: 'Implemented aggressive edge-caching strategies and optimized GraphQL query resolution patterns.'
  }
];
