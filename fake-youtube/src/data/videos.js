const allVideos = [
  {
    id: '1',
    videoLink: "https://www.youtube.com/embed/nvNgCaqvgdY",
    title: 'Yeet Vines',
    author: 'Black Goku',
    date: 'Jun 18, 2018',
    comments: [
      {
        user: 'Adel Berry',
        content: 'Who was bored and typed "YEET"',
      },
      {
        user: 'Clynncoln McLoud',
        content: 'I like the Part where it says "YEET"',
      }
      ],
    category: 'People and Blogs',
    views: 34567,
    likes: 39567,
    dislikes: 279
  },
  {
    id: '2',
    videoLink: "https://www.youtube.com/embed/N733Ofj2cVQ",
    title: 'Pickle Suprise',
    author: 'AusRockALT',
    date: 'Sep 10, 2018',
    comments: [
      {
        user: 'The Mowens',
        content: 'How the hell did you find such a high quality version?',
      },
      {
        user: 'ydoomenaud',
        content: 'Sesame Street was different, then.'
      },
      {
        user: 'minh',
        content: "Wheres the Pickle? That's the srprise!"
      }
      ],
    category: 'Sports',
    views: 30585,
    likes: 480,
    dislikes: 22
  },
  {
    id: '3',
    videoLink: "https://www.youtube.com/embed/OQSNhk5ICTI",
    title: 'Yosemitebear Mountain Double Rainbow 1-8-10',
    author: 'Yosemitebear62',
    date: 'Jan 8, 2010',
    comments: [
      {
        user: 'Yosemitebear62',
        content: 'One of the happiest moments of the decade, “when classic YouTube peaked”.'
      },
      {
        user: 'Aiyanna Cook Soos',
        content: 'a triple rainbow would kill this guy'
      },
      {
        user: 'YUNG Zuzu',
        content: 'This man reached Nirvana'
      }
      ],
    category: 'People and Blogs',
    views: 46057093,
    likes: 242305,
    dislikes: 92456
  },
  {
    id: '4',
    videoLink: "https://www.youtube.com/embed/6NXnxTNIWkc",
    title: "4 Non Blondes - What's Up (Official Video)",
    author: '4NonBlondesVEVO',
    date: "Feb 23, 2011",
    comments: [
      {
        user: "Tio Clotildo",
        content: "you know you are maturing in life when these songs start to make sense."
      },
      {
        user: "Charlie Dao",
        content: "Lady gaga brought me here"
      }
      ],
    category: 'Music',
    views: 732212719,
    likes: 2809345,
    dislikes: 152346
  },
  {
    id: '5',
    videoLink: "https://www.youtube.com/embed/VF9-sEbqDvU",
    title: 'MARCEL THE SHELL WITH SHOES ON',
    author: 'Dean Fleischer-Camp',
    date: "Oct 16, 2010",
    comments: [
      {
        user: "Kelly Wurster",
        content: "idea for the doritos super bowl commercial......30 seconds of marcel the shell hangliding"
      },
      {
        user: "Retro Dreams",
        content: "I got sad when Marcel had to drag Alan the piece of lint around instead of having a dog. 'I love you! Come on.'"
      },
      {
        user: "sandra jin",
        content: "Guess what I use as a pen?"
      }
      ],
    category: 'Film and Animation',
    views: 30434245,
    likes: 174567,
    dislikes: 44567
  },
  {
    id: '6',
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: 'Rick Astley - Never Gonna Give You Up (Video)',
    author: 4,
    dateTime: "Oct 22, 1988",
    comments: [
      {
        user: "It’s Only Devon",
        content: "There are two kinds of people in this world: those who come here on purpose, and those who don't"
      },
      {
        user: "NJMProductions",
        content: "I got an ad before this. Almost got rickrolled."
      },
      {
        user: "Rhys Kaplan",
        content: "I put this on a playlist with 150+ songs and everytime it plays i accidentally rickroll myself"
      }
      ],
    category: 'Music',
    views: 566934452,
    likes: 3856794,
    dislikes: 167567
  }
];

export const getAll = () => allVideos;
