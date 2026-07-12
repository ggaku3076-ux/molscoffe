import { Wifi, Plug, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function WfcDashboard() {
  const features = [
    {
      icon: Wifi,
      title: "Koneksi Wi-Fi Ultra Cepat",
      description: "Kecepatan hingga 100 Mbps dengan jangkauan stabil di seluruh area indoor maupun semi-outdoor.",
    },
    {
      icon: Plug,
      title: "Colokan Listrik Melimpah",
      description: "Setiap meja dilengkapi dengan akses stopkontak yang aman untuk mendukung laptop dan perangkat kerja Anda.",
    },
    {
      icon: Sparkles,
      title: "Fasilitas Lengkap & Nyaman",
      description: "Dilengkapi Musholla bersih di dalam area kafe, toilet higienis, dan area parkir kendaraan yang luas.",
    },
    {
      icon: ShieldCheck,
      title: "Ambiance Kondusif",
      description: "Tingkat kebisingan terkontrol dengan alunan musik santai, sangat pas untuk fokus bekerja atau berdiskusi.",
    },
  ];

  return (
    <section 
      id="wfc" 
      className="bg-brand-brown-bg pt-32 pb-16 md:pt-40 md:pb-24 border-y border-brand-brown/10"
      aria-labelledby="wfc-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-brown uppercase">
            KERJA NYAMAN DARI KAFE
          </span>
          <h2 
            id="wfc-title" 
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
          >
            Fasilitas Lengkap Pendukung WFC Anda
          </h2>
          <p className="text-base text-brand-dark/70 mt-4">
            Kami memahami kenyamanan bekerja jarak jauh. Mols Coffe Surabaya didesain khusus agar produktivitas Anda tetap maksimal sambil menikmati secangkir kopi premium.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-brand-brown/10 hover:border-brand-brown transition-all duration-300 flex flex-col items-start gap-4 shadow-sm"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-brown-bg border border-brand-brown/20 flex items-center justify-center text-brand-brown">
                  <IconComponent className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{feature.title}</h3>
                <p className="text-sm text-brand-dark/60 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white border-2 border-brand-brown/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 rounded-full bg-brand-brown-bg flex items-center justify-center text-brand-brown shrink-0">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Butuh Tempat Meeting Privat?</h4>
              <p className="text-xs text-brand-dark/60">Hubungi tim kami untuk reservasi ruang VIP dengan proyektor dan fasilitas lengkap.</p>
            </div>
          </div>
          <a
            href="#rsvp"
            className="rounded bg-brand-brown px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-brown-light transition-colors shrink-0"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </section>
  );
}
