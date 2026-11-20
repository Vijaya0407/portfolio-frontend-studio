import { useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryMedium,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleHelp,
  Copy,
  FileText,
  Flower2,
  FolderOpen,
  GraduationCap,
  Home,
  Layers,
  Mail,
  MapPin,
  Minus,
  Monitor,
  Palette,
  Phone,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Sprout,
  Square,
  Type,
  Wifi,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  certifications,
  education,
  experience,
  portfolioProjects,
  profile,
  skillGroups,
} from "@/lib/portfolio-content";

type AppId = "projects" | "lab" | "journey" | "skills" | "resume" | "contact";
type LabTab = "palette" | "type" | "components";
type PreviewSize = "desktop" | "tablet" | "mobile";

const appItems = [
  { id: "projects", name: "My Projects", subtitle: "3 case studies", Icon: FolderOpen, tone: "lilac" },
  { id: "lab", name: "Design Lab", subtitle: "Try it out", Icon: Sparkles, tone: "blue" },
  { id: "journey", name: "My Journey", subtitle: "Experience & study", Icon: Flower2, tone: "pink" },
  { id: "skills", name: "Skills", subtitle: "My toolkit", Icon: Layers, tone: "green" },
  { id: "resume", name: "Resume", subtitle: "View & print", Icon: FileText, tone: "peach" },
  { id: "contact", name: "Contact", subtitle: "Let’s connect", Icon: Mail, tone: "lavender" },
] satisfies Array<{
  id: AppId;
  name: string;
  subtitle: string;
  Icon: LucideIcon;
  tone: string;
}>;

const paletteOptions = [
  { id: "violet", name: "Soft violet" },
  { id: "blue", name: "Periwinkle" },
  { id: "green", name: "Garden green" },
  { id: "coral", name: "Warm coral" },
] as const;

const labTabs: Array<{ id: LabTab; label: string; Icon: LucideIcon }> = [
  { id: "palette", label: "Color", Icon: Palette },
  { id: "type", label: "Type", Icon: Type },
  { id: "components", label: "Components", Icon: Layers },
];

function getAppName(id: AppId) {
  return appItems.find((app) => app.id === id)?.name ?? "Workspace";
}

function ProjectArtwork({ project, galleryIndex }: { project: (typeof portfolioProjects)[number]; galleryIndex: number }) {
  return (
    <div className={`project-artwork ${project.artClass} gallery-view-${galleryIndex}`}>
      <div className="artwork-glow" aria-hidden="true" />
      <div className="artwork-caption">
        <span>PROJECT PREVIEW</span>
        <span>0{galleryIndex + 1} / 03</span>
      </div>
      <div className="artwork-desktop-card" aria-hidden="true">
        <div className="mock-window-top"><span /><span /><span /><i /></div>
        <div className="mock-layout">
          <div className="mock-side"><span /><span /><span /><span /></div>
          <div className="mock-main">
            <div className="mock-overline">{project.focus}</div>
            <div className="mock-title-line" />
            <div className="mock-subtitle-line" />
            <div className="mock-content-row">
              <div className="mock-chart"><span /><span /><span /><span /><span /></div>
              <div className="mock-info"><i /><i /><i /></div>
            </div>
            <div className="mock-action-line" />
          </div>
        </div>
      </div>
      <div className="artwork-phone" aria-hidden="true">
        <div className="phone-topline"><span>9:41</span><span>•••</span></div>
        <div className="phone-brand">
          {project.id === "verisight" ? <ShieldCheck /> : project.id === "plantiva" ? <Sprout /> : <ShoppingBasket />}
          <span>{project.name}</span>
        </div>
        {project.id === "verisight" ? (
          <div className="phone-verification">
            <span className="phone-welcome">Good morning</span>
            <strong>Verify with clarity.</strong>
            <div className="verify-card"><ShieldCheck /><span><b>Identity check</b><small>Ready to review</small></span><ChevronRight /></div>
            <div className="verify-card"><span className="verify-dot" /><span><b>Recent activity</b><small>View your requests</small></span><ChevronRight /></div>
          </div>
        ) : project.id === "plantiva" ? (
          <div className="phone-plantiva">
            <span className="phone-welcome">A little more green</span>
            <strong>Find your next<br />favorite leaf.</strong>
            <div className="plant-picture"><Sprout /><span /></div>
            <small>Plants for your space</small>
          </div>
        ) : (
          <div className="phone-freshcart">
            <span className="phone-welcome">Good food, closer</span>
            <strong>Fresh picks<br />for your table.</strong>
            <div className="freshcart-items"><i /><i /><i /></div>
            <div className="freshcart-bottom"><span>Browse groceries</span><ArrowRight /></div>
          </div>
        )}
      </div>
      <div className="artwork-note"><span className="artwork-note-icon"><Sparkles /></span><span><b>Thoughtful by design</b><small>Interface concept</small></span></div>
    </div>
  );
}

