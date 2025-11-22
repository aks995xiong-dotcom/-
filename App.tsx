import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  HeartHandshake, 
  Users, 
  ChevronRight, 
  Menu,
  X,
  Heart,
  ArrowLeft,
  Smile,
  Search,
  Utensils,
  MoveRight,
  Ear,
  Gift,
  ShieldCheck,
  MessageSquareHeart,
  CalendarHeart,
  Share2,
  Check
} from 'lucide-react';
import { CATEGORIES } from './constants';
import { Category, CategoryData } from './types';
import { AiAssistant } from './components/AiAssistant';

// --- Icon Mapping Helper ---
// Since we store icon names in strings in constants, we need a map to render them.
const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={24} />,
  Search: <Search size={24} />,
  Smile: <Smile size={24} />,
  MapPin: <MapPin size={24} />,
  Utensils: <Utensils size={24} />,
  MoveRight: <MoveRight size={24} />,
  HeartHandshake: <HeartHandshake size={24} />,
  Ear: <Ear size={24} />,
  Gift: <Gift size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  MessageSquareHeart: <MessageSquareHeart size={24} />,
  CalendarHeart: <CalendarHeart size={24} />,
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Navigation items
  const navItems = [
    { id: Category.CHAT, label: '聊天技巧', icon: <MessageCircle size={20} /> },
    { id: Category.DATE, label: '约会指南', icon: <MapPin size={20} /> },
    { id: Category.COMFORT, label: '安慰艺术', icon: <HeartHandshake size={20} /> },
    { id: Category.RELATIONSHIP, label: '长期相处', icon: <Users size={20} /> },
  ];

  const handleCategoryClick = (id: Category) => {
    setActiveCategory(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const renderHome = () => (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 text-white p-8 md:p-16 text-center shadow-lg mx-4 md:mx-0 mt-4 md:mt-8">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            让爱，不再迷茫
          </h1>
          <p className="text-lg md:text-xl text-rose-100 mb-8 leading-relaxed">
            无论是初次心动，还是长期相守。我们提供全方位的恋爱指南，
            助你在亲密关系中找到自信与幸福。
          </p>
          <button 
            onClick={() => handleCategoryClick(Category.CHAT)}
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors shadow-md"
          >
            开始学习
          </button>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-900 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-2">
          <Heart className="text-rose-500 fill-rose-500" size={24} />
          精选课程
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navItems.map((item) => {
            const categoryData = CATEGORIES[item.id];
            return (
              <div 
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 hover:border-rose-100 flex flex-col items-center text-center"
              >
                <div className={`p-4 rounded-full mb-4 transition-colors duration-300 ${
                  item.id === Category.CHAT ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                  item.id === Category.DATE ? 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' :
                  item.id === Category.COMFORT ? 'bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' :
                  'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                }`}>
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{categoryData.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{categoryData.description}</p>
                <div className="mt-auto text-rose-500 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  查看详情 <ChevronRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Feature Highlight: AI */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-rose-100 flex flex-col md:flex-row items-center gap-8">
           <div className="flex-1 space-y-4">
             <div className="inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">AI 智能顾问</div>
             <h2 className="text-3xl font-bold text-slate-800">你的24小时恋爱军师</h2>
             <p className="text-slate-600 leading-relaxed">
               遇到突发情况不知道怎么回消息？约会冷场了怎么办？
               点击右下角的按钮，我们的AI助手随时为你提供个性化建议，
               就像一位懂你的老朋友一直在身边。
             </p>
           </div>
           <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Abstract visual for AI */}
              <div className="absolute inset-0 bg-[url('https://picsum.photos/800/800?random=20')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-3000">
                <MessageCircle size={48} className="text-rose-500" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );

  const renderCategoryView = (data: CategoryData) => (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fadeIn">
      <button 
        onClick={() => setActiveCategory(null)}
        className="flex items-center text-slate-500 hover:text-rose-600 mb-6 transition-colors font-medium"
      >
        <ArrowLeft size={20} className="mr-1" /> 返回首页
      </button>

      <div className="mb-10 text-center">
        <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 ${data.color.split(' ')[0]} ${data.color.split(' ')[1]} bg-opacity-50`}>
          LoveGuide 课程
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{data.title}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {data.items.map((item, index) => (
          <div 
            key={item.id}
            className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm text-rose-600">
                 {iconMap[item.iconName] || <Heart size={24} />}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action at bottom of content */}
      <div className="mt-16 text-center bg-slate-100 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-slate-700 mb-2">还有具体问题？</h3>
        <p className="text-slate-500 mb-6">每个人的情况都是独一无二的，问问 AI 顾问怎么看。</p>
        <button 
          // Just a visual trigger, the actual FAB is always there.
          // We could make this open the chat, but the FAB is sufficient.
          className="text-rose-500 font-bold hover:underline cursor-default"
        >
          点击右下角图标开始咨询
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setActiveCategory(null)}
          >
            <div className="bg-rose-500 text-white p-1.5 rounded-lg">
              <Heart size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">LoveGuide</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === item.id 
                    ? 'bg-rose-50 text-rose-600' 
                    : 'text-slate-600 hover:text-rose-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Separator */}
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            {/* Share Button (Desktop) */}
            <button
              onClick={handleShare}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isCopied 
                ? 'bg-green-100 text-green-700' 
                : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="分享网页"
            >
              {isCopied ? <Check size={18} /> : <Share2 size={18} />}
              {isCopied ? '已复制' : '分享'}
            </button>
          </nav>

          {/* Mobile Right Side (Share + Menu) */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              className={`p-2 rounded-full ${isCopied ? 'text-green-600 bg-green-50' : 'text-slate-600'}`}
              onClick={handleShare}
            >
              {isCopied ? <Check size={20} /> : <Share2 size={20} />}
            </button>
            <button 
              className="p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg animate-fadeIn">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleCategoryClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeCategory === item.id 
                      ? 'bg-rose-50 text-rose-600 font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className={activeCategory === item.id ? 'text-rose-500' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {activeCategory ? renderCategoryView(CATEGORIES[activeCategory]) : renderHome()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2024 LoveGuide. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for better relationships.</p>
        </div>
      </footer>

      {/* AI Assistant Component */}
      <AiAssistant />
    </div>
  );
};

export default App;