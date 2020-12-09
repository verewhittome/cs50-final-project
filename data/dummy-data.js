import Category from '../models/category';
import Lesson from '../models/lesson';

export const CATEGORIES = [
  new Category('c1', 'English', '#f5428d'),
  new Category('c2', 'Maths', '#f54242'),
  new Category('c3', 'Physics', '#f5a442'),
  new Category('c4', 'History', '#f5d142'),
  new Category('c5', 'Geography', '#368dff'),
  new Category('c6', 'Chemistry', '#41d95d'),
  new Category('c7', 'Biology', '#9eecff'),
  new Category('c8', 'Theology', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Art', '#47fced')
];

export const LESSONS = [
  new Lesson(
    'm1',
    ['c1'],
    'Hamlet',
    'GCSE',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bernhardt_Hamlet2.jpg/1200px-Bernhardt_Hamlet2.jpg',
    2,
    [
      '1 skull',
      '4 books'
    ],
    [
      "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 30,557 words. Set in Denmark, the play depicts Prince Hamlet and his revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother."
    ],
    true,
    false,
    false,
    false,
    false
  ),

  new Lesson(
    'm2',
    ['c7'],
    'My Body',
    'Kindergarten',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/my-body__parts-human-body-pdf.png',
    1,
    'https://www.education.com/download/lesson-plan/my-body/my-body.pdf',
    'Students will be able to identify some common body parts.',
    false,
    false,
    true,
    false,
    false
  ),

  new Lesson(
    'm3',
    ['c2'],
    'number-recognition-1-10',
    'Pre-School',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/number-recognition-1-10__number-tracing-one-kindergarten-pdf.png',
    1,
    'https://www.education.com/download/lesson-plan/number-recognition-1-10/number-recognition-1-10.pdf',
    'Students will be able to recognise numbers 1-10',
    false,
    false,
    true,
    false,
    false
  ),

  new Lesson(
    'm4',
    ['c3'],
    'Solids Liquids and Gases',
    'Primary School',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/states-of-matter__solid-liquid-gas-pdf.png',
    1,
    'https://www.education.com/download/lesson-plan/states-of-matter/states-of-matter.pdf',
    'Students will be able to differentiate solids, liquids and gases.',
    false,
    false,
    true,
    false,
    false
  ),

  new Lesson(
    'm5',
    ['c10'],
    'Romare Bearden Self Portraits',
    'Fifth Grade',
    'simple',
    'https://miro.medium.com/max/2960/0*JKBFoCi-0hhhYYPc.jpg',
    1,
    'https://www.education.com/download/lesson-plan/romare-bearden-self-portraits/romare-bearden-self-portraits.pdf',
    'Students will be able to identify symbolism in Portraits.',
    false,
    false,
    false,
    false,
    true,
  ),

  new Lesson(
    'm6',
    ['c7'],
    'Respiratory System',
    'Fifth Grade',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/respiratory-system__your-respiratory-system-pdf.png',
    1,
    'https://www.education.com/download/lesson-plan/respiratory-system/respiratory-system.pdf',
    'Students will be able to identify the parts of the respiratory system. Students will be able to describe the functions of each part of the respiratory system.',
    false,
    false,
    false,
    false,
    true
  ),

  new Lesson(
    'm7',
    ['c4'],
    'Learning about W.E.B. Dubois',
    'Fourth Grade',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/learning-about-web-dubois__file_2490118-pdf.png',
    10,
    'https://www.education.com/download/lesson-plan/learning-about-web-dubois/learning-about-web-dubois.pdf',
    "Second and third graders are introduced to the writer, sociologist, and civil rights advocate W.E.B. Du Bois with this engaging lesson plan. In Learning About W.E.B. Du Bois, children will watch a video and read a piece of informational writing about this important change-maker, explore the word meaning of important terms such as 'discrimination' and 'equal rights,' and work in groups to create informational posters using what they've learned from the video, text, and additional research.",
    false,
    false,
    false,
    true,
    false

  ),

  new Lesson(
    'm8',
    ['c5'],
    'Landforms',
    'Fourth Grade',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/the-language-of-landforms__file_569506-pdf.png',
    1,
    'https://www.education.com/download/lesson-plan/the-language-of-landforms/the-language-of-landforms.pdf',
    'Students will be able to identify landforms.',
    false,
    false,
    false,
    true,
    false
  ),

  new Lesson(
    'm9',
    ['c1'],
    'Parts of Speech that describe',
    'Fourth Grade',
    'simple',
    'https://cdn.education.com/files/static/lesson-plan-page/thumbnails/el-support-lesson-parts-of-speech-that-describe__file_1913182-pdf.png',
    1,
    'https://www.education.com/download/lesson-plan/el-support-lesson-parts-of-speech-that-describe/el-support-lesson-parts-of-speech-that-describe.pdf',
    'Students will be able to name and use articles, prepositions, adverbs, and superlative adjectives.',
    false,
    false,
    false,
    true,
    false,
  ),
  new Lesson(
    'm10',
    ['c9'],
    'Chinese numbers 1-10',
    'All levels',
    'simple',
    'https://cdn.education.com/worksheet-image/2483108/learn-chinese-writing-numbers-1.gif',
    1,
    'https://www.education.com/download/worksheet/174601/learn-chinese-writing-numbers-1-10.pdf',
    "Children learn the correct stroke order for numbers 1–10 in Chinese with this two-page practice worksheet and template. On the first page, Chinese language learners are introduced to the correct stroke order for writing each number, along with its Pinyin form. On the second page, children use the template to practice writing the numbers on their own as they say them out loud. Designed for beginning Mandarin learners of all ages, this worksheet, Learn Chinese: Writing Numbers 1-10, is a hands-on way to introduce kids to numbers and characters." ,
    true,
    true,
    true,
    true
  ),
];
