import { PROJECTS } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './SectionHeading';
import { MapPin, ArrowLeft } from 'lucide-react';

export function Projects({ onOpen }: { onOpen: (slug: string) => void }) {
  return (
    <section id="projects" className="bg-ivory text-charcoal py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            dark
            eyebrow="پروژه‌های راهبردی"
            title="پروژه‌های منتخب معدنی"
          />
          <p className="text-sm text-metallic max-w-md leading-relaxed lg:text-left">
            * پروژه‌های زیر محتوای نمونه برای معرفی حوزه‌های فعالیت مجموعه هستند.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index, onOpen }: { project: typeof PROJECTS[number]; index: number; onOpen: (slug: string) => void }) {
  const { ref, visible } = useReveal();
  const reverse = index % 2 === 1;
  return (
    <article
      ref={ref}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center reveal ${visible ? 'is-visible' : ''}`}
    >
      <div className={`overflow-hidden h-[300px] lg:h-[440px] ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />
      </div>
      <div className={`flex flex-col gap-5 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 text-copper text-xs tracking-brand">
          <span className="w-8 h-px bg-copper" />
          پروژه ۰{index + 1}
        </div>
        <h3 className="text-2xl lg:text-4xl font-bold leading-snug">{project.name}</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-charcoal/70 border border-charcoal/15 px-3 py-1.5">
            <MapPin size={14} className="text-copper" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-charcoal/70 border border-charcoal/15 px-3 py-1.5">
            نوع ماده معدنی: {project.mineral}
          </span>
        </div>
        <p className="text-base text-charcoal/75 leading-relaxed">{project.desc}</p>
        <button
          onClick={() => onOpen(project.slug)}
          className="group/btn self-start flex items-center gap-2 text-copper font-semibold mt-2 hover:gap-3 transition-all duration-300"
        >
          مشاهده جزئیات پروژه
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover/btn:-translate-x-1" />
        </button>
      </div>
    </article>
  );
}
