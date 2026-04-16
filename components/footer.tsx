'use client'

import { useState } from 'react'
import { Facebook, Youtube, Instagram, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const quickLinks = [
  { label: 'หน้าแรก', href: '#hero' },
  { label: 'ข้อมูลพื้นฐาน', href: '#overview' },
  { label: 'ความเป็นมา', href: '#history' },
  { label: 'สิ่งศักดิ์สิทธิ์สำคัญ', href: '#sacred-things' },
  { label: 'พิธีกรรม', href: '#rituals' },
  { label: 'ติดต่อ', href: '#contact' },
]

const socialLinks = [
  { icon: Globe, href: 'https://www.watsrakesa.net/', label: 'Website' },
  { icon: Facebook, href: 'https://www.facebook.com/watsraket/', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/@jariyatamchannel', label: 'YouTube' },
  { icon: Instagram, href: 'https://www.instagram.com/watsraket344/ ', label: 'Instagram' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    alert(`ขอบคุณที่สมัครรับข่าวสาร: ${email}`)
    setEmail('')
  }

  return (
    <footer className="bg-maroon text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Temple Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-maroon"
                  fill="currentColor"
                >
                  <path d="M12 2L2 12h3v9h6v-6h2v6h6v-9h3L12 2zm0 2.84L19.13 12H18v7h-4v-6H10v6H6v-7H4.87L12 4.84z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">วัดสระเกศ</h3>
                <p className="text-gold text-sm">ราชวรมหาวิหาร</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-4 text-pretty">
              พระอารามหลวงชั้นโท ชนิดราชวรมหาวิหาร ตั้งอยู่ใจกลางกรุงเทพมหานคร
              เป็นที่ประดิษฐานพระบรมสารีริกธาตุบนยอดภูเขาทอง
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              ลิงก์ด่วน
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              เวลาเข้าชม
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-cream/80">
                <span>วัด</span>
                <span>08.00 - 17.00 น.</span>
              </div>
              <div className="flex justify-between text-cream/80">
                <span>ภูเขาทอง</span>
                <span>07.30 - 19.00 น.</span>
              </div>
              <div className="flex justify-between text-cream/80">
                <span>พิพิธภัณฑ์</span>
                <span>09.00 - 16.00 น.</span>
              </div>
              <div className="mt-4 pt-4 border-t border-cream/20">
                <p className="text-gold text-xs">เปิดให้เข้าชมทุกวัน</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              รับข่าวสาร
            </h4>
            <p className="text-cream/80 text-sm mb-4 text-pretty">
              สมัครรับข่าวสารงานประเพณีและกิจกรรมของวัด
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/50" />
                <Input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus:border-gold"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-brown-dark font-medium"
              >
                สมัครรับข่าวสาร
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-cream" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>© {new Date().getFullYear()} วัดสระเกศราชวรมหาวิหาร สงวนลิขสิทธิ์</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gold transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gold transition-colors">
                ข้อกำหนดการใช้งาน
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
