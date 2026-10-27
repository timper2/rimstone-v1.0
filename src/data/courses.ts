import type { RouteId } from '@/lib/routes';

export interface CourseLevel {
  name: string;
  meta: string;
  agency?: string;
  description?: string;
  points: string[];
}

export interface CoursePhase {
  name: string;
  description?: string;
  points: string[];
}

export interface CourseModule {
  heading?: string;
  intro?: string;
  title: string;
  timeframe?: string;
  subLabel?: string;
  description?: string;
  phases: CoursePhase[];
}

export interface CourseStat {
  label: string;
  value: string;
}

export interface CoursePillar {
  title: string;
  text: string;
}

export interface CourseContent {
  id: RouteId;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImagePosition?: string;
  heroImageRotate?: number;
  heroImageShiftX?: number;
  heroImageZoom?: number;
 heroLockAspect?: boolean;
  cardImage?: string;
  intro: string[];
  stats: CourseStat[];
  pillars: CoursePillar[];
  levels: CourseLevel[];
  levelsHeading?: string;
  levelsIntro?: string;
  levelsCompact?: boolean;
  module?: CourseModule;
  gallery: { src: string; caption: string }[];
  prerequisites: string[];
}

export const COURSES: Record<'sidemount' | 'cave' | 'technical' | 'rebreather', CourseContent> = {
  sidemount: {
    id: 'sidemount',
    eyebrow: 'Configuration mastery',
    title: 'Sidemount Diving',
    subtitle: 'Streamlined, balanced and self-sufficient diving with cylinders mounted at your sides.',
    heroImage: '/images/sidemount-enhanced.jpg',
    heroImagePosition: 'center 22%',
    heroImageZoom: 1,
 heroLockAspect: true,
    cardImage:
      'https://images.pexels.com/photos/31493483/pexels-photo-31493483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: [
      'Sidemount transforms how you move through the water. By carrying your cylinders alongside your body rather than on your back, you gain a lower profile, superb trim and independent access to every gas source you carry.',
      'These courses build the fine motor skills and mindset that make sidemount feel effortless: valve drills, bungee routing, precise buoyancy and a fully redundant approach to gas management that carries directly into overhead and technical environments.',
    ],
    stats: [
      { label: 'Format', value: 'Technical' },
      { label: 'Cylinders', value: '2 independent' },
      { label: 'Typical duration', value: '2 - 3 days' },
      { label: 'Min. certification', value: 'Open Water' },
    ],
    pillars: [
      {
        title: 'Perfect trim',
        text: 'Dial in a flat, horizontal position that protects delicate environments and reduces effort on every kick.',
      },
      {
        title: 'Gas redundancy',
        text: 'Two fully independent cylinders mean a genuine bail-out option always stays within reach.',
      },
      {
        title: 'Adaptable rigging',
        text: 'Learn to tune harness, bungees and clips so the system fits your body and the dive.',
      },
    ],
    levels: [],
    module: {
      title: 'Sidemount Platform Training',
      timeframe: 'ESTIMATED TIMEFRAME: 3 DAYS',
      phases: [
        {
          name: 'Phase 1: Platform Foundation',
          description:
            'Perfecting stable horizontal trim and exact buoyancy control while managing independent side-mounted cylinders.',
          points: [
            'Harness and bungee customization',
            'Horizontal trim alignment and stability',
            'Precision buoyancy control',
            'Independent cylinder gas management',
          ],
        },
        {
          name: 'Phase 2: Technical Integration',
          description:
            'Moving the stabilized sidemount platform into demanding open water profiles and technical decompression planning.',
          points: [
            'Multi-stage and deco cylinder handling',
            'Team gas-sharing protocols and awareness',
            'Silt awareness and restriction management',
            'Line tracking and failure drills',
          ],
        },
      ],
    },
    gallery: [
      {
        src: '/images/sidemountJVC.jpg',
        caption: 'Balanced trim in open water',
      },
      {
        src: '/images/SMharnesssetup.jpeg',
        caption: 'Rigging the harness before a dive',
      },
    ],
    prerequisites: ['Minimum Open Water certification', 'Comfortable with core buoyancy skills', 'Medically fit to dive'],
  },
  cave: {
    id: 'cave',
    eyebrow: 'The overhead environment',
    title: 'Cave Diving',
    subtitle: 'Explore the flooded passages beyond the light with disciplined training and unshakeable procedures.',
    heroImage:
      '/images/cavediversentrance.jpg',
    intro: [
      'Cave diving is the most demanding and most rewarding form of diving. There is no direct route to the surface, so every skill, every piece of gear and every decision must be deliberate and redundant.',
      'Training progresses in careful stages. You build line-handling, navigation, gas planning and failure management until moving calmly through an overhead environment becomes second nature.',
    ],
    stats: [
      { label: 'Environment', value: 'Full overhead' },
      { label: 'Gas rule', value: 'Rule of thirds' },
      { label: 'Typical duration', value: '5 - 10 days' },
      { label: 'Min. certification', value: 'Nitrox + experience' },
    ],
    pillars: [
      {
        title: 'Guideline mastery',
        text: 'Lay, follow and manage a continuous guideline to the surface in zero visibility.',
      },
      {
        title: 'Failure management',
        text: 'Rehearse light, gas and buddy failures until your response is automatic and calm.',
      },
      {
        title: 'Conservation',
        text: 'Protect fragile cave formations with precise trim, propulsion and awareness.',
      },
    ],
    levelsHeading: 'Training Track',
    levelsIntro:
      'The non-negotiable linear progression from foundational overhead control to complex cave navigation.',
    levels: [
      {
        name: 'Cavern Diver',
        meta: 'ESTIMATED: 2-3 DAYS // THE FOUNDATION',
        points: [
          'The Focus: Transitioning into the overhead while mastering absolute buoyancy, horizontal trim, and non-silting propulsion.',
          'Core Skills: Standard protocol baselines, primary and secondary reels, line-following mechanics, and basic emergency drills.',
        ],
      },
      {
        name: 'Intro to Cave Diver',
        meta: 'ESTIMATED: 2-3 DAYS // THE PROGRESSION',
        points: [
          'The Focus: Moving past cavern boundaries into total darkness on a single, continuous safety guideline with limited penetration.',
          'Core Skills: Navigating strict gas management, silt-out exit drills, team awareness, and touch-contact emergency communication.',
        ],
      },
      {
        name: 'Full Cave Diver',
        meta: 'ESTIMATED: 4-5 DAYS // COMPLETE EMPOWERMENT',
        points: [
          'The Focus: Advanced environmental navigation across complex, branching cave systems with maximum operational freedom.',
          'Core Skills: Managing complex jumps, gaps, circuit navigation, mapping protocols, and stage cylinder deployment.',
        ],
      },
    ],
    gallery: [
      {
        src: '/images/cavedivers.jpg',
        caption: 'Navigating a flooded passage',
      },
      {
        src: '/images/CCRTim.jpeg',
        caption: 'Entering the cave: where preparation meets the unknown',
      },
    ],
    prerequisites: ['Nitrox certification recommended', 'Solid buoyancy and trim', 'Logged open-water experience', 'Medically fit to dive'],
  },
  technical: {
    id: 'technical',
    eyebrow: 'Beyond recreational limits',
    title: 'Technical Diving',
    subtitle: 'Extend your range with decompression, mixed gases and the discipline that makes deep dives repeatable.',
    heroImage:
      '/images/doubles.jpeg',
    intro: [
      'Technical diving opens up depths, wrecks and durations that lie beyond recreational limits. It demands planned decompression, multiple gases and a team that operates with precision.',
      'These courses build the planning, gas management and problem-solving skills that let you treat a demanding dive as a series of controlled, rehearsed steps rather than a gamble.',
    ],
    stats: [
      { label: 'Range', value: 'Extended depth' },
      { label: 'Gases', value: 'Nitrox, trimix, deco' },
      { label: 'Typical duration', value: '4 - 6 days' },
      { label: 'Min. certification', value: 'Advanced + Nitrox' },
    ],
    pillars: [
      {
        title: 'Decompression planning',
        text: 'Build and understand deco schedules, then execute them with margin and control.',
      },
      {
        title: 'Gas management',
        text: 'Plan bottom, travel and decompression gases and switch between them cleanly.',
      },
      {
        title: 'Team discipline',
        text: 'Operate as a coordinated team with clear communication and shared procedures.',
      },
    ],
    levelsHeading: 'Training Track',
    levelsIntro:
      'A comprehensive open-circuit technical progression hub supporting your entire pathway from foundational double-tank stability through complex decompression profiles and mixed-gas trimix plans.',
    levels: [
      {
        name: 'Technical Foundations',
        meta: 'ESTIMATED: 3 DAYS // LEVEL 1',
        agency: 'PADI Tec Basics // TDI Intro to Tech',
        points: [
          'The Focus: Mastering your body positioning, clean horizontal trim, and equipment layout before introducing the task-loading of staged decompression.',
          'The Standard: You leave certified to safely manage a redundant twinset platform, coordinate dual manifolds, and execute baseline technical dive profiles.',
        ],
      },
      {
        name: 'Decompression Diver',
        meta: 'ESTIMATED: 3-4 DAYS // LEVEL 2',
        agency: 'PADI Tec 40, 45, 50 // TDI Advanced Nitrox & Decompression Procedures',
        points: [
          'The Focus: Advancing past recreational limits to safely plan and execute staged decompression profiles using a custom accelerated gas mix.',
          'The Standard: You leave certified to manage multi-stage decompression cylinders, switch to accelerated gas mixtures, and handle team safety protocols under a deco obligation.',
        ],
      },
      {
        name: 'Mixed Gas & Trimix',
        meta: 'ESTIMATED: 5-6 DAYS // LEVEL 3',
        agency: 'PADI Tec 65 // Tec 100',
        points: [
          'The Focus: Adding Helium to your gas architecture to safely manage narcosis, mitigate oxygen exposure, and handle deep technical exposure limits.',
          'The Standard: You leave certified to plan and execute deep, multi-stage technical profiles using custom normoxic and hypoxic Helium Trimix mixtures.',
        ],
      },
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/7970796/pexels-photo-7970796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Descending on an extended-range dive',
      },
      {
        src: 'https://images.pexels.com/photos/7001622/pexels-photo-7001622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Exploring deeper structure',
      },
    ],
    prerequisites: ['Advanced Open Water and Nitrox', 'Comfort in a doubles or sidemount rig', 'Logged deeper experience', 'Medically fit to dive'],
  },
  rebreather: {
    id: 'rebreather',
    eyebrow: 'Closed-circuit diving',
    title: 'Rebreather Courses',
    subtitle: 'Closed-circuit training from your first loop dive to mixed-gas exploration, on the KISS Sidewinder and AP Inspiration.',
    heroImage: '/images/CCRHeader.jpeg',
    intro: [
      'A closed-circuit rebreather recycles your breathing gas, removing carbon dioxide and adding oxygen so almost nothing is wasted. The result is dramatically longer dives, warm moist gas and near-silent, bubble-free presence in the water.',
      'Rebreather training is a progression in its own right, independent of any overhead environment. You start with the fundamentals of the loop and build through decompression and mixed-gas diving, with cave-specific CCR work as an later specialism for those who want it. I teach on both the KISS Sidewinder and the AP Inspiration, so you train on the unit you intend to dive.',
    ],
    stats: [
      { label: 'Circuit', value: 'Closed / CCR' },
      { label: 'Units', value: 'KISS Sidewinder · AP Inspiration' },
      { label: 'Typical duration', value: '4 - 7 days' },
      { label: 'Min. certification', value: 'Nitrox + experience' },
    ],
    pillars: [
      {
        title: 'Loop understanding',
        text: 'Learn how the counterlungs, scrubber and cells work together to keep you breathing.',
      },
      {
        title: 'PO2 monitoring',
        text: 'Track and manage your oxygen partial pressure so the loop stays inside safe limits.',
      },
      {
        title: 'Bail-out discipline',
        text: 'Rehearse switching to open-circuit bail-out until it becomes an instinctive response.',
      },
    ],
    levels: [
      {
        name: 'CCR Air Diluent',
        meta: 'ESTIMATED: 8 DAYS // LEVEL 1 ENTRY',
        description: 'Unit Focus: KISS Sidewinder & AP Inspiration Platforms. Industry Pathway: TDI Air Diluent / PADI Tec CCR Basics (Mod 1 No-Deco). Shifting completely away from open-circuit muscle memory to master real-time loop mechanics, unit assembly, and execution of pre-dive checklists with strict personal discipline.',
        points: ['Unit assembly and strict pre-dive checklist execution',
  'Real-time diluent and oxygen loop management metrics',
  'Bail-out to open circuit safety protocols',
  'Buoyancy and precise horizontal trim on a closed loop'],
      },
      {
        name: 'CCR Air Diluent Decompression',
        meta: 'ESTIMATED: 8 DAYS // TECH DIVER ENTRY',
        description: 'Unit Focus: KISS Sidewinder & AP Inspiration Platforms. Industry Pathway: TDI Air Diluent Decompression / PADI Tec 40 CCR (Mod 1 Deco). Direct entry path for open-circuit technical divers or a clean upgrade track for Level 1 CCR divers looking to advance their loop operational skills.',
        points: ['Advanced loop electronics tracking and monitoring',
  'Planning and executing staged decompression obligations',
  'Deco gas transitions and bail-out management protocols',
  'Handling loop failure diagnostics under a decompression penalty'],
      },
      {
        name: 'CCR Mixed Gas & Trimix',
meta: 'ESTIMATED: 6 DAYS // LEVEL 2 PROGRESSION',
description: 'Unit Focus: KISS Sidewinder & AP Inspiration Platforms. Industry Pathway: TDI Mixed Gas / PADI Tec 60 CCR (Mod 2). Advanced training for certified decompression rebreather divers looking to integrate Helium into their rebreather loop architecture.',
points: [
  'Trimix diluent planning and gas density control metrics',
  'Managing multiple open-circuit technical bail-out logistics',
  'Extended decompression profiling and oxygen exposure limits',
  'Deep-water dive logistics and multi-stage execution profiles'
],
      },
      {
        name: 'CCR Cave Cross-Over',
meta: 'ESTIMATED: 5 DAYS // OVERHEAD CROSS-OVER',
description: 'Unit Focus: Open to any active CCR platform architecture. This intensive pathway is designed exclusively for certified, active Open Circuit Full Cave Divers looking to safely transition their established overhead navigation and air-sharing protocols onto a closed-circuit loop loop.',
points: [
  'Adapting open-circuit cave muscle memory to closed-circuit boundaries',
  'Unit-specific overhead failure management and emergency loop safety rules',
  'Complex rebreather bail-out mechanics and gas-matching execution profiles',
  'TDI certified overhead crossing parameters across all local systems'
],
      },
      {
        name: 'TDI CCR Cave Progression',
meta: 'ESTIMATED: 10 DAYS // COMPLETE OVERHEAD TRACK',
description: 'Unit Focus: Open to any active CCR platform architecture. Curriculum Pathway: TDI CCR Cavern // TDI CCR Intro to Cave // TDI CCR Full Cave. A comprehensive, non-negotiable linear progression for rebreather divers with no prior cave experience, built around developing strict survival habits in total darkness.',
points: [
  'Linear 3-course track from initial cavern limits to full cave navigation',
  'Mastering real-time loop tracking safety boundaries under severe task-loading',
  'Silt-out exit drills, touch-contact team routines, and emergency protocols',
  'Complex route navigation managing jumps, gaps, and circuit planning'
],
      },
    ],
    gallery: [
      {
        src: '/images/CCRJVC.jpeg',
        caption: 'Silent, bubble-free presence',
      },
      {
        src: '/images/CCRPlanning.jpg',
        caption: 'Planning the dive before entering the water',
      },
    ],
    prerequisites: ['Nitrox certification', 'Solid buoyancy and experience', 'Commitment to checklists', 'Medically fit to dive'],
  },
};
