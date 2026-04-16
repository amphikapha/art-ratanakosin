import { Landmark, Building, Home, Spline } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const architectureFeatures = [
  {
    icon: Landmark,
    title: 'ภูเขาทอง',
    englishTitle: 'Golden Mount',
    description: 'เนินดินสูงประมาณ 77 เมตร มีบันไดวนขึ้นถึงยอด 344 ขั้น ยอดเขาประดิษฐานพระเจดีย์ทองคำบรรจุพระบรมสารีริกธาตุ',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Building,
    title: 'พระอุโบสถ',
    englishTitle: 'Ordination Hall',
    description: 'พระอุโบสถทรงไทยประดับด้วยช่อฟ้า ใบระกา หางหงส์ ภายในประดิษฐานพระพุทธรูปปางมารวิชัย',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
  },
  {
    icon: Home,
    title: 'วิหาร',
    englishTitle: 'Assembly Hall',
    description: 'วิหารขนาดใหญ่สำหรับประกอบศาสนกิจ มีจิตรกรรมฝาผนังอันงดงามเล่าเรื่องพุทธประวัติ',
    image: 'https://images.unsplash.com/photo-1600093112978-b84e5eb6a98d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Spline,
    title: 'เจดีย์',
    englishTitle: 'Pagoda',
    description: 'เจดีย์ทรงระฆังสีทองอร่าม ประดับด้วยกระเบื้องสีทองตามศิลปะไทยประเพณี',
    image: 'https://images.unsplash.com/photo-1512553617565-75b967a7f401?q=80&w=2073&auto=format&fit=crop',
  },
]

const uniqueFeatures = [
  {
    title: 'สถาปัตยกรรมไทยประเพณี',
    description: 'อาคารทุกหลังสร้างตามแบบศิลปะไทยโบราณ มีหลังคาทรงจั่วซ้อนชั้น ประดับด้วยช่อฟ้า ใบระกา หางหงส์',
  },
  {
    title: 'สัญลักษณ์แห่งพระพุทธศาสนา',
    description: 'ภูเขาทองเป็นสัญลักษณ์ของเขาพระสุเมรุ ศูนย์กลางจักรวาลตามคติพุทธศาสนา',
  },
  {
    title: 'การผสมผสานศิลปะ',
    description: 'มีการผสมผสานศิลปะจีนและตะวันตกเข้ากับศิลปะไทย แสดงถึงความเป็นสากลในยุครัตนโกสินทร์',
  },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-red mb-4">
            สถาปัตยกรรม
          </h2>
          <p className="text-brown max-w-2xl mx-auto leading-relaxed text-pretty">
            ความงดงามของศิลปะและสถาปัตยกรรมไทยที่สะท้อนภูมิปัญญาและความศรัทธา
          </p>
        </div>

        {/* Architecture Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {architectureFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-gold/20 hover:border-gold/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-brown-dark" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-cream">
                        {feature.title}
                      </h3>
                      <p className="text-gold text-sm">{feature.englishTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-brown leading-relaxed text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Unique Features Subsection */}
        <div className="bg-cream-dark rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-2xl font-semibold text-deep-red text-center mb-8">
            ความเป็นเอกลักษณ์
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold text-2xl font-serif">{index + 1}</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-deep-red mb-3">
                  {feature.title}
                </h4>
                <p className="text-brown text-sm leading-relaxed text-pretty">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
