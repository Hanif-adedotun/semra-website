export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
};

export type Comment = {
  id: string;
  articleId: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "The Importance of Seeking Knowledge in Islam",
    excerpt:
      "Exploring the Islamic perspective on education and the pursuit of knowledge...",
    content: `The Prophet Muhammad (peace be upon him) said: "Seeking knowledge is obligatory upon every Muslim." This profound statement emphasizes the significance of education in Islam...

    Knowledge in Islam is not limited to religious studies but encompasses all beneficial knowledge that contributes to human welfare and understanding of Allah's creation...`,
    author: {
      name: "Dr. Ahmad Hassan",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&h=630&fit=crop",
    category: "Education",
    publishedAt: "2024-03-20",
    readingTime: "5 min read",
    tags: ["Knowledge", "Education", "Islam"],
  },
  {
    id: "2",
    title: "Understanding the Five Pillars of Islam",
    excerpt: "A comprehensive guide to the fundamental principles of Islam...",
    content: `The Five Pillars of Islam form the foundation of Muslim life. These pillars are Shahada (Declaration of Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage)...

    Each pillar represents a unique aspect of worship and submission to Allah...`,
    author: {
      name: "Sarah Abdullah",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&h=630&fit=crop",
    category: "Fundamentals",
    publishedAt: "2024-03-19",
    readingTime: "8 min read",
    tags: ["Pillars of Islam", "Basics", "Faith"],
  },
  {
    id: "3",
    title: "Understanding the Five Pillars of Islam",
    excerpt: "A comprehensive guide to the fundamental principles of Islam...",
    content: `The Five Pillars of Islam form the foundation of Muslim life. These pillars are Shahada (Declaration of Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage)...

    Each pillar represents a unique aspect of worship and submission to Allah...`,
    author: {
      name: "Sarah Abdullah",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&h=630&fit=crop",
    category: "Fundamentals",
    publishedAt: "2024-03-19",
    readingTime: "8 min read",
    tags: ["Pillars of Islam", "Basics", "Faith"],
  },
  {
    id: "4",
    title: "Understanding the Five Pillars of Islam",
    excerpt: "A comprehensive guide to the fundamental principles of Islam...",
    content: `The Five Pillars of Islam form the foundation of Muslim life. These pillars are Shahada (Declaration of Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage)...

    Each pillar represents a unique aspect of worship and submission to Allah...`,
    author: {
      name: "Sarah Abdullah",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    coverImage:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&h=630&fit=crop",
    category: "Fundamentals",
    publishedAt: "2024-03-19",
    readingTime: "8 min read",
    tags: ["Pillars of Islam", "Basics", "Faith"],
  },
];
