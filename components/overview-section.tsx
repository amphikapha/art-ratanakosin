import { Building2, Calendar, MapPin, Crown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const overviewItems = [
  {
    icon: Building2,
    title: 'ประเภทวัด',
    description: 'พระอารามหลวงชั้นโท',
    detail: 'ชนิดราชวรมหาวิหาร',
  },
  {
    icon: Calendar,
    title: 'ยุคสมัย',
    description: 'สมัยอยุธยา',
    detail: 'บูรณะในสมัยรัตนโกสินทร์',
  },
  {
    icon: MapPin,
    title: 'ที่ตั้ง',
    description: 'เขตป้อมปราบศัตรูพ่าย',
    detail: 'กรุงเทพมหานคร',
  },
  {
    icon: Crown,
    title: 'สถานะ',
    description: 'พระอารามหลวง',
    detail: 'ในพระบรมราชูปถัมภ์',
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deep-red mb-4">
            ข้อมูลพื้นฐาน
          </h2>
          <p className="text-brown max-w-2xl mx-auto leading-relaxed text-pretty">
            วัดสระเกศราชวรมหาวิหาร เป็นพระอารามหลวงชั้นโทที่มีความสำคัญทางประวัติศาสตร์
            ตั้งอยู่ใจกลางกรุงเทพมหานคร มีชื่อเสียงจากภูเขาทองที่สวยงามและเป็นสัญลักษณ์ของเมือง
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-card border-gold/20 hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-deep-red mb-2">
                  {item.title}
                </h3>
                <p className="text-brown-dark font-medium">{item.description}</p>
                <p className="text-brown text-sm mt-1">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
