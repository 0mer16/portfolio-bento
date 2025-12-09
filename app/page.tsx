import BentoGrid from '@/components/BentoGrid'
import BentoCard from '@/components/BentoCard'

export default function Home() {
  return (
    <BentoGrid>
      {/* Hero Card - 2x2 */}
      <BentoCard span="2x2" className="flex flex-col justify-center">
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold mb-4">
          Full-Stack
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-main)] to-[var(--accent-playful)]">
            Developer
          </span>
        </h1>
        <p className="text-lg text-gray-400">
          Crafting high-performance web experiences
        </p>
      </BentoCard>

      {/* Stack Card - 1x1 */}
      <BentoCard span="1x1" className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">⚡</div>
          <p className="text-sm text-gray-400">Tech Stack</p>
        </div>
      </BentoCard>

      {/* Availability Card - 1x1 */}
      <BentoCard span="1x1" className="flex items-center justify-center">
        <div className="text-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
          <p className="text-sm font-medium">Available for Work</p>
        </div>
      </BentoCard>

      {/* Trust/Stats Card - 2x1 */}
      <BentoCard span="2x1" className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold text-[var(--accent-main)]">100%</div>
          <p className="text-sm text-gray-400">Job Success</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-[var(--accent-playful)]">50+</div>
          <p className="text-sm text-gray-400">Projects</p>
        </div>
        <div>
          <div className="text-2xl">🏆</div>
          <p className="text-sm text-gray-400">Top Rated</p>
        </div>
      </BentoCard>

      {/* Project Card 1 - 1x2 */}
      <BentoCard span="1x2" className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="h-full flex flex-col justify-between">
          <div>
            <span className="text-xs px-2 py-1 bg-[var(--accent-main)] rounded-full">SHOPIFY</span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mt-4">
              E-commerce Store
            </h3>
          </div>
          <div className="text-sm text-gray-400">
            View Case Study →
          </div>
        </div>
      </BentoCard>

      {/* Project Card 2 - 1x2 */}
      <BentoCard span="1x2" className="bg-gradient-to-br from-purple-500/10 to-pink-500/10">
        <div className="h-full flex flex-col justify-between">
          <div>
            <span className="text-xs px-2 py-1 bg-[var(--accent-playful)] rounded-full">ENGINEERING</span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mt-4">
              SaaS Dashboard
            </h3>
          </div>
          <div className="text-sm text-gray-400">
            View Case Study →
          </div>
        </div>
      </BentoCard>

      {/* Contact Card - 2x1 */}
      <BentoCard span="2x1" className="flex items-center justify-center cursor-pointer hover:bg-[var(--accent-main)]/10 transition-colors">
        <div className="text-center">
          <div className="text-2xl mb-2">📧</div>
          <p className="font-medium">Get in Touch</p>
          <p className="text-sm text-gray-400">Click to copy email</p>
        </div>
      </BentoCard>
    </BentoGrid>
  );
}

