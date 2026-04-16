export function MediaSection() {
  return (
    <section id="media-vlog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-red mb-4">
            วิดีโอแนะนำวัดสระเกศ
          </h2>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-xl border border-gold/20">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                src="https://www.youtube.com/embed/kZnf1rB4264?si=BYn2823kQvjpNBzB"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="วิดีโอแนะนำวัดสระเกศราชวรมหาวิหาร"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
