"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient"></div>
      
      <main className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="animate-bounce-slow">
            <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-4 gradient-text animate-glow">
              ayo hold up 💀
            </h1>
            <p className="text-2xl sm:text-4xl font-bold text-foreground/90 mb-2">
              u typed it wrong fr fr no cap
            </p>
          </div>
          
          <div className="space-y-4 text-lg sm:text-xl text-foreground/70">
            <p className="animate-slide-in" style={{animationDelay: "0.2s"}}>
              bro really said &ldquo;youtubemusicapp&rdquo; 😭😭😭
            </p>
            <p className="animate-slide-in" style={{animationDelay: "0.4s"}}>
              that aint it chief, u lookin for YouTube Music frfr
            </p>
            <p className="animate-slide-in text-sm sm:text-base" style={{animationDelay: "0.6s"}}>
              (we all make mistakes in the heat of passion jimbo)
            </p>
          </div>
          
          <div className="pt-8 animate-slide-up" style={{animationDelay: "0.8s"}}>
            <a
              href="https://music.youtube.com"
              className="inline-block group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <button className="relative px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white font-black text-xl sm:text-2xl rounded-full transform transition-all duration-300 hover:scale-110 hover:rotate-1 active:scale-95 shadow-2xl">
                <span className="flex items-center gap-3">
                  <span>TAKE ME TO THE REAL ONE</span>
                  <span className="text-3xl animate-wiggle">🔥</span>
                </span>
              </button>
            </a>
          </div>
          
          <div className="pt-12 space-y-2 text-sm text-foreground/40">
            <p className="animate-fade-in" style={{animationDelay: "1.2s"}}>
              nah but lowkey this domain go hard tho 💯
            </p>
            <p className="animate-fade-in" style={{animationDelay: "1.4s"}}>
              youtube music hits different on god 🎵
            </p>
          </div>
        </div>
        
        <div className="absolute -top-20 -left-20 text-[200px] opacity-5 rotate-12 select-none">
          💀
        </div>
        <div className="absolute -bottom-20 -right-20 text-[200px] opacity-5 -rotate-12 select-none">
          🤡
        </div>
      </main>
    </div>
  );
}