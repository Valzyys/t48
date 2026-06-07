'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Calendar, Clock, Users } from "lucide-react"

interface IDNShow {
  slug: string
  title: string
  image_url: string
  status: string
  scheduled_at: number
  live_at: number
  idnliveplus: {
    liveroom_price: number
    currency_code: string
    description: string
  }
  creator: {
    name: string
    image_url: string
  }
}

const settings = {
  badge: {
    number: 3,
    text: 'JADWAL THEATER',
  },
  title: 'Show JKT48 Mendatang',
  description: 'Jangan sampai ketinggalan show theater JKT48 favoritmu. Berikut jadwal live stream yang bisa kamu tonton langsung di Team48Live.',
}

function formatDate(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatTime(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatPrice(price: number, currency: string) {
  if (currency === 'gold') return `${price} Gold`
  return `Rp ${price.toLocaleString('id-ID')}`
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; class: string }> = {
    scheduled: { label: 'Segera', class: 'bg-blue-100 text-blue-600' },
    live: { label: 'LIVE', class: 'bg-red-100 text-red-600 animate-pulse' },
    ended: { label: 'Selesai', class: 'bg-gray-100 text-gray-500' },
  }
  const s = map[status] ?? { label: status, class: 'bg-gray-100 text-gray-500' }
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${s.class}`}>
      {s.label}
    </span>
  )
}

export default function Features3() {
  const [shows, setShows] = useState<IDNShow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://v5.jkt48connect.com/api/jkt48/idnplus?apikey=JKTCONNECT')
      .then(res => res.json())
      .then(json => {
        setShows(json.data ?? [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
          {settings.title}
        </h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
        {settings.description}
      </SlideEffect>

      {/* Cards */}
      {loading && (
        <div className="text-center py-12 text-gray-400">Memuat jadwal show...</div>
      )}

      {error && (
        <div className="text-center py-12 text-red-400">Gagal memuat jadwal. Coba lagi nanti.</div>
      )}

      {!loading && !error && shows.length === 0 && (
        <div className="text-center py-12 text-gray-400">Belum ada jadwal show tersedia.</div>
      )}

      {!loading && !error && shows.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {shows.map((show, i) => (
            <SlideEffect
              key={show.slug}
              direction="top"
              delay={i * 0.15}
              className="col-span-1 h-full"
              isSpring={false}
            >
              <Card className="text-left flex flex-col gap-4 h-full">
                {/* Thumbnail */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={show.image_url}
                    alt={show.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <StatusBadge status={show.status} />
                  </div>
                </div>

                {/* Creator */}
                <div className="flex items-center gap-2">
                  <Image
                    src={show.creator.image_url}
                    alt={show.creator.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-black">{show.creator.name}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-title text-black font-medium leading-snug">
                  {show.title}
                </h3>

                {/* Date & Time */}
                <div className="flex flex-col gap-1 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{formatDate(show.scheduled_at)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{formatTime(show.scheduled_at)} WIB</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-gray-500">Harga Tiket</span>
                  <span className="font-semibold text-black">
                    {formatPrice(show.idnliveplus.liveroom_price, show.idnliveplus.currency_code)}
                  </span>
                </div>
              </Card>
            </SlideEffect>
          ))}
        </div>
      )}
    </div>
  )
}
