import React from 'react';

const videos = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-dramatic-aerial-footage-of-rocky-sea-1555/1080p.mp4',
    title: 'Küste bei Sonnenuntergang',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-waves-1945/1080p.mp4',
    title: 'Brandung – Detailaufnahme',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-aerial-of-road-in-the-desert-1447/1080p.mp4',
    title: 'Roadtrip im Morgenlicht',
  },
];

const VideoCard = ({ src, title }) => (
  <div className="group relative aspect-video w-[320px] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
    <video
      className="h-full w-full object-cover"
      src={src}
      muted
      loop
      playsInline
      autoPlay
      controls={false}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-60" />
    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
      <p className="text-sm font-medium text-white">{title}</p>
      <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
        4K
      </span>
    </div>
  </div>
);

const VideoShowcase = () => {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Showcase
            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Luftvideo-Highlights
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
            Eine Auswahl aktueller Projekte – flüssig, detailreich und perfekt stabilisiert.
          </p>
        </div>
      </div>

      <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-2">
        {videos.map((v, i) => (
          <div key={i} className="snap-start">
            <VideoCard src={v.src} title={v.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
