const rutinas = [
  {
    difficulty: "beginner",
    ejercicios: ["Incline Hammer Curls", "Wide-grip barbell curl"],
    grupoMuscular: ["biceps"],
  },
  {
    difficulty: "beginner",
    ejercicios: [
      "Biceps curl to shoulder press",
      "Flexor Incline Dumbbell Curls",
    ],
    grupoMuscular: ["biceps"],
  },
  {
    difficulty: "beginner",
    ejercicios: ["Triceps dip"],
    grupoMuscular: ["triceps"],
  },
  {
    difficulty: "beginner",
    ejercicios: ["Dumbbell floor press"],
    grupoMuscular: ["triceps"],
  },
  {
    difficulty: "beginner",
    ejercicios: ["Bodyweight Flyes", "Chest dip"],
    grupoMuscular: ["chest"],
  },
  {
    difficulty: "beginner",
    ejercicios: ["Bodyweight Flyes", "Pushups"],
    grupoMuscular: ["chest"],
  },
  {
    difficulty: "beginner",
    ejercicios: [
      "One-Arm Dumbbell Row",
      "Bent Over Two-Arm Long Bar Row",
      "Seated Cable Rows",
      "Superman",
    ],
    grupoMuscular: ["lower_back", "middle_back"],
  },
  {
    difficulty: "beginner",
    ejercicios: [
      "Bent Over Two-Arm Long Bar Row",
      "Incline dumbbell row",
      "Seated Cable Rows",
      "Barbell Deadlift",
      "Back extension",
    ],
    grupoMuscular: ["lower_back", "middle_back"],
  },
  {
    difficulty: "beginner",
    ejercicios: [
      "Tire flip",
      "Clean from Blocks",
      "Hang Clean",
      "Barbell Deadlift",
      "Thigh adductor",
      "Weighted donkey calf raise",
    ],
    grupoMuscular: ["quadriceps", "hamstrings", "adductors", "calves"],
  },
  {
    difficulty: "beginner",
    ejercicios: [
      "Tire flip",
      "Single-Leg Press",
      "Barbell back squat to box",
      "Barbell Deadlift",
      "Thigh adductor",
      "Calf Press On The Leg Press Machine",
    ],
    grupoMuscular: ["quadriceps", "hamstrings", "adductors", "calves"],
  },
  {
    difficulty: "intermediate",
    ejercicios: ["EZ-bar spider curl", "Hammer Curls"],
    grupoMuscular: ["biceps"],
  },
  {
    difficulty: "intermediate",
    ejercicios: ["EZ-Bar Curl", "Zottman Curl"],
    grupoMuscular: ["biceps"],
  },
  {
    difficulty: "intermediate",
    ejercicios: [
      "Triceps dip",
      "Decline EZ-bar skullcrusher",
      "Dumbbell floor press",
    ],
    grupoMuscular: ["triceps"],
  },
  {
    difficulty: "intermediate",
    ejercicios: [
      "Cable V-bar push-down",
      "Weighted bench dip",
      "EZ-Bar Skullcrusher",
    ],
    grupoMuscular: ["triceps"],
  },
  {
    difficulty: "intermediate",
    ejercicios: ["Dumbbell Bench Press", "Pushups", "Close-grip bench press"],
    grupoMuscular: ["chest"],
  },
  {
    difficulty: "intermediate",
    ejercicios: ["Dumbbell Flyes", "Pushups", "Low-cable cross-over"],
    grupoMuscular: ["chest"],
  },
  {
    difficulty: "intermediate",
    ejercicios: [
      "T-Bar Row with Handle",
      "Atlas Stones",
      "Back extension",
      "Hyperextensions With No Hyperextension Bench",
    ],
    grupoMuscular: ["lower_back", "middle_back"],
  },
  {
    difficulty: "intermediate",
    ejercicios: [
      "Reverse-grip bent-over row",
      "Atlas Stones",
      "Superman",
      "Deadlift with Chains",
      "Deadlift with Bands",
    ],
    grupoMuscular: ["lower_back", "middle_back"],
  },
  {
    difficulty: "intermediate",
    ejercicios: [
      "Single-Leg Press",
      "Barbell Full Squat",
      "Barbell Deadlift",
      "Barbell Deadlift",
      "Thigh adductor",
      "Weighted donkey calf raise",
    ],
    grupoMuscular: ["quadriceps", "hamstrings", "adductors", "calves"],
  },
  {
    difficulty: "intermediate",
    ejercicios: [
      "Tire flip",
      "Barbell back squat to box",
      "Barbell Deadlift",
      "Barbell Deadlift",
      "Thigh adductor",
      "Calf Press On The Leg Press Machine",
    ],
    grupoMuscular: ["quadriceps", "hamstrings", "adductors", "calves"],
  },
  {
    difficulty: "expert",
    ejercicios: ["EZ-Bar Curl", "Incline Hammer Curls"],
    grupoMuscular: ["biceps"],
  },
  {
    difficulty: "expert",
    ejercicios: ["Flexor Incline Dumbbell Curls", "Concentration curl"],
    grupoMuscular: ["biceps"],
  },
  {
    difficulty: "expert",
    ejercicios: ["Kneeling cable triceps extension", "EZ-Bar Skullcrusher"],
    grupoMuscular: ["triceps"],
  },
  {
    difficulty: "expert",
    ejercicios: ["EZ-Bar Skullcrusher", "Cable V-bar push-down"],
    grupoMuscular: ["triceps"],
  },
  {
    difficulty: "expert",
    ejercicios: [
      "Barbell Bench Press - Medium Grip",
      "Incline dumbbell bench press",
      "Low-cable cross-over",
    ],
    grupoMuscular: ["chest"],
  },
  {
    difficulty: "expert",
    ejercicios: [
      "Dumbbell Bench Press",
      "Dumbbell Flyes",
      "Incline dumbbell bench press",
    ],
    grupoMuscular: ["chest"],
  },
  {
    difficulty: "expert",
    ejercicios: [
      "Pullups",
      "One-Arm Dumbbell Row",
      "Bent Over Two-Arm Long Bar Row",
      "Seated Cable Rows",
    ],
    grupoMuscular: ["lower_back", "middle_back"],
  },
  {
    difficulty: "expert",
    ejercicios: [
      "Pullups",
      "Bent Over Two-Arm Long Bar Row",
      "Incline dumbbell row",
      "Seated Cable Rows",
      "Barbell Deadlift",
    ],
    grupoMuscular: ["lower_back", "middle_back"],
  },
  {
    difficulty: "expert",
    ejercicios: [
      "Jumping rope",
      "Barbell Full Squat",
      "Single-Leg Press",
      "Barbell Deadlift",
      "Thigh abductor",
      "Smith Machine Calf Raise",
    ],
    grupoMuscular: ["quadriceps", "hamstrings", "adductors", "calves"],
  },
  {
    difficulty: "expert",
    ejercicios: [
      "Jumping rope",
      "Single-Leg Press",
      "Reverse Band Box Squat",
      "Barbell Deadlift",
      "Thigh abductor",
      "Seated Calf Raise",
    ],
    grupoMuscular: ["quadriceps", "hamstrings", "adductors", "calves"],
  },
];

module.exports = rutinas;
