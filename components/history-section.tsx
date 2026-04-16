const timelineEvents = [
  {
    year: "สมัยอยุธยา",
    title: "สร้างวัดสระเกศ",
    description: 'วัดสระเกศถูกสร้างขึ้นในสมัยอยุธยา เดิมชื่อว่า "วัดสะแก"',
  },
  {
    year: "พ.ศ. 2325",
    title: "บูรณะในสมัยรัชกาลที่ 1",
    description:
      'พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราชโปรดให้บูรณะและเปลี่ยนชื่อเป็น "วัดสระเกศ"',
  },
  {
    year: "พ.ศ. 2394",
    title: "สร้างภูเขาทอง",
    description:
      "รัชกาลที่ 3 ทรงริเริ่มสร้างภูเขาทอง และรัชกาลที่ 4 ทรงสร้างพระเจดีย์บนยอด",
  },
  {
    year: "พ.ศ. 2492",
    title: "อัญเชิญพระบรมสารีริกธาตุ",
    description:
      "อัญเชิญพระบรมสารีริกธาตุจากประเทศอินเดียมาประดิษฐานที่พระเจดีย์บนยอดภูเขาทอง",
  },
  {
    year: "พ.ศ. 2492",
    title: "ขึ้นทะเบียนโบราณสถาน",
    description: "วัดสระเกศได้รับการขึ้นทะเบียนเป็นโบราณสถานแห่งชาติ",
  },
];

export function HistorySection() {
  return (
    <section id="history" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-red mb-4">
            ความเป็นมา
          </h2>
          <p className="text-brown max-w-2xl mx-auto leading-relaxed text-pretty">
            ประวัติศาสตร์อันยาวนานของวัดสระเกศ ตั้งแต่สมัยอยุธยาจนถึงปัจจุบัน
          </p>
        </div>
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 rounded-lg transform rotate-2" />
            <img
              src="/images/wat-sakea.png"
              alt="ภูเขาทองในอดีต"
              className="relative rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-deep-red">
              จากวัดสะแกสู่วัดสระเกศ
            </h3>
            <div className="space-y-4 text-brown leading-relaxed">
              <p className="text-pretty">
                วัดสระเกศราชวรมหาวิหาร เดิมชื่อ "วัดสะแก"
                เป็นวัดโบราณที่สร้างขึ้นตั้งแต่สมัยอยุธยา ตั้งอยู่ริมคลองมหานาค
                ในเขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร
              </p>
              <p className="text-pretty">
                เมื่อพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราชทรงสถาปนากรุงรัตนโกสินทร์
                ได้โปรดให้บูรณะวัดและเปลี่ยนชื่อเป็น "วัดสระเกศ"
                อันหมายถึงการสรงเกศาเป็นมงคล
              </p>
              <p className="text-pretty">
                ภูเขาทองถูกสร้างขึ้นในรัชสมัยพระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว
                และพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัวทรงโปรดให้สร้างพระเจดีย์ทองคำบนยอด
                ซึ่งเป็นที่ประดิษฐานพระบรมสารีริกธาตุที่อัญเชิญมาจากประเทศอินเดีย
              </p>
            </div>
          </div>
        </div>
        {/* Timeline */}
        <div className="relative">
          <h3 className="font-serif text-2xl font-semibold text-deep-red text-center mb-12">
            เส้นทางประวัติศาสตร์
          </h3>

          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream-dark transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold-dark rounded-full text-sm font-medium mb-2">
                    {event.year}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-deep-red mb-2">
                    {event.title}
                  </h4>
                  <p className="text-brown text-pretty">{event.description}</p>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
        {/* Legends Section */}
        <div className="mt-24">
          <h3 className="font-serif text-2xl font-semibold text-deep-red text-center mb-12">
            ตำนานแร้งวัดสระเกศและเปรตวัดสุทัศน์
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Stories */}
            <div className="space-y-8">
              {/* Story 1 - Demons of Wat Saket */}
              <div className="bg-card border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all">
                <h4 className="font-serif text-lg font-semibold text-deep-red mb-3">
                  แร้งวัดสระเกศ
                </h4>
                <p className="text-brown text-sm leading-relaxed text-pretty mb-3">
                  ตำนานที่เกิดขึ้นจริง ไม่ใช่เพียงเรื่องเล่า ในช่วงรัชกาลที่ 2
                  เมื่ออหิวาตกโรคระบาดเมืองมีคนตายหลายหมื่นคนในเพียงไม่กี่วัน
                  เมืองกลายเป็นแหล่งศพ ทุกตารางนิ้วเต็มไปด้วยซากศพ
                  วัดสระเกศกลายมาเป็นศูนย์รวมของแร้งนับพัน
                  เนื่องจากมีกฎห้ามเผาศพในเมือง และประตูผี
                  (ประตูเมืองเพียงประตูเดียว) อยู่ใกล้วัดสระเกศมากที่สุด
                  ทำให้ทางการนำศพมากองรวมกันที่นี่ และใช้แร้งกำจัดศพแทนการเผา
                  เป็นจุดศูนย์รวมที่คนทั้งมูลนิธิเรียกกันว่า "นรกจำลอง"
                </p>
              </div>

              {/* Story 2 - Ghost of Wat Suthat */}
              <div className="bg-card border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all">
                <h4 className="font-serif text-lg font-semibold text-deep-red mb-3">
                  เปรตวัดสุทัศน์
                </h4>
                <p className="text-brown text-sm leading-relaxed text-pretty mb-3">
                  เปรต คือ มนุษย์ที่ทำบาปกรรมขั้นสุด เมื่อตายจะเกิดมาชดใช้กรรม
                  ปากเท่ารูเข็ม มือใหญ่เท่าใบลาน มักปรากฏตัวตอนกลางคืน
                  ในสมัยต้นกรุงรัตนโกสินทร์ บริเวณวัดสุทัศน์น่ากลัวมากๆ
                  คนมักเล่าว่าพบเห็นเปรตอยู่เสมอ
                </p>
                <p className="text-brown text-sm leading-relaxed text-pretty">
                  แท้ที่จริงแล้ว เรื่องเล่าเปรตมาจากภาพวาดบนฝาผนังในอุโบสถ
                  ที่ปรากว่าเปรตตนหนึ่งนอนพาดกายอยู่ และมีพระสงฆ์ยืนพิจารณา
                  ภาพนี้เป็นที่เลื่องลือในอดีต
                  แต่ผู้คนบอกว่าสิ่งที่เห็นว่าเปรตนั้น
                  แท้จริงคือเงาของเสาชิงช้าหน้าวัดในสายหมอกยามเช้า
                  อันนี้ก็แล้วแต่ความเชื่อส่วนบุคคล
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-lg transform rotate-2" />
                <img
                  src="/images/griffon.png"
                  alt="เรื่องเล่าชาวเกาะ"
                  className="relative rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