function ProjectStudio({
  selectedProjectId,
  onSelectProject,
  galleryIndex,
  onSelectGallery,
}: {
  selectedProjectId: string;
  onSelectProject: (id: string) => void;
  galleryIndex: number;
  onSelectGallery: (index: number) => void;
}) {
  const project = portfolioProjects.find((item) => item.id === selectedProjectId) ?? portfolioProjects[0];

  return (
    <div className="projects-layout">
      <aside className="project-sidebar">
        <div className="app-section-heading">
          <span className="eyebrow">SELECTED WORK</span>
          <span className="project-count">03</span>
        </div>
        <div className="project-list" role="tablist" aria-label="Select a project">
          {portfolioProjects.map((item, index) => (
            <Button
              key={item.id}
              type="button"
              variant="ghost"
              role="tab"
              aria-selected={selectedProjectId === item.id}
              className={`project-select ${selectedProjectId === item.id ? "is-selected" : ""}`}
              onClick={() => onSelectProject(item.id)}
            >
              <span className={`project-number project-number-${item.id}`}>0{index + 1}</span>
              <span className="project-select-copy"><b>{item.name}</b><small>{item.focus}</small></span>
              <ChevronRight aria-hidden="true" />
            </Button>
          ))}
        </div>
        <div className="project-sidebar-note">
          <span className="note-sparkle"><Sparkles aria-hidden="true" /></span>
          <p>Small details.<br /><b>Meaningful experiences.</b></p>
        </div>
      </aside>

      <section className="project-stage" aria-label={`${project.name} project preview`}>
        <ProjectArtwork project={project} galleryIndex={galleryIndex} />
        <div className="project-gallery" role="tablist" aria-label="Preview views">
          {["Overview", "Product", "Details"].map((label, index) => (
            <Button
              key={label}
              type="button"
              variant="ghost"
              role="tab"
              aria-selected={galleryIndex === index}
              className={`gallery-choice ${galleryIndex === index ? "is-selected" : ""}`}
              onClick={() => onSelectGallery(index)}
            >
              <span className={`gallery-mini gallery-mini-${index}`}><i /><i /><i /></span>
              <span>{label}</span>
            </Button>
          ))}
        </div>
      </section>

      <aside className="project-details">
        <div className="project-details-top"><span className="eyebrow">PROJECT 0{portfolioProjects.indexOf(project) + 1}</span><span className="project-type">UI / UX</span></div>
        <h2>{project.name}</h2>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-focus"><span>DESIGN FOCUS</span><b>{project.focus}</b></div>
        <div className="project-tools"><span className="tool-chip">Figma</span><span className="tool-chip">User flows</span><span className="tool-chip">UI design</span></div>
        <Button asChild type="button" className="project-contact-button">
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`I'd love to hear about ${project.name}`)}`}>
            Ask about this project <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <p className="project-availability">More case-study detail can be added as the portfolio grows.</p>
      </aside>
    </div>
  );
}

function DesignLab({
  tab,
  onChangeTab,
  selectedPalette,
  onSelectPalette,
  previewSize,
  onChangePreviewSize,
  buttonPressed,
  onToggleButton,
}: {
  tab: LabTab;
  onChangeTab: (tab: LabTab) => void;
  selectedPalette: string;
  onSelectPalette: (palette: string) => void;
  previewSize: PreviewSize;
  onChangePreviewSize: (size: PreviewSize) => void;
  buttonPressed: boolean;
  onToggleButton: () => void;
}) {
  return (
    <div className="lab-layout">
      <aside className="lab-controls">
        <span className="eyebrow">A LITTLE PLAYGROUND</span>
        <h2>Design Lab</h2>
        <p>Explore a few choices that shape a thoughtful interface.</p>
        <div className="lab-tabs" role="tablist" aria-label="Design Lab tools">
          {labTabs.map(({ id, label, Icon }) => (
            <Button key={id} type="button" variant="ghost" role="tab" aria-selected={tab === id} className={`lab-tab ${tab === id ? "is-selected" : ""}`} onClick={() => onChangeTab(id)}>
              <Icon aria-hidden="true" /><span>{label}</span>
            </Button>
          ))}
        </div>
        {tab === "palette" ? (
          <div className="lab-control-group">
            <span className="control-label">Choose an accent</span>
            <div className="palette-options">
              {paletteOptions.map((option) => (
                <Button key={option.id} type="button" variant="ghost" aria-label={option.name} aria-pressed={selectedPalette === option.id} className={`palette-swatch swatch-${option.id} ${selectedPalette === option.id ? "is-selected" : ""}`} onClick={() => onSelectPalette(option.id)} title={option.name}>
                  {selectedPalette === option.id && <Check aria-hidden="true" />}
                </Button>
              ))}
            </div>
          </div>
        ) : tab === "type" ? (
          <div className="lab-control-group type-control">
            <span className="control-label">Type pairing</span>
            <div className="type-pair"><span className="type-display-sample">Aa</span><span><b>Manrope</b><small>Clear, characterful headings</small></span></div>
            <div className="type-pair"><span className="type-body-sample">Aa</span><span><b>Inter</b><small>Comfortable reading text</small></span></div>
          </div>
        ) : (
          <div className="lab-control-group">
            <span className="control-label">Preview size</span>
            <div className="preview-size-options" role="group" aria-label="Preview size">
              {([
                ["desktop", Monitor],
                ["tablet", Layers],
                ["mobile", Smartphone],
              ] as const).map(([size, Icon]) => (
                <Button key={size} type="button" variant="ghost" aria-pressed={previewSize === size} className={`preview-size-button ${previewSize === size ? "is-selected" : ""}`} onClick={() => onChangePreviewSize(size)} title={`${size} preview`}>
                  <Icon aria-hidden="true" /><span>{size}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </aside>

      <section className="lab-stage" aria-label="Interactive sample preview">
        <div className="lab-stage-heading"><span>LIVE PREVIEW</span><span className="preview-live-dot">●</span></div>
        <div className={`lab-preview preview-size-${previewSize}`} data-palette={selectedPalette}>
          <div className="preview-browser-bar"><i /><i /><i /><span>made with care</span></div>
          <div className="preview-sample-content">
            <div className="sample-copy">
              <span className="sample-kicker">A SMALL MOMENT OF CALM</span>
              <h3>{tab === "type" ? "Good design feels effortless." : "Make room for what grows."}</h3>
              <p>Simple choices can make a digital experience feel more welcoming.</p>
              <Button type="button" className={`sample-action ${buttonPressed ? "is-pressed" : ""}`} onClick={onToggleButton}>
                {buttonPressed ? "Added to collection" : "Explore the collection"}<ArrowRight aria-hidden="true" />
              </Button>
            </div>
            <div className="sample-illustration" aria-hidden="true"><div className="sample-plant-pot"><Sprout /></div><div className="sample-orbit sample-orbit-one" /><div className="sample-orbit sample-orbit-two" /></div>
          </div>
          <div className="preview-bottom-row"><span /><span /><span /></div>
        </div>
        <div className="lab-stage-footer"><span>Adjust the controls to see the sample change.</span><span className="lab-stage-tag">FIGMA · UI STUDY</span></div>
      </section>
    </div>
  );
}

function JourneyApp() {
  return (
    <div className="journey-layout">
      <section className="journey-intro">
        <span className="eyebrow">A LITTLE ABOUT ME</span>
        <h2>Curiosity, care<br />and continuous learning.</h2>
        <p>{profile.summary}</p>
        <div className="journey-location"><MapPin aria-hidden="true" /><span>{profile.location}</span></div>
      </section>
      <div className="journey-columns">
        <section className="timeline-section">
          <div className="timeline-heading"><BriefcaseBusiness aria-hidden="true" /><h3>Experience</h3></div>
          <div className="timeline-list">
            {experience.map((item) => (
              <article className="timeline-item" key={item.organization}>
                <span className="timeline-pin" />
                <span className="timeline-date">{item.dates}</span>
                <h4>{item.role}</h4>
                <p className="timeline-organization">{item.organization}</p>
                <p className="timeline-location">{item.location}</p>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
        <section className="education-section">
          <div className="timeline-heading"><GraduationCap aria-hidden="true" /><h3>Education</h3></div>
          {education.map((item) => (
            <article className="education-item" key={item.institution}>
              <span className="education-date">{item.dates}</span>
              <h4>{item.institution}</h4>
              <p>{item.program}</p>
              <span className="education-result">{item.result}</span>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function SkillsApp() {
  return (
    <div className="skills-layout">
      <div className="skills-intro"><span className="eyebrow">MY TOOLKIT</span><h2>Skills that bring<br />ideas to life.</h2><p>A growing set of methods, tools and practices for thoughtful digital products.</p></div>
      <div className="skills-groups">
        {skillGroups.map((group, index) => (
          <section className={`skill-group skill-group-${index}`} key={group.title}>
            <div className="skill-group-heading"><span className={`skill-group-symbol skill-symbol-${index}`}>{index === 0 ? <Sparkles /> : index === 1 ? <Palette /> : index === 2 ? <Layers /> : <CircleHelp />}</span><h3>{group.title}</h3></div>
            <div className="skill-tags">{group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
          </section>
        ))}
        <section className="skill-group skill-group-certifications">
          <div className="skill-group-heading"><span className="skill-group-symbol skill-symbol-4"><FileText /></span><h3>Certifications & training</h3></div>
          <div className="skill-tags">{certifications.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div>
          <p className="language-line"><b>Languages</b><span>Telugu · English</span></p>
        </section>
      </div>
    </div>
  );
}

function ResumeApp() {
  return (
    <div className="resume-scroll">
      <article className="resume-document">
        <header className="resume-heading">
          <div><span className="eyebrow">CURRICULUM VITAE</span><h2>{profile.name}</h2><p>{profile.role}</p></div>
          <div className="resume-contact-lines"><span>{profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a></div>
        </header>
        <section className="resume-section"><h3>Profile</h3><p>{profile.summary}</p></section>
        <section className="resume-section"><h3>Experience</h3>{experience.map((item) => <div className="resume-entry" key={item.organization}><div className="resume-entry-heading"><b>{item.role} · {item.organization}</b><span>{item.dates}</span></div><p>{item.location}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>)}</section>
        <section className="resume-section"><h3>Projects</h3>{portfolioProjects.map((project) => <div className="resume-project" key={project.id}><b>{project.name} · {project.category}</b><p>{project.description}</p></div>)}</section>
        <section className="resume-section"><h3>Education</h3>{education.map((item) => <div className="resume-entry resume-education-entry" key={item.institution}><div className="resume-entry-heading"><b>{item.institution}</b><span>{item.dates}</span></div><p>{item.program} · {item.result}</p></div>)}</section>
        <section className="resume-section resume-last-section"><h3>Skills & training</h3><p>{skillGroups.map((group) => `${group.title}: ${group.items.join(", ")}`).join(" · ")}</p><p>Certifications: {certifications.join(" · ")}</p><p>Languages: Telugu, English</p></section>
      </article>
    </div>
  );
}

function ContactApp({ copied, onCopyEmail }: { copied: boolean; onCopyEmail: () => void }) {
  const [feedback, setFeedback] = useState("");

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    setFeedback("Your email app is ready with your message.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-layout">
      <section className="contact-intro"><span className="eyebrow">SAY HELLO</span><h2>Let’s create<br />something meaningful.</h2><p>Have a project, an idea, or just want to connect? I’d love to hear from you.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}><span className="contact-icon"><Mail aria-hidden="true" /></span><span><small>EMAIL</small><b>{profile.email}</b></span><ArrowUpRight aria-hidden="true" /></a>
        <Button type="button" variant="ghost" className="copy-email-button" onClick={onCopyEmail}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{copied ? "Email copied" : "Copy email address"}</Button>
        <a className="contact-phone" href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone aria-hidden="true" /><span>{profile.phone}</span></a>
        <p className="contact-location"><MapPin aria-hidden="true" />{profile.location}</p>
      </section>
      <form className="contact-form" onSubmit={sendMessage}>
        <div className="contact-form-heading"><span className="eyebrow">A NOTE TO VIJAYA</span><p>Every good collaboration starts with a conversation.</p></div>
        <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required placeholder="How should I address you?" />
        <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        <label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" required rows={4} placeholder="Tell me a little about it…" />
        <Button type="submit" className="contact-submit">Prepare email <ArrowUpRight aria-hidden="true" /></Button>
        <p className="contact-feedback" aria-live="polite">{feedback}</p>
      </form>
    </div>
  );
}

export function DesktopExperience() {
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [windowOffset, setWindowOffset] = useState({ x: 0, y: 0 });
  const [clock, setClock] = useState<Date | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(portfolioProjects[0].id);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [labTab, setLabTab] = useState<LabTab>("palette");
  const [selectedPalette, setSelectedPalette] = useState("violet");
  const [previewSize, setPreviewSize] = useState<PreviewSize>("desktop");
  const [buttonPressed, setButtonPressed] = useState(false);
  const [copied, setCopied] = useState(false);
  const dragState = useRef<{ pointerId: number; pointerX: number; pointerY: number; offsetX: number; offsetY: number } | null>(null);

  useEffect(() => {
    const updateClock = () => setClock(new Date());
    updateClock();
    const interval = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const openApp = (id: AppId) => {
    setActiveApp(id);
    setIsMinimized(false);
    setIsMaximized(false);
    setWindowOffset({ x: 0, y: 0 });
  };

  const closeApp = () => {
    setActiveApp(null);
    setIsMinimized(false);
    setIsMaximized(false);
    setWindowOffset({ x: 0, y: 0 });
  };

  const selectDockItem = (id: AppId | "home") => {
    if (id === "home") {
      closeApp();
      return;
    }
    if (activeApp === id && isMinimized) {
      setIsMinimized(false);
      return;
    }
    openApp(id);
  };

  const startWindowDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (isMaximized || event.button !== 0 || window.matchMedia("(max-width: 767px)").matches) return;
    if (event.target instanceof HTMLElement && event.target.closest("button")) return;
    dragState.current = {
      pointerId: event.pointerId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      offsetX: windowOffset.x,
      offsetY: windowOffset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveWindow = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    setWindowOffset({
      x: drag.offsetX + event.clientX - drag.pointerX,
      y: drag.offsetY + event.clientY - drag.pointerY,
    });
  };

  const stopWindowDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragState.current?.pointerId === event.pointerId) dragState.current = null;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const formattedDate = clock
    ? new Intl.DateTimeFormat("en-IN", { weekday: "short", month: "short", day: "numeric" }).format(clock)
    : "—";
  const formattedTime = clock
    ? new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit" }).format(clock)
    : "--:--";

  return (
    <div className={`os-shell ${activeApp === "resume" && !isMinimized ? "is-resume-active" : ""}`}>
      <div className="desktop-wallpaper" aria-hidden="true">
        <div className="wallpaper-wash" />
        <div className="wallpaper-ribbon wallpaper-ribbon-one" />
        <div className="wallpaper-ribbon wallpaper-ribbon-two" />
        <div className="wallpaper-ribbon wallpaper-ribbon-three" />
        <div className="wallpaper-fold" />
        <div className="wallpaper-shimmer" />
      </div>

      <header className="desktop-topbar">
        <div className="topbar-identity">
          <div className="dv-mark" aria-hidden="true"><span>D</span><span>V</span></div>
          <span className="topbar-name">Vijaya Sri</span>
          <span className="topbar-heart" aria-label="Made with care">♡</span>
          <span className="topbar-divider" />
          <span className="topbar-location">PERSONAL WORKSPACE</span>
        </div>
        <div className="topbar-status">
          <span className="status-date">{formattedDate}</span>
          <span className="status-separator" />
          <span className="status-time">{formattedTime}</span>
          <Wifi aria-label="Wireless status" />
          <BatteryMedium aria-label="Battery status" />
        </div>
      </header>

      <main className="desktop-home">
        <section className="welcome-panel" aria-labelledby="welcome-title">
          <div className="welcome-kicker"><span className="kicker-dot" /> OPEN TO WHAT’S NEXT</div>
          <h1 id="welcome-title">Hello, <span className="wave">hello.</span><br />I’m <span className="welcome-name">Donthu<br className="desktop-name-break" /> Vijaya Sri.</span></h1>
          <p className="welcome-role">{profile.role}</p>
          <p className="welcome-tagline">{profile.tagline}</p>
          <Button type="button" className="launch-button" onClick={() => openApp("projects")}>Explore workspace <ArrowRight aria-hidden="true" /></Button>
          <div className="welcome-signature"><span className="signature-line" /><span>DESIGNED WITH CURIOSITY</span></div>
        </section>

        <section className="launcher-panel" aria-label="Workspace applications">
          <div className="launcher-heading"><div><span className="eyebrow">YOUR WORKSPACE</span><h2>Where would you like to go?</h2></div><span className="launcher-count">06 <span>APPS</span></span></div>
          <div className="app-grid">
            {appItems.map(({ id, name, subtitle, Icon, tone }, index) => (
              <Button key={id} type="button" variant="ghost" className={`app-tile app-tile-${tone} ${activeApp === id ? "is-open" : ""}`} onClick={() => openApp(id)}>
                <span className={`app-icon-wrap app-icon-${tone}`}><Icon aria-hidden="true" /></span>
                <span className="app-tile-title">{name}</span>
                <span className="app-tile-subtitle">{subtitle}</span>
                <span className="app-tile-number">0{index + 1}</span>
                {activeApp === id && <span className="app-open-dot" aria-label="Open" />}
              </Button>
            ))}
          </div>
          <div className="launcher-footer"><span>SELECT AN APP TO BEGIN</span><span className="footer-sparkle"><Sparkles aria-hidden="true" /></span></div>
        </section>
      </main>

      <footer className="desktop-dock" aria-label="Workspace dock">
        <div className="dock-inner">
          <Button type="button" variant="ghost" aria-label="Home" title="Home" className={`dock-item ${activeApp === null ? "is-active" : ""}`} onClick={() => selectDockItem("home")}><Home aria-hidden="true" /><span className="dock-tooltip">Home</span></Button>
          <span className="dock-divider" />
          {appItems.map(({ id, name, Icon, tone }) => (
            <Button key={id} type="button" variant="ghost" aria-label={name} title={name} className={`dock-item dock-item-${tone} ${activeApp === id ? "is-active" : ""}`} onClick={() => selectDockItem(id)}>
              <Icon aria-hidden="true" /><span className="dock-tooltip">{name}</span>
              {activeApp === id && <span className="dock-active-indicator" />}
            </Button>
          ))}
          <span className="dock-divider dock-end-divider" />
          <span className="dock-status" aria-label="Workspace ready"><span /></span>
        </div>
      </footer>

      {activeApp !== null && !isMinimized && (
        <section
          className={`app-window ${isMaximized ? "is-maximized" : ""} ${activeApp === "resume" ? "resume-window" : ""}`}
          style={{ "--drag-x": `${windowOffset.x}px`, "--drag-y": `${windowOffset.y}px` } as React.CSSProperties}
          role="dialog"
          aria-modal="false"
          aria-labelledby="app-window-title"
        >
          <div className="window-titlebar" onPointerDown={startWindowDrag} onPointerMove={moveWindow} onPointerUp={stopWindowDrag} onPointerCancel={stopWindowDrag}>
            <div className="window-controls">
              <Button type="button" variant="ghost" size="icon" className="window-control control-close" aria-label="Close app" title="Close" onClick={closeApp}><X aria-hidden="true" /></Button>
              <Button type="button" variant="ghost" size="icon" className="window-control control-minimize" aria-label="Minimize app" title="Minimize" onClick={() => setIsMinimized(true)}><Minus aria-hidden="true" /></Button>
              <Button type="button" variant="ghost" size="icon" className="window-control control-maximize" aria-label={isMaximized ? "Restore app size" : "Maximize app"} title={isMaximized ? "Restore" : "Maximize"} onClick={() => setIsMaximized((value) => !value)}><Square aria-hidden="true" /></Button>
            </div>
            <div className="window-title"><span className="window-title-mark">DV</span><span id="app-window-title">{getAppName(activeApp)}</span></div>
            <span className="window-title-extra">VIJAYA OS <span>·</span> APP 0{appItems.findIndex((item) => item.id === activeApp) + 1}</span>
          </div>
          <div className={`app-window-content app-content-${activeApp}`}>
            {activeApp === "projects" && <ProjectStudio selectedProjectId={selectedProjectId} onSelectProject={(id) => { setSelectedProjectId(id); setGalleryIndex(0); }} galleryIndex={galleryIndex} onSelectGallery={setGalleryIndex} />}
            {activeApp === "lab" && <DesignLab tab={labTab} onChangeTab={setLabTab} selectedPalette={selectedPalette} onSelectPalette={setSelectedPalette} previewSize={previewSize} onChangePreviewSize={setPreviewSize} buttonPressed={buttonPressed} onToggleButton={() => setButtonPressed((value) => !value)} />}
            {activeApp === "journey" && <JourneyApp />}
            {activeApp === "skills" && <SkillsApp />}
            {activeApp === "resume" && <ResumeApp />}
            {activeApp === "contact" && <ContactApp copied={copied} onCopyEmail={copyEmail} />}
          </div>
        </section>
      )}

      <div className="desktop-signoff" aria-hidden="true">MADE FOR A BETTER TOMORROW <span>✳</span></div>
    </div>
  );
}