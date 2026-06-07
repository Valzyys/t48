'use client'
import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Pertanyaan yang Sering Ditanyakan',
  faqs: [
    {
      question: 'Apa itu Team48Live?',
      answer: 'Team48Live adalah platform layanan live stream theater JKT48 dengan harga terjangkau. Kami menyediakan akses streaming show theater JKT48 baik per show maupun via membership bulanan.',
    },
    {
      question: 'Bagaimana cara membeli tiket per show?',
      answer: 'Cukup hubungi admin kami via WhatsApp di wa.me/6282135963767. Admin akan memandu proses pembelian dan konfirmasi akses streaming dengan cepat.',
    },
    {
      question: 'Apa keuntungan membership bulanan?',
      answer: 'Dengan membership bulanan seharga Rp 25.000, kamu bisa menonton semua show theater JKT48 tanpa batas selama satu bulan penuh. Jauh lebih hemat dibanding beli per show satu-satu.',
    },
    {
      question: 'Bagaimana cara menjadi reseller Team48Live?',
      answer: 'Hubungi admin kami via WhatsApp. Sebagai reseller, kamu bisa menjual akses live stream sendiri dan mendapatkan margin keuntungan yang menarik. Admin akan memberikan panduan lengkap.',
    },
    {
      question: 'Apakah streaming bisa ditonton di HP?',
      answer: 'Ya, streaming Team48Live bisa ditonton di HP, tablet, maupun PC/laptop selama terhubung ke internet. Tidak perlu install aplikasi tambahan.',
    },
    {
      question: 'Bagaimana jika show yang saya beli mengalami gangguan teknis?',
      answer: 'Jika terjadi gangguan teknis dari pihak kami, hubungi admin WhatsApp segera dan kami akan membantu menyelesaikan masalah atau memberikan solusi terbaik.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-left">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}
