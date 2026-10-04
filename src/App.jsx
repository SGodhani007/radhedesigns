import React from 'react';
import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, ChevronRight, Clock3, Gem, Menu, MessageCircle, Palette, ShieldCheck, Sparkles, UploadCloud, X } from 'lucide-react';

const WHATSAPP_NUMBER = '917069904307'; // Replace with your WhatsApp number, including country code.
const services = [
  { name: 'Multi Design', price: 'From ₹100', tag: 'MULTI', desc: 'Colourful designs with multiple thread colours.', kind: 'multi' },
  { name: 'Sequence Design', price: 'From ₹250', tag: 'SEQUENCE', desc: 'Elegant sequin patterns for a premium shine.', kind: 'sequence' },
  { name: 'Cording Design', price: 'From ₹250', tag: 'CORDING', desc: 'Raised cord details for rich texture.', kind: 'cording' },
  
  { name: 'Beads Design', price: 'From ₹500', tag: 'BEADS', desc: 'Detailed beadwork for a graceful finish.', kind: 'beads' },
  { name: 'Mix Multi-Cord-Seq', price: 'From ₹250', tag: 'COMBO', desc: 'A unique mix of techniques in one design.', kind: 'combo' },
];
const samples = [
  { name: 'Floral Multi', kind: 'multi' }, { name: 'Gold Sequence', kind: 'sequence' },
  { name: 'Classic Cording', kind: 'cording' }, { name: 'Pearl Beads', kind: 'beads' },
  { name: 'Fusion Motif', kind: 'combo' },
];
function WhatsAppButton({ children = 'Chat on WhatsApp', className = '' }) {
  return <a className={`whatsapp-btn ${className}`} href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17} />{children}<ArrowRight size={15} /></a>;
}
function EmbroideryArt({ kind = 'multi', large = false }) {
  const imageFiles = {
    multi: 'multi.jpg',
    sequence: 'sequence.jpg',
    cording: 'cording.jpg',
    beads: 'beads.jpg',
    combo: 'combo.jpg',
  };

  return (
    <div
      className={`emb-art art-${kind} ${large ? 'art-large' : ''}`}
      role="img"
      aria-label={`${kind} embroidery sample`}
    >
      <img
        src={`/images/${imageFiles[kind] || imageFiles.multi}`}
        alt={`${kind} embroidery design`}
        loading="lazy"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
      />
    </div>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', type: '', budget: '', message: '' });
  const [fileName, setFileName] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const message = `Hello, I want an embroidery design.\nName: ${form.name}\nMobile: ${form.phone}\nDesign Type: ${form.type}\nBudget: ${form.budget || 'Not specified'}\nRequirements: ${form.message || 'Not specified'}${fileName ? `\nReference file: ${fileName}` : ''}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return <>
    <header className="site-header"><nav className="nav container"><a href="#home" className="brand"><span className="brand-mark"><Sparkles size={25}/></span><span><b>Embroidery<span>Designs</span></b><small>Your Design · Our Craft</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}><a onClick={() => setMenuOpen(false)} href="#home">Home</a><a onClick={() => setMenuOpen(false)} href="#services">Our Services</a><a onClick={() => setMenuOpen(false)} href="#gallery">Design Gallery</a><a onClick={() => setMenuOpen(false)} href="#pricing">Pricing</a><a onClick={() => setMenuOpen(false)} href="#about">About Us</a><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></div>
      <WhatsAppButton className="nav-cta">Chat on WhatsApp</WhatsAppButton></nav></header>
    <main>
      <section className="hero" id="home"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><Sparkles size={14}/> Custom Embroidery Design Services</span><h1>Premium Embroidery Designs for Your <em>Creative Projects</em></h1><p>We create high-quality embroidery designs in all types — Multi, Sequence, Cording, Beads and more. Share your idea, and we’ll turn it into a beautiful design!</p><div className="hero-points"><span><Gem/>High Quality<br/>Designs</span><span><Clock3/>Fast<br/>Delivery</span><span><Gem/>Affordable<br/>Pricing</span><span><ShieldCheck/>Customer<br/>Support</span></div><div className="hero-actions"><WhatsAppButton/><a className="outline-btn" href="#gallery">View Our Portfolio <ArrowRight size={16}/></a></div></div><div className="hero-visual"><div className="hero-hoop"><EmbroideryArt kind="combo" large/></div><div className="style-float"><div><EmbroideryArt kind="multi"/><b>Multi</b></div><div><EmbroideryArt kind="sequence"/><b>Sequence</b></div><div><EmbroideryArt kind="cording"/><b>Cording</b></div><div><EmbroideryArt kind="beads"/><b>Beads</b></div></div><span className="hand-note">From your idea<br/>to beautiful stitches ↗</span></div></div></section>
      <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><span className="section-kicker">OUR SERVICES</span><h2>Types of Embroidery Designs</h2><p>Choose from different styles and techniques to make your design stand out.</p></div><a href="#pricing" className="text-link">View Pricing <ArrowRight size={15}/></a></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.kind}><EmbroideryArt kind={s.kind}/><h3>{s.name}</h3><p>{s.desc}</p><div className="service-bottom"><b>{s.price}<small> / design</small></b><a href="#contact" aria-label={`Order ${s.name}`}><ArrowRight size={17}/></a></div></article>)}</div></div></section>
      <section className="section about-section" id="about"><div className="container about-grid"><div className="about-art"><EmbroideryArt kind="multi" large/><span className="about-note">Made with care<br/>and creativity ✦</span></div><div className="about-copy"><span className="section-kicker">WHY CHOOSE US</span><h2>Your Trusted Embroidery Design Partner</h2><p>We combine creativity with attention to detail to help bring your embroidery ideas to life.</p><div className="trust-grid"><div><span><Palette/></span><b>Expert Design</b><small>Carefully crafted artwork</small></div><div><span><Gem/></span><b>Clear Details</b><small>Precise, neat output</small></div><div><span><Clock3/></span><b>Quick Turnaround</b><small>Timely delivery</small></div><div><span><MessageCircle/></span><b>Personal Support</b><small>Here to help you</small></div></div></div></div></section>
      <section className="section process-section"><div className="container"><div className="center-heading"><span className="section-kicker">HOW IT WORKS</span><h2>Simple 4 Steps to Get Your Design</h2><p>Share your idea, confirm the details, and get your custom design.</p></div><div className="steps">{[{n:'01',title:'Fill the Form',desc:'Share your details and design requirements.',icon:UploadCloud},{n:'02',title:'Chat on WhatsApp',desc:'We’ll contact you to confirm the details.',icon:MessageCircle},{n:'03',title:'Design & Review',desc:'We prepare your design and share it for review.',icon:Palette},{n:'04',title:'Get Your Design',desc:'After confirmation, receive your final files.',icon:CheckCircle2}].map((s,i)=><div className="step" key={s.n}><div className="step-icon"><s.icon size={24}/></div><div className="step-title"><span>{s.n}</span><b>{s.title}</b></div><p>{s.desc}</p>{i<3&&<ArrowRight className="step-arrow" size={19}/>}</div>)}</div></div></section>
      <section className="section gallery-section" id="gallery"><div className="container"><div className="section-heading"><div><span className="section-kicker">OUR GALLERY</span><h2>A Glimpse of Our Designs</h2><p>Explore a few embroidery style examples.</p></div><a href="#contact" className="text-link">Request a Design <ArrowRight size={15}/></a></div><div className="gallery-grid">{samples.map(s=><article className="gallery-card" key={s.name}><EmbroideryArt kind={s.kind}/><span>{s.name}</span></article>)}</div></div></section>
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="center-heading">
            <span className="section-kicker">OUR PRICING</span>
            <h2>Embroidery Design Price List</h2>
            <p>Choose a design style and garment type to view the starting price.</p>
          </div>

          <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '18px' }}>
            {[
              {
                title: 'Only Multi Design',
                kind: 'multi',
                items: [
                  ['Sarees', 500],
                  ['Lehenga / Dupatta / Blouse', 700],
                  ['Sarara Pair (3-Piece)', 500],
                  ['Neck', 200],
                  ['Logo (according to stitches)', 100],
                  ['All Over', 300],
                ],
              },
              {
                title: 'Only Sequence Multi',
                kind: 'sequence',
                items: [
                  ['Sarees', 700],
                  ['Lehenga / Dupatta / Blouse', 900],
                  ['Sarara Pair (3-Piece)', 800],
                  ['Neck', 250],
                  ['Logo', 150],
                  ['All Over', 400],
                ],
              },
              {
                title: 'Only Cording',
                kind: 'cording',
                items: [
                  ['Sarees', 750],
                  ['Lehenga / Dupatta / Blouse', 900],
                  ['Sarara Pair (3-Piece)', 800],
                  ['Neck', 250],
                  ['Logo', 150],
                  ['All Over', 400],
                ],
              },
              {
                title: 'Mix Multi-Cord-Seq',
                kind: 'combo',
                items: [
                  ['Sarees', 900],
                  ['Lehenga / Dupatta / Blouse', 1000],
                  ['Sarara Pair (3-Piece)', 900],
                  ['Neck', 250],
                  ['All Over', 500],
                ],
              },
              {
                title: 'Beads',
                kind: 'beads',
                items: [
                  ['Sarees', 1500],
                  ['Lehenga / Dupatta / Blouse', 1500],
                  ['Sarara Pair (3-Piece)', 1200],
                  ['Neck', 500],
                  ['All Over', 500],
                ],
              },
              {
                title: 'Chain Stitch',
                kind: 'multi',
                items: [
                  ['Sarees', 500],
                  ['Lehenga / Dupatta / Blouse', 700],
                  ['Sarara Pair (3-Piece)', 500],
                  ['Neck', 200],
                  ['Logo (according to stitches)', 100],
                  ['All Over', 300],
                ],
              },
            ].map((category) => (
              <article
                className="price-card"
                key={category.title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  gap: '12px',
                  padding: '18px',
                  borderRadius: '14px',
                  background: '#fff',
                  border: '1px solid #e2ece8',
                  boxShadow: '0 5px 18px rgba(20, 60, 50, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className={`mini-art art-${category.kind}`} style={{ flexShrink: 0 }}><i /></span>
                  <h3 style={{ margin: 0, fontSize: '16px', color: '#172b3d' }}>{category.title}</h3>
                </div>
                <div style={{ display: 'grid', gap: '9px' }}>
                  {category.items.map(([label, price]) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '10px',
                        paddingBottom: '8px',
                        borderBottom: '1px solid #edf2f0',
                        fontSize: '13px',
                      }}
                    >
                      <span style={{ color: '#526579', lineHeight: 1.4 }}>{label}</span>
                      <strong style={{ color: '#008568', whiteSpace: 'nowrap' }}>₹{price}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="price-note" style={{ marginTop: '18px', lineHeight: 1.6 }}>
            The listed prices are reference rates. Pricing increases for a 9-needle machine and decreases for machines with fewer needles. Logo pricing depends on stitch count. Final pricing may also vary with design size and complexity; please confirm the final quote on WhatsApp.
          </p>
        </div>
      </section>
      <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><span className="section-kicker">GET IN TOUCH</span><h2>Have a Design in Mind?</h2><p>Tell us what you need. Fill out the form and send your inquiry directly to WhatsApp.</p><div className="contact-perks"><span><Check/>Quick response</span><span><Check/>Direct WhatsApp chat</span><span><Check/>Share reference images</span></div></div><form className="inquiry-form" onSubmit={submit}><h3>Send Your Inquiry</h3><div className="form-grid"><label>Your Name *<input name="name" value={form.name} onChange={update} placeholder="Enter your name" required/></label><label>Mobile Number *<input name="phone" value={form.phone} onChange={update} placeholder="Enter mobile number" inputMode="tel" required/></label><label>Design Type *<select name="type" value={form.type} onChange={update} required><option value="">Select design type</option>{services.map(s => (<option key={s.kind} value={s.name}>{s.name}</option>))}</select></label><label>Approx. Budget<select name="budget" value={form.budget} onChange={update}><option value="">Select budget</option><option>Under ₹200</option><option>₹200–₹500</option><option>₹500–₹1,000</option><option>Above ₹1,000</option></select></label><label className="full-field">Message / Requirements<textarea name="message" value={form.message} onChange={update} placeholder="Tell us about size, fabric, colours or other requirements..." rows="3"/></label><label className="upload-field full-field"><UploadCloud size={18}/><span>{fileName || 'Choose a reference image (optional)'}</span><input type="file" accept="image/*" onChange={e=>setFileName(e.target.files?.[0]?.name || '')}/></label><button type="submit" className="whatsapp-btn submit-btn"><MessageCircle size={17}/>Send Inquiry on WhatsApp<ArrowRight size={15}/></button></div><small className="form-note"><ShieldCheck size={13}/> Your details will be included in your WhatsApp message.</small></form></div></section>
    </main><footer className="footer"><div className="container footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-mark"><Sparkles size={23}/></span><span><b>Embroidery<span>Designs</span></b><small>Your Design · Our Craft</small></span></a><div className="footer-links"><a href="#home">Home</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div><WhatsAppButton>Chat with us</WhatsAppButton></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} EmbroideryDesigns. All rights reserved.</span><span>Multi · Sequence · Cording · Beads</span></div></footer>
  </>;
}
export default App;
