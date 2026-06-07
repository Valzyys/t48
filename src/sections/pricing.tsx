'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Harga & Paket',
  description: 'Team48Live hadir dengan harga yang bersahabat di kantong. Pilih paket sesuai kebutuhanmu — mulai dari per show, langganan bulanan, hingga jadi reseller.',
  plan_1: {
    planName: 'Per Show',
    price: 'Hubungi Admin',
    description: 'Cocok buat kamu yang mau nonton show tertentu saja tanpa perlu langganan.',
    cta: 'Chat Admin WhatsApp',
    href: 'https://wa.me/6282135963767',
    features: [
      'Akses 1 show pilihan',
      'Streaming kualitas terbaik',
      'Harga terjangkau per show',
      'Konfirmasi cepat via WhatsApp',
      'Tanpa perlu langganan',
    ]
  },
  plan_2: {
    planName: 'Membership Bulanan',
    price: 'Rp 25.000',
    description: 'Akses semua show theater JKT48 tanpa batas selama satu bulan penuh.',
    cta: 'Mulai Berlangganan',
    href: 'https://wa.me/6282135963767',
    features: [
      'Akses semua show theater JKT48',
      'Berlaku selama 1 bulan',
      'Streaming kualitas terbaik',
      'Notifikasi jadwal show terbaru',
      'Harga hemat vs beli per show',
      'Konfirmasi cepat via WhatsApp',
    ]
  },
  plan_3: {
    planName: 'Reseller',
    price: 'Hubungi Admin',
    description: 'Jadilah reseller Team48Live dan dapatkan keuntungan dengan menjual akses live stream sendiri.',
    cta: 'Daftar Jadi Reseller',
    href: 'https://wa.me/6282135963767',
    features: [
      'Jual tiket live stream sendiri',
      'Akses semua show theater JKT48',
      'Margin keuntungan menarik',
      'Support & panduan dari admin',
      'Dashboard reseller eksklusif',
      'Prioritas konfirmasi & support',
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 - Per Show */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white h-full">
            <div className="capitalize text-start text-black font-medium">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-2xl text-black">{settings.plan_1.price}</span>
            </div>
            <a href={settings.plan_1.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="secondary" className="w-full">{settings.plan_1.cta}</Button>
            </a>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>
              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 - Membership Bulanan */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary h-full">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black font-medium">{settings.plan_2.planName}</div>
              <div className="text-xs bg-accent px-2 py-1 rounded-full text-black capitalize">paling populer</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_2.price}</span>
              <span className="text-sm">/bulan</span>
            </div>
            <a href={settings.plan_2.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">{settings.plan_2.cta}</Button>
            </a>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>
              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 - Reseller */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white h-full">
            <div className="capitalize text-start text-black font-medium">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-2xl text-black">{settings.plan_3.price}</span>
            </div>
            <a href={settings.plan_3.href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="secondary" className="w-full">{settings.plan_3.cta}</Button>
            </a>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>
              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
