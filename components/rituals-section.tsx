import { Calendar, Moon, Sun, Sunrise, BookOpen, Heart } from 'lucide-react'

const annualFestivals = [
  {
    icon: Calendar,
    title: 'งานนมัสการองค์พระบรมสารีริกธาตุ',
    description: 'งานประจำปีเดือนพฤศจิกายน ตรงกับวันลอยกระทง มีผู้คนมาสักการะนับแสนคน',
    month: 'พฤศจิกายน',
  },
  {
    icon: Moon,
    title: 'วันวิสาขบูชา',
    description: 'วันสำคัญทางพระพุทธศาสนา ระลึกถึงการประสูติ ตรัสรู้ และปรินิพพาน',
    month: 'พฤษภาคม',
  },
  {
    icon: Sun,
    title: 'วันมาฆบูชา',
    description: 'วันที่พระสงฆ์ 1,250 รูปมาประชุมโดยมิได้นัดหมาย รับฟังโอวาทปาฏิโมกข์',
    month: 'กุมภาพันธ์',
  },
]

const regularPractices = [
  {
    icon: Sunrise,
    title: 'ตักบาตรเช้า',
    description: 'ใส่บาตรพระสงฆ์ในตอนเช้า สร้างบุญกุศลตามประเพณีชาวพุทธ',
    time: 'ทุกวัน 06.30 น.',
  },
  {
    icon: BookOpen,
    title: 'สวดมนต์',
    description: 'ร่วมสวดมนต์ทำวัตรเย็นกับพระสงฆ์ น้อมจิตให้สงบ',
    time: 'ทุกวัน 18.00 น.',
  },
  {
    icon: Heart,
    title: 'นั่งสมาธิ',
    description: 'ปฏิบัติสมาธิภาวนา ฝึกจิตให้ตั้งมั่นและสงบ',
    time: 'วันพระ 09.00 น.',
  },
]

export function RitualsSection() {
  return (
    <section id="rituals" className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-red mb-4">
            พิธีกรรมและงานประเพณี
          </h2>
          <p className="text-brown max-w-2xl mx-auto leading-relaxed text-pretty">
            กิจกรรมทางศาสนาและงานประเพณีประจำปีที่สืบทอดมาอย่างยาวนาน
          </p>
        </div>

        {/* Annual Festivals */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-deep-red text-center mb-8">
            งานประเพณีประจำปี
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {annualFestivals.map((festival, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-gold/20 hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-deep-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-deep-red/20 transition-colors">
                    <festival.icon className="w-7 h-7 text-deep-red" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-gold/20 text-gold-dark rounded text-xs font-medium mb-2">
                      {festival.month}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-deep-red mb-2">
                      {festival.title}
                    </h4>
                    <p className="text-brown text-sm leading-relaxed text-pretty">
                      {festival.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Practices */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-deep-red text-center mb-8">
            กิจกรรมประจำ
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {regularPractices.map((practice, index) => (
              <div
                key={index}
                className="group bg-gold/5 rounded-xl p-6 border border-gold/30 hover:bg-gold/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <practice.icon className="w-8 h-8 text-gold-dark" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-deep-red mb-2">
                    {practice.title}
                  </h4>
                  <p className="text-brown text-sm leading-relaxed mb-3 text-pretty">
                    {practice.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-deep-red/10 text-deep-red rounded-full text-xs font-medium">
                    {practice.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
