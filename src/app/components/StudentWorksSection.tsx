import { useState, useCallback, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { homeContent, t } from '../locales/homeContent';
import { ExternalLink, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export function StudentWorksSection() {
  const { language } = useLanguage();
  const projects = homeContent.works.featured;
  
  // 前6个作品在网格中展示
  const gridProjects = projects.slice(0, 6);
  // 剩余作品在轮播中展示
  const carouselProjects = projects.slice(6);

  return (
    <section id="works" className="px-4 border-t border-white/10 py-20" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ 
            color: 'var(--text-primary)',
            fontSize: '42px',
            fontWeight: 600,
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>{t(homeContent.works.title, language)}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t(homeContent.works.subtitle, language)}</p>
        </div>

        {/* Grid Layout - 2 rows × 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {gridProjects.map((project, index) => (
            <ProjectCard key={index} project={project} language={language} index={index} />
          ))}
        </div>

        {/* Carousel Section */}
        {carouselProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/30"></div>
              <h3 className="text-cyan-400 text-center">
                {language === 'ZH' ? '更多精彩项目' : 'More Amazing Projects'}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/30"></div>
            </div>

            <CarouselSection projects={carouselProjects} language={language} />
          </div>
        )}
      </div>
    </section>
  );
}

// Main Project Card Component
function ProjectCard({ project, language, index }: any) {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Filter out duplicates and empty values - memoized for stability
  const images = useMemo(() => {
    const allImages = [project.images.main, project.images.screenshot1, project.images.screenshot2];
    return Array.from(new Set(allImages.filter(Boolean)));
  }, [project.images.main, project.images.screenshot1, project.images.screenshot2]);

  // Reset currentImg if it exceeds the images array length
  useEffect(() => {
    if (currentImg >= images.length) {
      setCurrentImg(0);
    }
  }, [currentImg, images.length]);

  // Auto-play images every 3 seconds - only if there are multiple unique images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Use orange theme for all grid cards
  const theme = { 
    border: 'border-orange-500/30 hover:border-orange-500/60', 
    badge: 'bg-orange-500/90', 
    shadow: 'hover:shadow-orange-500/20', 
    text: 'text-orange-400', 
    button: 'bg-orange-500 hover:bg-orange-600' 
  };
  
  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden border ${theme.border} transition-all duration-500 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm hover:shadow-2xl ${theme.shadow} flex flex-col h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-black">
        <img 
          src={images[currentImg]}
          alt={t(project.title, language)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Image Navigation Dots - Only show if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentImg 
                    ? 'w-4 bg-orange-400' 
                    : 'w-1 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`mb-3 ${theme.text} leading-tight text-lg`}>{t(project.title, language)}</h3>
        
        {/* Team Info */}
        <div className="mb-4 flex items-start gap-2">
          <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-300">{t(project.team, language)}</p>
            <p className="text-xs text-gray-500 mt-1">{t(project.teamDetails, language)}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.values(project.tags).map((tag: any, idx) => (
            <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm">
              {t(tag, language)}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-1">
          {t(project.description, language)}
        </p>

        {/* CTA Button */}
        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl ${theme.button} text-white transition-all duration-300 group/btn shadow-lg hover:shadow-xl`}
        >
          <span>{t(project.cta, language)}</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// Carousel Section Component
function CarouselSection({ projects, language }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  // Setup event listeners
  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onInit);
  }, [emblaApi, onInit, onSelect]);

  // 计算是否需要显示导航控件
  const needsNavigation = scrollSnaps.length > 1;

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {projects.map((project: any, index: number) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
              <CarouselCard project={project} language={language} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - 只在需要时显示 */}
      {needsNavigation && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 backdrop-blur-xl text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 disabled:hover:scale-100 flex items-center justify-center shadow-xl z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 backdrop-blur-xl text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 disabled:hover:scale-100 flex items-center justify-center shadow-xl z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator - 基于实际的滚动快照数量 */}
      {needsNavigation && scrollSnaps.length <= 10 && (
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'w-8 bg-cyan-500' 
                  : 'w-2 bg-cyan-500/30 hover:bg-cyan-500/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Carousel Card Component
function CarouselCard({ project, language }: any) {
  const [currentImg, setCurrentImg] = useState(0);
  
  // Filter out duplicates and empty values - memoized for stability
  const images = useMemo(() => {
    const allImages = [project.images.main, project.images.screenshot1, project.images.screenshot2];
    return Array.from(new Set(allImages.filter(Boolean)));
  }, [project.images.main, project.images.screenshot1, project.images.screenshot2]);

  // Reset currentImg if it exceeds the images array length
  useEffect(() => {
    if (currentImg >= images.length) {
      setCurrentImg(0);
    }
  }, [currentImg, images.length]);

  // Auto-play images every 3 seconds - only if there are multiple unique images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="group relative rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 bg-black/70 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/20 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-black">
        <img 
          src={images[currentImg]}
          alt={t(project.title, language)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Image indicators - Only show if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentImg 
                    ? 'w-4 bg-cyan-400' 
                    : 'w-1 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-cyan-400 mb-2 leading-tight text-base">{t(project.title, language)}</h4>
        
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-3 h-3 text-gray-400" />
          <p className="text-xs text-gray-400">{t(project.team, language)}</p>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-2 flex-1">
          {t(project.description, language)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {Object.values(project.tags).slice(0, 3).map((tag: any, idx) => (
            <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70 border border-white/20">
              {t(tag, language)}
            </span>
          ))}
        </div>

        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-sm border border-cyan-500/40 transition-all group/btn w-full justify-center"
        >
          <span>{t(project.cta, language)}</span>
          <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}