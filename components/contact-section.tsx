import { MapPin, Clock, Phone, Train, Bus, Ship } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const contactInfo = [
  {
    icon: MapPin,
    title: 'ที่ตั้ง',
    details: ['344 ถนนจักรพรรดิพงษ์', 'แขวงบ้านบาตร เขตป้อมปราบศัตรูพ่าย', 'กรุงเทพมหานคร 10100'],
  },
  {
    icon: Clock,
    title: 'เวลาเปิด-ปิด',
    details: ['เปิดให้เข้าชมทุกวัน', '08.00 - 17.00 น.', 'ภูเขาทอง: 07.30 - 19.00 น.'],
  },
  {
    icon: Phone,
    title: 'ติดต่อ',
    details: ['โทร: 02-621-0576', 'โทร: 02-223-4561', 'โทรสาร: 02-224-3821'],
  },
]

const transportOptions = [
  {
    icon: Train,
    title: 'รถไฟฟ้า BTS/MRT',
    description: 'MRT สถานีหัวลำโพง แล้วต่อรถประจำทางหรือแท็กซี่',
  },
  {
    icon: Bus,
    title: 'รถประจำทาง',
    description: 'สาย 8, 15, 37, 47, 49, 60, 79 ผ่านหน้าวัด',
  },
  {
    icon: Ship,
    title: 'เรือโดยสาร',
    description: 'ท่าเรือผ่านฟ้า คลองแสนแสบ แล้วเดินต่อ 10 นาที',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-red mb-4">
            ติดต่อและการเดินทาง
          </h2>
          <p className="text-brown max-w-2xl mx-auto leading-relaxed text-pretty">
            ข้อมูลติดต่อและวิธีการเดินทางมายังวัดสระเกศราชวรมหาวิหาร
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card border-gold/20 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-deep-red mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-brown text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Transport Options */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-deep-red mb-4">
                การเดินทาง
              </h3>
              <div className="space-y-3">
                {transportOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-cream-dark rounded-lg"
                  >
                    <div className="w-10 h-10 bg-deep-red/10 rounded-full flex items-center justify-center shrink-0">
                      <option.icon className="w-5 h-5 text-deep-red" />
                    </div>
                    <div>
                      <h5 className="font-medium text-brown-dark">{option.title}</h5>
                      <p className="text-brown text-sm">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-full min-h-[400px]">
            <div className="rounded-xl overflow-hidden shadow-xl h-full border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4677045883584!2d100.5044537!3d13.7535639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d3fffc5f1f%3A0x7a1c6c3a6c5c8c8!2sWat%20Saket%20(Golden%20Mount)!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="แผนที่วัดสระเกศ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
