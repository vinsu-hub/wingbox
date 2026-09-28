/** Leadership portraits and biographies supplied by Wingbox, September 2026. */
export interface TeamMember {
  name: string;
  nickname: string;
  position: string;
  bio: string[];
  expertise?: string[];
  photoAvailable: boolean;
  photo: string;
}
export const leadership: TeamMember[] = [
  {
    name: 'ENGR. DARMILO L. SOSA', nickname: 'Dar', position: 'CEO / MANAGING DIRECTOR',
    photoAvailable: true, photo: '/images/team/sosa.webp',
    bio: ['Dar brings 22 years of experience in aircraft leasing, technical consultancy, engineering and fleet management across airlines, MROs and aviation consultancy. He graduated in Aircraft Maintenance Technology at Philippine State College of Aeronautics and earned his BS in Aeronautical Engineering at PATTS College of Aeronautics. He worked as a Technical Service Engineer / Quality Engineer at Southeast Asian Airlines; two years later, he started his own aircraft servicing business and became General Manager of ASTECH Aviation.',
      'He joined Singapore Airlines Engineering Company’s Fleet Management Program in 2007. In 2009, he returned to the Philippines as Head of Engineering at Zest Airways, then became Manager of Engineering at AirAsia Philippines. In 2012, he began working in aircraft leasing as a Technical Consultant for ILFC, continuing with AerCap. He has since worked with lessors including AerCap, VX Capital and SGI Aviation, specializing in aircraft deliveries and returns.',
      'He founded Wingbox Aviation in 2014, where he serves as CEO and Managing Director. He completed his Executive MBA at the Asian Institute of Management in December 2024. He is also Chairman of Canopy Innovative System Inc. and Aerobox Material Solution, and serves on the Board of Governors of the Asian Business Aviation Association (AsBAA).'],
    expertise: ['Aircraft leasing', 'Technical consultancy', 'Engineering', 'Fleet management', 'Airline technical services', 'Aircraft deliveries and returns', 'Aviation consultancy'],
  },
  {
    name: 'ENGR. ENRICO CONDINO', nickname: 'Rico', position: 'CHIEF OPERATING OFFICER',
    photoAvailable: true, photo: '/images/team/condino.webp',
    bio: ['Rico has 21 years of experience in aviation, spanning airlines, MROs and OEM material management.',
      'His work covers maintenance and engineering, maintenance planning, technical records, technical services, base maintenance, production control, supply chain, and project management for aircraft delivery and re-delivery. Before Wingbox, he worked with South East Asian Airline, SIA Engineering Co., Boeing IMM, SIA Engineering Philippines and Bassaka Air.'],
    expertise: ['Maintenance and engineering', 'Maintenance planning', 'Technical records', 'Supply chain', 'Aircraft delivery and re-delivery'],
  },
  {
    name: 'ENGR. SHEALTIEL URSULUM', nickname: 'Allen', position: 'TECHNICAL DIRECTOR',
    photoAvailable: true, photo: '/images/team/ursulum.webp',
    bio: ['Allen brings 20 years of experience in aviation leasing, consultancy and engineering, technical services, fleet technical management and maintenance planning. He has played key roles at several airlines and leasing companies and holds a degree in Aeronautical Engineering.',
      'He has worked with South East Airline, Zest Airline, AirAsia Philippines, SAE-EADS, FD Aviation and AimFleet Aviation. He currently also serves as Technical Consultant for VX Capital Aircraft Leasing.'],
    expertise: ['Aviation leasing', 'Technical services', 'Fleet technical management', 'Maintenance planning'],
  },
  {
    name: 'ENGR. BILLY JOEL LIQUIDO', nickname: 'Billy', position: 'HEAD OF TRAININGS & SPECIAL PROJECTS',
    photoAvailable: true, photo: '/images/team/liquido.webp',
    bio: ['Billy holds a BS in Aeronautical Engineering from PATTS College of Aeronautics and has 21 years of experience in aviation. He formerly worked at South East Asian Airline, then joined SIA Engineering Company’s Fleet Management Division in Singapore in 2006.',
      'His strengths include planning, scheduling and multitasking. He joined Wingbox as a Consultant in June 2019 and currently also serves as COO of Canopy Innovative System Inc.'],
    expertise: ['Planning', 'Scheduling', 'Fleet management', 'Training and special projects'],
  },
];
