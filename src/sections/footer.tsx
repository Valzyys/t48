'use client'
import { Instagram, Youtube, MessageCircle } from "lucide-react"
import Link from "next/link"

const settings = {
  links: [
    { title: 'Beranda', href: '#' },
    { title: 'Fitur', href: '#features' },
    { title: 'Jadwal Show', href: '#jadwal' },
    { title: 'Harga', href: '#pricing' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Hubungi Kami', href: 'https://wa.me/6282135963767' },
  ],
  socialMedia: [
    { title: 'Instagram', icon: Instagram, href: 'https://instagram.com/team48live' },
    { title: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { title: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/6282135963767' },
  ],
  copyright: '© 2026 Team48Live. All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Nav Links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href}>{link.title}</Link>
        ))}
      </div>
      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((social, index) => (
          <Link title={social.title} key={index} href={social.href} target="_blank" rel="noopener noreferrer">
            <social.icon />
          </Link>
        ))}
      </div>
      {/* copyright */}
      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}
