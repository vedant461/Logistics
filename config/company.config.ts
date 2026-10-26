export const companyConfig = {
  name: 'Kaveri Freight & Logistics',
  shortName: 'Kaveri Freight',
  tagline: 'Freight that knows its way.',
  descriptor: 'Road, air, ocean and warehouse operations from Peenya to the ports.',
  logo: { mark: 'K', wordmark: 'KAVERI / FREIGHT' },
  colors: { ink: '#182126', paper: '#F4F0E8', signal: '#F26B38', cyan: '#64B9C5' },
  contact: { phone: '+91 80 4123 7788', whatsapp: '+919845012340', email: 'move@kaverifreight.in', address: 'Plot 42, 2nd Phase, Peenya Industrial Area, Bengaluru 560058' },
  stats: [{ value: '18', label: 'operational hubs' }, { value: '420', label: 'shipments / day' }, { value: '97.8%', label: 'on-time handoffs' }],
  hubs: ['Peenya', 'Whitefield', 'Electronic City', 'Nelamangala', 'Chennai ICD', 'Mangalore Port'],
  pincodes: ['560058', '560066', '560100', '560001', '600001', '575001'],
  services: [
    { key: 'road', name: 'Road freight', eyebrow: '01 / dependable ground', detail: 'FTL and LTL lanes linking Bengaluru factories, depots and the southern corridor.', metric: 'Same-day city / 1–3 day regional' },
    { key: 'air', name: 'Air cargo', eyebrow: '02 / when timing moves first', detail: 'Airport handoffs, priority documents and high-value cargo with named checkpoints.', metric: 'Next-flight priority' },
    { key: 'ocean', name: 'Ocean freight', eyebrow: '03 / port to plant', detail: 'Container movement through Chennai and Mangalore with a clear customs handoff trail.', metric: 'FCL / LCL coordination' },
    { key: 'warehouse', name: 'Warehousing', eyebrow: '04 / stock with a pulse', detail: 'Short- and long-term storage, pick-pack discipline and dispatch windows that hold.', metric: 'Peenya + Nelamangala' },
    { key: 'cold', name: 'Cold chain', eyebrow: '05 / temperature accounted for', detail: 'Lane plans and exception calls for sensitive cargo that cannot wait on a dock.', metric: '2°–8°C monitored lanes' },
    { key: 'lastmile', name: 'Last-mile', eyebrow: '06 / the final promise', detail: 'Scheduled delivery across Bengaluru sub-zones with proof at the doorstep.', metric: 'Slot-based delivery' },
  ],
  fleet: [
    { name: '3-wheeler', capacity: '500 kg', dimensions: '6 × 4 × 4 ft', bestFor: 'Tight city lanes' },
    { name: 'Tata Ace', capacity: '750 kg', dimensions: '7 × 5 × 5 ft', bestFor: 'Retail replenishment' },
    { name: '14 ft Eicher', capacity: '4.5 t', dimensions: '14 × 7 × 7 ft', bestFor: 'Factory-to-hub work' },
    { name: '20 / 32 ft container', capacity: '18–28 t', dimensions: 'Standard ISO', bestFor: 'Port-bound cargo' },
  ],
  certifications: ['ISO 9001:2015', 'IATA partner', 'FIATA member', 'GSTIN 29AABCK4210M1ZP'],
} as const;

export type ServiceKey = (typeof companyConfig.services)[number]['key'];
