import {useEffect,useRef,useState} from 'react';
import {animate,useInView,useReducedMotion} from 'framer-motion';
import {Link} from 'wouter';
import {statistics} from '../content/company';
import {services,type Service} from '../content/services';
import {leadership,type TeamMember} from '../content/team';
import {logoAssets,serviceImages,serviceImageAlts} from '../content/site';
import {Reveal,SectionHeading,SecondaryButton} from './Layout';
function Count({value}:{value:string}){const ref=useRef<HTMLSpanElement>(null);const visible=useInView(ref,{once:true});const reduced=useReducedMotion();const [count,setCount]=useState(reduced?parseInt(value):0);useEffect(()=>{if(!visible)return;if(reduced){setCount(parseInt(value));return}const control=animate(0,parseInt(value),{duration:1.2,onUpdate:v=>setCount(Math.round(v))});return()=>control.stop()},[visible,value,reduced]);return <span ref={ref}>{count}+</span>}
// Tabler Icons (MIT): plane, calendar, shield-check, users; decorative only.
function StatIcon({index}:{index:number}){const paths=[<><path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2-7H6l-2 2H2l2-4-2-4h2l2 2h5L9 3h3z"/></>,<><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M16 3v4M8 3v4M4 11h16M8 15h2M14 15h2"/></>,<><path d="M12 3l8 4v5c0 5-5 8-8 9-3-1-8-4-8-9V7zM9 12l2 2 4-4"/></>,<><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3a4 4 0 0 1 0 8M21 21v-2a4 4 0 0 0-3-3.87"/></>];return <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index]}</svg>}
export function StatStrip(){return <section className="stat-strip" aria-label="Company statistics"><div className="container stat-grid">{statistics.map((s,index)=><div className="stat" key={s.label} data-confirmed={s.confirmed}><StatIcon index={index}/><strong><Count value={s.value}/></strong><p>{s.label}</p>{!s.confirmed&&<small>Pending confirmation</small>}</div>)}</div></section>}
export function ImageTextSection({title,label,children,image='airport.jpg',alt='Aircraft on the apron'}:{title:string;label?:string;children:React.ReactNode;image?:string;alt?:string}){return <section className="section pale"><Reveal className="container split"><div><SectionHeading label={label} title={title}/>{children}</div><div className="image-frame"><img src={`/images/${image}`} alt={alt} loading="lazy"/></div></Reveal></section>}
export function ServiceCard({service,index}:{service:Service;index:number}){return <Link href={`/services/${service.slug}`} className="service-card"><img src={`/images/${serviceImages[index]}`} alt={serviceImageAlts[index]} loading="lazy"/><div><span className="service-number">{service.number}</span><h3>{service.name}</h3><p>{service.purpose}</p><span className="card-link">EXPLORE SERVICE <span>↗</span></span></div></Link>}
export function ServiceFeature({service,index}:{service:Service;index:number}){return <Reveal className={`service-feature ${index%2?'reverse':''} ${index===3?'featured-service':''}`}><img src={`/images/${serviceImages[index]}`} alt={serviceImageAlts[index]} loading="lazy"/><div><span className="service-number">{service.number} / TECHNICAL SERVICES</span><h2>{service.name}</h2><p>{service.purpose}</p><ul className="capability-list">{service.contentAreas.map(a=><li key={a}>{a}</li>)}</ul><SecondaryButton href={`/services/${service.slug}`}>LEARN MORE</SecondaryButton></div></Reveal>}
export function ServicesGrid(){return <div className="service-grid">{services.map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div>}
export function TeamCard({member,onOpen}:{member:TeamMember;onOpen:()=>void}){return <button className="team-card" onClick={onOpen} aria-label={`View profile of ${member.name}`}><img className="team-portrait" src={member.photo} alt={`${member.name}, ${member.position}`} loading="lazy" width="555" height="700"/><div className="team-card-copy"><h3>{member.name}</h3><p>{member.position}</p><span className="card-link">VIEW PROFILE <span aria-hidden="true">→</span></span></div></button>}
export function TeamProfileModal({member,onClose}:{member:TeamMember;onClose:()=>void}) {
  const ref=useRef<HTMLDialogElement>(null);
  useEffect(()=>{
    const dialog=ref.current;
    const previous=document.activeElement as HTMLElement|null;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    dialog?.showModal();
    return()=>{
      dialog?.close();
      document.body.style.overflow=previousOverflow;
      previous?.focus({preventScroll:true});
    };
  },[]);
  return <dialog ref={ref} className="profile-modal" onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget){const bounds=e.currentTarget.getBoundingClientRect();if(e.clientX<bounds.left||e.clientX>bounds.right||e.clientY<bounds.top||e.clientY>bounds.bottom)onClose()}}} aria-labelledby="profile-name">
    <header className="profile-modal-header"><button className="modal-close" onClick={onClose} aria-label="Close profile" autoFocus>✕</button></header>
    <div className="profile-modal-content">
      <img className="profile-portrait" src={member.photo} alt={`${member.name}, ${member.position}`} width="555" height="700"/>
      <div className="profile-identity"><h2 id="profile-name">{member.name}</h2><p className="role">{member.position}</p><p className="nickname">“{member.nickname}”</p></div>
      <div className="profile-biography">{member.bio.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{member.expertise&&<><h3>AREAS OF EXPERTISE</h3><ul className="capability-list">{member.expertise.map(e=><li key={e}>{e}</li>)}</ul></>}</div>
    </div>
  </dialog>;
}
export function TeamGrid(){const [selected,setSelected]=useState<TeamMember|null>(null);return <><div className="team-grid">{leadership.map(m=><TeamCard member={m} key={m.name} onOpen={()=>setSelected(m)}/>)}</div>{selected&&<TeamProfileModal member={selected} onClose={()=>setSelected(null)}/>}</>}
export function LogoGrid({names,className=''}:{names:string[];className?:string}){return <div className={`logo-grid ${className}`}>{names.map(n=><div key={n} className="logo-cell">{logoAssets[n]?<img src={`/images/${logoAssets[n]}.webp`} alt={n} loading="eager"/>:<span>{n}</span>}</div>)}</div>}
export function LogoCarousel({names}:{names:string[]}){return <LogoGrid names={names}/>}
export function ValueCard({title,body,index}:{title:string;body:string;index:number}){return <article className="value-card"><span className="value-index">{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{body}</p></article>}
export function TestimonialCard({quote,name}:{quote:string;name:string}){return <figure className="testimonial"><blockquote>{quote}</blockquote><figcaption>{name}</figcaption></figure>}
