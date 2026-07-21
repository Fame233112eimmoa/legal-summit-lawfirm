type PageBannerProps = {
  title: string;
  description: string;
  image: string;
};

export default function PageBanner({ title, description, image }: PageBannerProps) {
  return (
    <section className="border-b border-[#e6d8c3] bg-[#f7f1e8]">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(98,72,38,0.12)]">
          <div className="relative min-h-[360px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,249,239,0.96),rgba(250,241,226,0.88),rgba(245,232,211,0.78))]" />
            <div className="relative flex min-h-[360px] items-center px-8 py-14 sm:px-12 lg:px-16">
              <div className="max-w-3xl text-[#20170f]">
                <p className="section-label">Legal Summit Law Firm</p>
                <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.8rem]">{title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d4d3b]">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
