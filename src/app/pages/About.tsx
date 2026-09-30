import { Link } from 'react-router';
import { ArrowRight, Briefcase, Download, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHeader, SectionHeading } from '../components/SectionHeading';
import { icons } from '../components/icons';
import { Reveal } from '../components/effects/Reveal';
import { SpotlightCard } from '../components/effects/SpotlightCard';
import { education, professionalSkills, profile, skillGroups } from '../data/portfolio';

const quickFacts = [
  { icon: MapPin, label: 'Based in', value: profile.location },
  { icon: GraduationCap, label: 'Education', value: 'B.Sc. in SE, IIT, University of Dhaka (2026)' },
  { icon: Briefcase, label: 'Currently', value: 'Research Associate, BIRDI' },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
];

export function About() {
  return (
    <div className="px-4 pb-12 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="About me"
          title={
            <>
              Engineer by training, <span className="text-gradient">builder</span> by nature
            </>
          }
          description="I care about software that is fast, reliable and genuinely useful, and about helping the people around me grow."
        />

        {/* Portrait + story */}
        <div className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-6">
            <div className="glass overflow-hidden rounded-[2rem] p-2">
              <div className="overflow-hidden rounded-[1.6rem] bg-white">
                <ImageWithFallback
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="aspect-[4/5] w-full origin-top scale-[1.3] object-cover object-top"
                />
              </div>
            </div>

            <div className="glass rounded-3xl p-2">
              {quickFacts.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{label}</span>
                      <span className="block truncate text-sm font-medium">{value}</span>
                    </span>
                  </>
                );
                const cls = 'flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-brand-soft';
                return href ? (
                  <a key={label} href={href} className={cls}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={cls}>
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard className="glass h-full rounded-[2rem] p-8 sm:p-12">
              <p className="eyebrow mb-4">My story</p>
              <h2 className="text-2xl sm:text-3xl">From olympiad problems to LLM research</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                <p>
                  I'm a Software Engineering graduate of the{' '}
                  <span className="font-medium text-foreground">Institute of Information Technology (IIT), University of Dhaka</span>{' '}
                  (CGPA 3.69). Today I'm a Research Associate at{' '}
                  <span className="font-medium text-foreground">BIRDI</span>, working on LLM-guided RTL code generation:
                  building verified Verilog datasets like CompositeRTL, fine-tuning code models with QLoRA, and
                  benchmarking them on VerilogEval and RTLLM.
                </p>
                <p>
                  Before that I was an intern in the Quality Innovation Group at{' '}
                  <span className="font-medium text-foreground">Samsung R&D Institute Bangladesh</span>, designing test
                  plans, running manual and automated tests and validating defects. That work was recognized by the
                  Managing Director. I've also built production web platforms such as The Professional Accountants'
                  Society (UK) and the BCS Exam Management System.
                </p>
                <p>
                  Teaching runs through everything I do. I teach short courses on Python and practical AI tools at IIT,
                  and I've taught 1,000+ students mathematics, trained 500+ peers in programming, and set problems for
                  the Bangladesh Mathematical Olympiad.
                </p>
              </div>

              <div className="mt-10 border-t border-[var(--glass-edge)] pt-8">
                <p className="mb-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-brand" />
                  Professional strengths
                </p>
                <ul className="flex flex-wrap gap-2">
                  {professionalSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[var(--glass-edge)] bg-[var(--glass-bg)] px-3.5 py-1.5 text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Education */}
        <section className="mt-20 sm:mt-32">
          <SectionHeading
            eyebrow="Education"
            title={
              <>
                Academic <span className="text-gradient">foundation</span>
              </>
            }
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.1}>
                <SpotlightCard className="glass h-full rounded-3xl p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <GraduationCap className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-medium tabular-nums text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="mt-6 text-xl">{item.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.unit}</p>
                  <p className="mt-4 text-sm font-medium">{item.degree}</p>
                  <span className="mt-5 inline-flex rounded-full bg-emerald-500/12 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-500/25 dark:text-emerald-300">
                    {item.score}
                  </span>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-20 sm:mt-32">
          <SectionHeading
            eyebrow="Toolbox"
            title={
              <>
                Technical <span className="text-gradient">skills</span>
              </>
            }
            description="The languages, frameworks and tools I use to design, build, test and ship software."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => {
              const Icon = icons[group.icon];
              return (
                <Reveal key={group.title} delay={(i % 3) * 0.08}>
                  <SpotlightCard className="glass h-full rounded-3xl p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-base">{group.title}</h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-lg border border-[var(--glass-edge)] bg-[var(--glass-bg)] px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <Reveal className="mt-24">
          <div className="glass flex flex-col items-center justify-between gap-6 rounded-3xl p-8 text-center sm:p-10 md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl">Want the full picture?</h2>
              <p className="mt-2 text-muted-foreground">Download my résumé, or reach out directly.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="btn-glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
