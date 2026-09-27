export const pageCopy = {
 home: {label:'WINGBOX AVIATION INC.', title:'MOVING TOWARD EXCELLENCE', description:'Aircraft Check Management, Technical Advisory, and CAMO Services'},
 about: {label:'ABOUT US',title:'AVIATION EXPERTISE BUILT AROUND EXPERIENCE',description:'Engineering insight. Client-focused service. A commitment to excellence since 2014.'},
 services: {label:'AVIATION TECHNICAL SERVICES',title:'EXPERTISE THROUGHOUT THE AIRCRAFT LIFECYCLE',description:'Technical advisory, management, training, records, inspection, audit, and aircraft transition support.'},
 team: {label:'OUR TEAM',title:'EXPERIENCE BEHIND EVERY TECHNICAL DECISION',description:'Meet the leadership of Wingbox Aviation.'},
 clients: {label:'OUR CLIENTS & PARTNERS',title:'CONNECTED ACROSS THE AVIATION INDUSTRY',description:'Working with airlines, aircraft owners and lessors, aviation service providers, industry organizations, and academic institutions.'},
 contact: {label:'CONTACT US',title:"LET’S TALK AVIATION",description:'Tell us about your aircraft, fleet, or technical requirement.'},
};
export const sectionCopy = {
 aboutTitle:'YOUR TRUSTED PARTNER IN AVIATION EXCELLENCE', servicesTitle:'COMPREHENSIVE AVIATION SOLUTIONS',
 servicesIntro:'From technical advisory to aircraft lifecycle support, Wingbox provides expertise and flexibility for aviation operators, owners, and partners.',
 teamTitle:'MEET THE EXPERTS', clientsTitle:'TRUSTED ACROSS THE AVIATION INDUSTRY', advantageTitle:'THE WINGBOX ADVANTAGE',
 ctaTitle:'READY TO ELEVATE YOUR FLEET OPERATIONS?', ctaBody:"Let’s discuss how Wingbox can support your goals with expertise, integrity, and a commitment to excellence.",
 valueTitle:'PROTECTING THE VALUE OF EVERY AIRCRAFT',valueBody:'Whether an aircraft is owned or leased, maintaining the asset in optimal condition helps preserve its value, support operational reliability, and reduce avoidable costs or penalties during aircraft sale, lease return, or transition.',
 academicTitle:'BUILDING THE NEXT GENERATION OF AVIATION PROFESSIONALS',
};
export const valueDescriptions = ['Integrity guides our advice and the relationships we build.','Technical rigor supports informed aviation decisions.','Clear responsibilities and transparent communication underpin our work.','Mutual trust and respect form the foundation of long-term relationships.'];
export const aircraftValueFlow = ['Technical condition','Compliance','Records','Aircraft value','Successful transition'];
export const serviceImages = ['advisory.webp','airport.jpg','airport.jpg','aircraft.jpg','advisory.webp','airport.jpg','aircraft.jpg'];
export const logoAssets: Record<string,string> = {
 'Cebu Pacific':'cebu-pacific','AirAsia':'airasia','Philippine Airlines':'philippine-airlines','Air Niugini':'air-niugini',
 'BBAM / Carlyle Aviation Partners':'bbam-carlyle','Castlelake':'castlelake','NAC':'nac','CALC':'calc','Eirtech Aviation Services':'eirtech','Dviation':'dviation','Jet Midwest':'jet-midwest','DP Aviation Services':'dp','Aerobox Aviation Material Solutions Inc.':'aerobox','CGA Aero':'cga','ASBAA':'asbaa','ECCP':'eccp','Canopy Innovative System Inc.':'canopy',
};
export const formFields = [
 {name:'fullName',label:'Full name',required:true}, {name:'company',label:'Company',required:true},
 {name:'position',label:'Position'}, {name:'email',label:'Email',required:true,type:'email'},
 {name:'phone',label:'Phone',type:'tel'}, {name:'service',label:'Service of interest',required:true},
 {name:'fleet',label:'Aircraft / fleet information'}, {name:'message',label:'Message',required:true},
] as const;
