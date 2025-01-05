export interface Author {
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: Author;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Science of Sports Recovery",
    slug: "science-of-sports-recovery",
    excerpt: "Modern techniques and technologies helping athletes recover faster and perform better.",
    content: `
      Recovery in sports has evolved significantly over the past decade. Athletes now have access to cutting-edge technologies and scientifically-proven methods to optimize their recovery process.

      ## The Importance of Recovery

      Professional athletes understand that proper recovery is just as important as training itself. Without adequate recovery, the body cannot adapt to the stress of training and performance plateaus.

      ## Modern Recovery Techniques

      ### 1. Cryotherapy
      Whole-body cryotherapy exposes athletes to extremely cold temperatures for short periods, reducing inflammation and accelerating recovery.

      ### 2. Compression Therapy
      Dynamic compression systems help improve blood flow and reduce muscle soreness after intense training sessions.

      ### 3. Sleep Optimization
      Athletes are now using sleep tracking technology and implementing strict sleep hygiene protocols to enhance recovery.

      ## The Future of Recovery

      As technology continues to advance, we can expect even more innovative recovery methods to emerge. The key is finding the right combination of techniques that works for each individual athlete.
    `,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=450&fit=crop",
    category: "Training",
    tags: ["Recovery", "Sports Science", "Technology", "Training"],
    author: {
      name: "Alex Thompson",
      avatar: "https://i.pravatar.cc/150?u=alex",
      bio: "Sports Science researcher and former professional athlete specializing in recovery techniques."
    },
    date: "Mar 15, 2024",
    readTime: "5 min"
  },
  {
    id: '2',
    title: "Women's Sports Revolution",
    slug: "womens-sports-revolution",
    excerpt: "How female athletes are changing the landscape of professional sports.",
    content: `
      The landscape of professional sports is undergoing a dramatic transformation, led by remarkable female athletes who are breaking barriers and reshaping the industry.

      ## Breaking Barriers

      Female athletes are achieving unprecedented success across all sports, from soccer to basketball, tennis to motorsports. This success is not just about winning; it's about changing perceptions and inspiring future generations.

      ## Equal Pay Movement

      ### The Fight for Equality
      Recent years have seen significant progress in the fight for equal pay in sports, with several major organizations implementing equal prize money and salaries.

      ### Commercial Success
      Women's sports are experiencing record-breaking viewership and sponsorship deals, proving the commercial viability of women's athletics.

      ## The Road Ahead

      While progress has been made, there's still work to be done. The continued success of women's sports depends on sustained support from fans, media coverage, and corporate sponsorship.
    `,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=450&fit=crop",
    category: "Features",
    tags: ["Women's Sports", "Equality", "Professional Sports"],
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      bio: "Sports journalist and advocate for women's athletics with over a decade of experience covering professional sports."
    },
    date: "Mar 14, 2024",
    readTime: "6 min"
  },
  {
    id: '3',
    title: "The Future of E-Sports",
    slug: "future-of-esports",
    excerpt: "Virtual competitions are redefining what it means to be an athlete.",
    content: `
      E-sports has emerged as a global phenomenon, challenging traditional definitions of athleticism and competition while creating new opportunities for athletes and entertainers alike.

      ## The Rise of Competitive Gaming

      What started in basement LAN parties has evolved into sold-out arena events with millions of viewers worldwide. The professional gaming industry continues to grow at an unprecedented rate.

      ## Professional Gaming as a Career

      ### Training and Preparation
      Professional gamers now train with the same intensity as traditional athletes, including physical conditioning, mental preparation, and strategic analysis.

      ### Economic Impact
      The e-sports industry has created numerous career opportunities beyond professional playing, from coaching to content creation and event management.

      ## The Future Landscape

      As technology advances, particularly in virtual and augmented reality, the line between physical and digital sports continues to blur, creating exciting new possibilities for competition and entertainment.
    `,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    category: "E-Sports",
    tags: ["E-Sports", "Gaming", "Technology", "Competition"],
    author: {
      name: "Mike Rodriguez",
      avatar: "https://i.pravatar.cc/150?u=mike",
      bio: "E-sports analyst and former professional gamer with expertise in competitive gaming ecosystems."
    },
    date: "Mar 13, 2024",
    readTime: "4 min"
  }
];