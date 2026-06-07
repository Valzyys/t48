'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import Carousel from "@/components/carousel"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 1,
    text: 'mulai nonton sekarang',
  },
  title: 'Semua Show, Satu Platform',
  description: 'Team48Live menghadirkan akses live stream theater JKT48 dengan harga terjangkau. Pilih per show atau langganan bulanan untuk akses tak terbatas ke semua pertunjukan.',
  card_1: {
    title: 'Akses Semua Show',
    content: 'Dengan membership bulanan, kamu bisa nonton semua show theater JKT48 tanpa batas. Dari setlist reguler hingga show spesial, semua tersedia di satu tempat.',
    carousel_images: [
      'https://upload.wikimedia.org/wikipedia/id/thumb/6/6a/JKT48_Logo.svg/1200px-JKT48_Logo.svg.png',
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
      'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
      'https://cdn.worldvectorlogo.com/logos/nestjs.svg',
      'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
    ]
  },
  card_2: {
    title: 'Harga Per Show Murah',
    content: 'Tidak mau langganan bulanan? Tenang, kamu tetap bisa nonton per show dengan harga yang sangat bersahabat di kantong. Bayar sesuai kebutuhan, tanpa paksaan.'
  },
  card_3: {
    title: 'Membership Bulanan',
    content: 'Langganan bulanan Team48Live membuka akses ke seluruh show theater JKT48. Cocok buat wota setia yang tidak mau ketinggalan satu show pun.'
  },
  card_4: {
    title: 'Streaming Tanpa Ribet',
    content: 'Cukup daftar, pilih show, dan langsung nonton. Tidak perlu antri tiket fisik atau khawatir kehabisan. Team48Live hadir agar kamu bisa selalu dekat dengan idolamu kapan saja dan di mana saja.',
    image: 'https://framerusercontent.com/images/6jTglLZFhLYMIuOe7EC0QFeykU.png?scale-down-to=512',
  },
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-4">{settings.card_1.content}</p>
            <Carousel images={settings.card_1.carousel_images} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>

        {/* card 4 */}
        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center">
            <div className="space-y-3 md:space-y-5">
              <h3 className="text-xl md:text-title text-black font-medium">{settings.card_4.title}</h3>
              <p>{settings.card_4.content}</p>
            </div>

            <Image className="w-32 my-auto mx-auto" src={settings.card_4.image} alt={settings.card_4.title} width={512} height={512} />
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}
