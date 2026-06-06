type PageBannerProps = {
  title: string;
  description: string;
  image: string;
};

export default function PageBanner({ title, description, image }: PageBannerProps) {
  return (
    <section className="border-b border-white/10 bg-[#020202]">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <div className="relative min-h-[360px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.76),rgba(0,0,0,0.82))]" />
            <div className="relative flex min-h-[360px] items-center px-8 py-14 sm:px-12 lg:px-16">
              <div className="max-w-3xl text-white">
                <p className="section-label">Legal Summit Law Firm</p>
                <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.8rem]">{title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ddd0bf]">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
